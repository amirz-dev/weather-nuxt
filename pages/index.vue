<template>
  <div class="flex flex-col md:flex-row-reverse">
    <!--===== Aside =====-->
    <Aside />

    <!--===== Main =====-->
    <Main />
  </div>
</template>

<script>
import Aside from "~/components/theAside/Aside.vue";
import Main from "~/components/theMain/Main.vue";
export default {
  name: "IndexPage",
  components: {
    Aside,
    Main,
  },
};
</script>
