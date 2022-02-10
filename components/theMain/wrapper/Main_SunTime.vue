<template>
  <div class="flex">
    <div
      class="flex flex-col w-full lg:w-[395px] p-[25px] bg-white dark:bg-[#364680] rounded-[20px] mt-[18px] xl:ml-[18px]"
    >
      <!-- Title -->
      <div class="flex justify-between">
        <h3 class="text-[18px] text-[#363E64] dark:text-white">
          Sunrise & Sunset
        </h3>

        <i class="ri-add-circle-line text-[22px] text-[#C3C8DE]"></i>
      </div>

      <!-- locations -->
      <div class="" v-for="(item, index) in allLoc" :key="index">
        <div
          class="flex flex-col w-full bg-[#FFF8F0] dark:bg-[#00000026] rounded-2xl px-[15px] py-5 mt-5"
        >
          <!-- title -->
          <div class="flex justify-between items-center">
            <!-- address -->
            <div class="flex items-center gap-1">
              <i class="ri-map-pin-2-line text-[#5C92FF] text-[18px]"></i>
              <p class="text-[#363E64] dark:text-white text-[15px]">
                {{ item.name }}
              </p>
            </div>

            <div
              class="px-1 hover:cursor-pointer rounded-md transition ease-in-out duration-300 hover:bg-orange-100 dark:hover:bg-gray-800"
            >
              <i class="ri-more-2-line text-[#FFAE52] text-[22px]"></i>
            </div>
          </div>

          <div class="flex justify-between gap-1 lg:px-5">
            <!-- Sunrise -->
            <div class="flex gap-2 items-center">
              <i class="ri-sun-line text-[44px] text-[#FFAE52]"></i>

              <div class="flex flex-col">
                <p class="text-[14px] text-[#C3C8DE]">Sunrise</p>
                <p
                  class="text-[14px] md:text-[16px] font-medium text-[#5C92FF]"
                >
                  {{ item.weathers[0].sunrise.slice(0, 5) }} AM
                </p>
              </div>
            </div>

            <!-- Sunset -->
            <div class="flex gap-2 items-center">
              <i class="ri-moon-line text-[44px] text-[#FFAE52]"></i>

              <div class="flex flex-col">
                <p class="text-[14px] text-[#C3C8DE]">Sunset</p>
                <p
                  class="text-[14px] md:text-[16px] font-medium text-[#5C92FF]"
                >
                  {{ item.weathers[0].sunset.slice(0, 5) }} PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    allLoc() {
      const all = this.$store.getters.allLoc;
      const array = [];

      for (const key in all) {
        if (all[key].id) array.push(all[key]);
      }
      return array;
    },
  },
};
</script>

<style></style>
