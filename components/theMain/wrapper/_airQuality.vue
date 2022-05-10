<template>
  <div
    class="flex flex-col gap-6 w-full h-[240pxx] p-[25px] bg-white dark:bg-[#364680] rounded-[20px]"
  >
    <!-- Title -->
    <div class="flex justify-between">
      <h3 class="text-[18px] text-[#363E64] dark:text-white">
        Air Quality Index
      </h3>

      <!--===== loc button =====-->
      <div
        class="flex items-center hover:cursor-pointer text-[#5C92FF] transition ease-in-out duration-300 hover:bg-[#F5F8FF] dark:hover:bg-[#001c5c] rounded-lg px-2 -mr-3"
      >
        <i class="ri-map-pin-2-line text-[22px]"></i>
        <p class="text-[17px] text-[#BDC2DB] ml-[10px]">Karaj</p>
        <i class="ri-arrow-down-s-line text-[20px] ml-[5px]"></i>
      </div>
    </div>

    <!-- Quality -->
    <div class="flex justify-between items-center text-[#00D656] font-medium">
      <div class="flex items-center gap-2">
        <i class="ri-windy-line text-[42px]"></i>

        <div class="flex flex-col">
          <h3 class="text-[18px]">Good</h3>
          <p class="text-[14px] text-[#C3C8DE]">A perfect day for a walk!</p>
        </div>
      </div>

      <button
        class="flex justify-center items-center w-[80px] h-[35px] rounded-md bg-[#F5F8FF] dark:bg-[#1E3364] text-[#5C92FF] transition ease-in-out duration-300 hover:cursor-pointer hover:bg-[#E2EAFC] dark:hover:bg-[#001c5c]"
      >
        Refresh
      </button>
    </div>

    <!-- sub -->
    <div class="flex justify-between gap-3 lg:gap-1 flex-wrap">

      <div
        class="flex flex-col justify-center items-center gap-3 w-[50px] h-[75px] rounded-lg bg-[#F0FFF6] dark:bg-[#00000026] text-[#00D656] font-medium"
        v-for="(item, index) in AirData" :key="index"
      >
        <p class="text-[16px]">{{item.num}}</p>
        <p class="text-[14px]">{{item.name}}</p>
      </div>
           
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      AirData:[
        {
          num:9.3,
          name:'PM2'
        },
        {
          num:12.2,
          name:'PM10'
        },
        {
          num:4.8,
          name:'CO₂'
        },
        {
          num:4.6,
          name:'NO₂'
        },
        {
          num:6.5,
          name:'O₃'
        },
        {
          num:0.9,
          name:'CO'
        },
      ]
    }
  },
};
</script>

<style></style>
