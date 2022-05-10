<template>
  <div
    v-if="allLoc[locsIndex(1)].id"
    class="relative w-full h-[110px] mt-7 px-5 py-[25px] rounded-[20px] bg-gradient-to-br flex items-center justify-between text-white font-medium"
    :class="colors.background"
  >
    <div class="flex flex-col text-white z-10">
      <div class="flex items-center">
        <i class="ri-windy-line text-[24px]"></i>
        <p class="text-[17px] ml-2">Wind</p>
        <div class="w-[1px] h-[22px] bg-white mx-[16px]"></div>
        <p class="text-[17px]">{{ weather.wind }} km/h</p>
      </div>
      <div class="flex items-center">
        <i class="ri-drop-line text-[24px]"></i>
        <p class="text-[17px] ml-2">Hum</p>
        <div class="w-[1px] h-[22px] bg-white ml-[18px] mr-[16px]"></div>
        <p class="text-[17px]">{{ weather.humidity }} %</p>
      </div>
    </div>

    <div class="flex flex-col items-end text-white z-10">
      <!--===== loc button =====-->
      <div
        class="flex items-center hover:cursor-pointer transition ease-in-out duration-300 rounded-lg px-2 -mr-3"
        :class="colors.button"
        @click="changeLoc"
      >
        <i class="ri-map-pin-2-line text-[22px]"></i>
        <p class="text-[17px] ml-[10px]">{{ filterLoc.name }}</p>
        <i class="ri-arrow-down-s-line text-[20px] ml-[5px]"></i>
      </div>

      <h1 class="text-[30px]">{{ weather.temp }}°</h1>
    </div>

    <!--=== drops ===-->
    <div
      class="absolute w-4 h-4 rounded-full bg-gradient-to-r opacity-25"
      v-for="(item, index) in drops"
      :key="index"
      :class="[item.style, colors.drops]"
    ></div>
  </div>

  <!-- when other location doesn't exist show empty box -->
  <div
    v-else-if="allLoc[locsIndex()].id"
    class="flex items-center justify-center w-full h-[110px] rounded-[20px] mt-7 border-dashed border-2 hover:cursor-pointer"
    :class="
      index == 0
        ? 'border-[#FF649D] bg-[#FF649D33]'
        : 'border-[#FFB764] bg-[#ffc48033]'
    "
    @click="changeLoc"
  >
    <i
      class="ri-add-line text-[50px]"
      :class="index == 0 ? 'text-[#FF649D]' : 'text-[#FFB764]'"
    ></i>
  </div>
</template>

<script>
export default {
  props: ["index"],
  data() {
    return {
      drops: [
        {
          style: "bottom-[31px] left-[12px]",
        },
        {
          style: "bottom-[12px] right-[12px] rotate-90",
        },
        {
          style: "top-[46px] right-[104px] rotate-12",
        },
        {
          style: "top-[73px] right-[170px] rotate-45",
        },
        {
          style: "top-[14px] right-[93px] -rotate-90",
        },
      ],
      Locs: ["first", "second", "third"],
    };
  },
  computed: {
    allLoc() {
      return this.$store.getters.allLoc;
    },
    filterLoc() {
      return this.$store.getters.filteredLoc[this.index];
    },
    weather() {
      return this.$store.getters.filteredLoc[this.index].weathers[0];
    },
    colors() {
      return this.$store.getters.colors(this.filterLoc.locIndex);
    },
  },
  methods: {
    locsIndex(n = 0) {
      return this.Locs[this.index + n];
    },
    changeLoc() {
      // when click change btn, change what location and selected search input & go top of page
      // thats moment can set new location
      this.$store.commit(
        "changeWhatLoc",
        this.filterLoc ? this.filterLoc.locIndex : this.locsIndex(1)
      );

      document.querySelector("#search_input").select();
      document.documentElement.scrollTop = 0;

      // if exist location change on current location and show next 7 days weather
      if (this.allLoc[this.locsIndex(1)].id) {
        this.$store.commit(
          "set_CurrentLoc_and_FilterLocations",
          this.filterLoc
        );

        // set first day to active and current day
        const currentLoc = this.$store.getters.currentLoc;
        this.$store.commit("setActiveDay", {
          ...currentLoc.weathers[0],
          id: 0,
        });
      }
    },
  },
};
</script>

<style></style>
