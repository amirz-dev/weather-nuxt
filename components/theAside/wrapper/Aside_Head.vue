<template>
  <div class="flex flex-col-reverse sm:flex-row gap-y-4 md:gap-0 items-center">
    <!--===== Search box =====-->
    <div
      class="w-full h-[50px] flex justify-between items-center bg-[#F5F8FF] dark:bg-[#f5f8ff26] rounded-xl px-3"
    >
      <i class="ri-search-2-line text-[26px]" :class="color"></i>
      <input
        type="text"
        class="w-[80%] md:w-[140px] border-none bg-transparent focus:outline-none px-3 text-[18px]"
        :class="color"
        placeholder="Search..."
        id="search_input"
        v-model="search"
        @keypress.13="submit"
      />
      <div
        class="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-white dark:bg-[#17294E] hover:cursor-pointer"
        @click="submit"
      >
        <i class="ri-map-pin-line text-[22px]" :class="color"></i>
      </div>
    </div>

    <div class="flex items-center justify-end w-full gap-5">
      <!-- Dark mode -->
      <div
        class="relative flex md:hidden items-center justify-between px-3 w-[90px] h-[50px] bg-[#F0F5FF] dark:bg-[#364680] rounded-full hover:cursor-pointer"
        @click="darkModeChange"
      >
        <i
          class="ri-sun-line text-white dark:text-[#D6E4FF] text-[24px] z-10"
        ></i>
        <i
          class="ri-moon-line text-[#D6E4FF] dark:text-white text-[24px] z-10"
        ></i>

        <div
          class="absolute w-[35px] h-[35px] rounded-full bg-[#5C92FF] transition ease-in-out duration-300 left-[7px] dark:translate-x-[41px]"
        ></div>
      </div>
      <!--===== Github =====-->
      <div class="relative flex">
        <a
          href="https://github.com/amirz-dev/weather-nuxt"
          target="_blank"
          class="hover:cursor-pointer"
        >
          <i class="ri-github-line text-[28px] text-[#A3C2FF]"></i>
          <div
            class="absolute w-[11px] h-[11px] rounded-full bg-[#FF83B0] right-0 top-2"
          ></div>
        </a>
      </div>

      <!--===== Profile =====-->
      <div class="">
        <img
          :src="require('@/assets/img/1.jpg')"
          alt=""
          class="w-[50px] h-[50px] rounded-xl shadow-[#A3C2FF] shadow-md"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    submit() {
      if (this.search != "") {
        this.$store.dispatch("getCityInfo", {
          city: this.search,
          loc: this.whatLoc,
        });
      }
    },
    darkModeChange() {
      document.body.classList.toggle("dark");
    },
  },
  computed: {
    whatLoc() {
      return this.$store.getters.whatLoc;
    },
    color() {
      // change search box color
      let color;

      switch (this.whatLoc) {
        case "first":
          color = "text-[#A3C2FF] placeholder:text-[#A3C2FF]";
          break;
        case "second":
          color = "text-[#FD9AC0] placeholder:text-[#FD9AC0]";
          break;
        case "third":
          color = "text-[#FFC480] placeholder:text-[#FFC480]";
          break;
      }

      return color;
    },
  },
};
</script>

<style></style>
