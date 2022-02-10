<template>
  <div class="w-full mt-12 rounded-[20px] overflow-hidden">
    <!-- when current location doesn't loaded show Skeleton -->
    <Skeleton v-if="!currentLoc.id" height="500px" />

    <div
      v-else
      class="relative h-[500px] bg-gradient-to-br flex flex-col items-center text-white font-medium"
      :class="colors.background"
    >
      <!--===== loc button =====-->
      <div
        class="absolute top-8 left-6 flex items-center hover:cursor-pointer transition ease-in-out duration-300 rounded-lg px-2"
        :class="colors.button"
        @click="changeLoc"
      >
        <i class="ri-map-pin-2-line text-[22px]"></i>
        <p class="text-[22px] ml-[10px]">{{ currentLoc.name }}</p>
        <i class="ri-arrow-down-s-line text-[20px] ml-[5px]"></i>
      </div>

      <!--===== sun =====-->
      <div class="absolute right-5 top-5 flex justify-center items-center">
        <span
          class="absolute w-[160px] h-[160px] rounded-full bg-white bg-opacity-10"
        ></span>
        <span
          class="absolute w-[130px] h-[130px] rounded-full bg-white bg-opacity-20"
        ></span>
        <span
          class="absolute w-[88px] h-[88px] rounded-full bg-[#FEF97A] bg-opacity-100"
        ></span>
      </div>

      <img
        :src="
          'https://www.foreca.com/public/images/symbols/' + active.icon + '.svg'
        "
        alt="active.description"
        class="w-[120px] h-[180px] mt-[22px]"
      />
      <p class="text-[16px]">
        {{ active.date | date }}
      </p>
      <h1 class="text-[90px]">{{ active.temp }}°</h1>
      <h3 class="text-[22px]">{{ active.description }}</h3>

      <div class="flex flex-col text-white">
        <div class="flex items-center">
          <i class="ri-windy-line text-[24px]"></i>
          <p class="text-[18px] ml-2">Wind</p>
          <div class="w-[1px] h-[22px] bg-white mx-[22px]"></div>
          <p class="text-[18px]">{{ active.wind }} km/h</p>
        </div>
        <div class="flex items-center">
          <i class="ri-drop-line text-[24px]"></i>
          <p class="text-[18px] ml-2">Hum</p>
          <div class="w-[1px] h-[22px] bg-white ml-[24px] mr-[22px]"></div>
          <p class="text-[18px]">{{ active.humidity }} %</p>
        </div>
      </div>

      <!--=== drops ===-->
      <div
        class="absolute w-3 h-3 rounded-full bg-gradient-to-r opacity-50"
        v-for="(item, index) in drops"
        :key="index"
        :class="[item.style, colors.drops]"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drops: [
        {
          style: "top-[177px] right-[22px]",
        },
        {
          style: "top-[131px] left-[36px] rotate-90",
        },
        {
          style: "top-[232px] left-[86px] rotate-12",
        },
        {
          style: "bottom-[90px] left-[24px] rotate-45",
        },
        {
          style: "bottom-[125px] right-[77px] rotate-90",
        },
      ],
    };
  },
  computed: {
    currentLoc() {
      return this.$store.getters.currentLoc;
    },
    active() {
      return this.$store.getters.activeDay;
    },
    colors() {
      return this.$store.getters.colors(this.currentLoc.locIndex)
    },
  },
  methods: {
    changeLoc() {
      // when click location btn, change whatLoc state && selected search input and go top in page 
      this.$store.commit(
        "changeWhatLoc",
        this.currentLoc ? this.currentLoc.locIndex : "first"
      );
      document.querySelector("#search_input").select();
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style></style>
