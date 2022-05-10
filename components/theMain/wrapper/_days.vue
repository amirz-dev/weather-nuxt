<template>
  <Skeleton
    v-if="!weathers"
    :count="7"
    width="120px"
    height="168px"
    class="flex justify-center gap-5 flex-wrap lg:justify-between mt-11"
  />

  <div v-else class="flex justify-center gap-5 flex-wrap lg:justify-between mt-11">
    <div
      v-for="(day, index) in weathers"
      :key="index"
      class="w-[120px] h-[168px] pt-5 bg-white dark:bg-[#364680] rounded-[20px] flex flex-col items-center text-[18px] text-[#363E64] dark:text-white day-hover"
      :class="[
        background,
        {
          'day-active ': index == active.id,
          'border-b-4 border-red-500': index == 0,
        },
      ]"
      @click="activeDay(index)"
    >
      <img
        :src="
          'https://www.foreca.com/public/images/symbols/' + day.icon + '.svg'
        "
        :alt="day.description"
        class="w-[70px] h-[70px] -mt-1"
      />
      <p class="mt-2">
        {{ new Date(day.date).toLocaleDateString("en", { weekday: "short" }) }}
      </p>
      <p class="font-medium">{{ day.temp }}°</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    weathers() {
      return this.$store.getters.currentLoc.weathers;
    },
    active() {
      return this.$store.getters.activeDay;
    },
    background() {
      // change background when change location
      let background;

      switch (this.$store.getters.currentLoc.locIndex) {
        case "first":
          background = "from-[#9CBDFF] to-[#6498FF]";
          break;
        case "second":
          background = "from-[#FD9AC0] to-[#FF649D]";
          break;
        case "third":
          background = "from-[#FFC480] to-[#FFAE52]";
          break;
      }

      return background;
    },
  },
  methods: {
    activeDay(index) {
      // set active day and show weather
      this.$store.commit("setActiveDay", {
        ...this.weathers[index],
        id: index,
      });
    },
  },
};
</script>

<style></style>
