<template>
  <div class=" w-full md:w-[365px] lg:w-[460px] flex flex-col p-3 sm:px-8 md:p-5 lg:p-[47px] bg-white dark:bg-[#17294E]">
    <!--===== Aside header =====-->
    <Head />

    <!--===== Current Location =====-->
    <CurrentLocation />

    <!--===== More Location =====-->
    <MoreLocation v-for="i in 2" :key="i" :index="i - 1" />

  </div>
</template>

<script>
import Head from "./wrapper/Aside_Head.vue";
import CurrentLocation from "./wrapper/Aside_CurrentLocation.vue";
import MoreLocation from "./wrapper/Aside_MoreLocation.vue";

export default {
  name: "aside-wrapper",
  components: {
    Head,
    CurrentLocation,
    MoreLocation,
  },
};
</script>

<style></style>
