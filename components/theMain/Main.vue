<template>
  <div class=" w-full md:w-[calc(100%-365px)] lg:w-[calc(100%-460px)] bg-[#F0F5FF] dark:bg-[#193367] h-full flex flex-col p-3 md:p-5 lg:p-[47px]">
        <!--===== head =====-->
        <Head/>

        <!--===== Days =====-->
        <Days/>

        <div class="flex flex-col-reverse xl:flex-row">
          <!--===== Air Quality and rainfall =====-->
          <div class="flex flex-col lg:w-[395px] mt-[18px]">
            <AirQuality/>

            <Rainfall/>
          </div>

          <!--===== Sunset & Sunrise =====-->
          <SunTime/>
        </div>
      </div>
</template>

<script>
import Head from './wrapper/Main_Head.vue'
import Days from './wrapper/Main_Days.vue'
import AirQuality from './wrapper/Main_AirQuality.vue'
import Rainfall from './wrapper/Main_Rainfall.vue'
import SunTime from './wrapper/Main_SunTime.vue'
export default {
    name:'main-wrapper',
    components:{
        Head,
        Days,
        AirQuality,
        Rainfall,
        SunTime,
    }
}
</script>

<style>

</style>