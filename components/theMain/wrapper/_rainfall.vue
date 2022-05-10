<template>
  <div
    class="flex flex-col gap-6 w-full h-[240pxx] p-[25px] bg-white dark:bg-[#364680] rounded-[20px] mt-[18px]"
  >
    <!-- Title -->
    <div class="flex justify-between">
      <h3 class="text-[18px] text-[#363E64] dark:text-white">
        Monthly Rainfall
      </h3>

      <div class="flex gap-3">
        <div class="flex items-center gap-1">
          <div class="w-[10px] h-[10px] bg-[#5C92FF] rounded-sm"></div>
          <p class="text-[#363E64] dark:text-white text-[16px] font-medium">
            Rain
          </p>
        </div>
        <div class="flex items-center gap-1">
          <div class="w-[10px] h-[10px] bg-[#FFB868] rounded-sm"></div>
          <p class="text-[#363E64] dark:text-white text-[16px] font-medium">
            Sun
          </p>
        </div>
      </div>
    </div>

    <!-- Rainfall monthly -->
    <div class="flex justify-between mt-[45px]">
      <div
        class="w-[8px] h-[124px] bg-[#EAF0FF] rounded-full flex flex-col justify-end gap-1"
        v-for="(item, index) in rainfallData"
        :key="index"
      >
        <div class="w-full bg-[#5C92FF] rounded-full" :class="item.rain"></div>
        <div class="w-full bg-[#FFAE52] rounded-full" :class="item.sun"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rainfallData: [
        {
          rain: "h-[15px]",
          sun: "h-[67px]",
        },
        {
          rain: "h-[72px]",
          sun: "h-[29px]",
        },
        {
          rain: "h-[38px]",
          sun: "h-[58px]",
        },
        {
          rain: "h-[11px]",
          sun: "h-[59px]",
        },
        {
          rain: "h-[40px]",
          sun: "h-[67px]",
        },
        {
          rain: "h-[73px]",
          sun: "h-[29px]",
        },
        {
          rain: "h-[20px]",
          sun: "h-[81px]",
        },
        {
          rain: "h-[21px]",
          sun: "h-[59px]",
        },
        {
          rain: "h-[73px]",
          sun: "h-[16px]",
        },
        {
          rain: "h-[73px]",
          sun: "h-[29px]",
        },
        {
          rain: "h-[39px]",
          sun: "h-[39px]",
        },
        {
          rain: "h-[74px]",
          sun: "h-[39px]",
        },
      ],
    };
  },
};
</script>

<style></style>
