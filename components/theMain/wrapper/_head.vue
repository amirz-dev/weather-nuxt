<template>
  <div class="flex justify-between">
    <!-- Time -->
    <div class="flex flex-col font-medium">
      <h1 class="text-[40px] md:text-[45px] lg:text-[50px] text-[#5C92FF]">
        {{ time }}
      </h1>

      <p
        class="text-[14px] md:text-[16px] lg:text-[18px] text-[#363E64] dark:text-white"
      >
        {{ Date.now() | date }}{{ `, ${new Date().getFullYear()}` }}
      </p>

      <div class="flex text-[#6498FF] items-center">
        <i
          class="text-[32px] lg:text-[37px]"
          :class="welcomeMsg == 'Good night' ? 'ri-moon-line' : 'ri-sun-line'"
        ></i>
        <h1
          class="text-[28px] md:text-[25px] lg:text-[32px] font-semibold ml-3"
        >
          {{ welcomeMsg }}, Amir!
        </h1>
      </div>
    </div>

    <!-- Dark mode -->
    <div
      class="relative hidden md:flex items-center justify-between px-3 w-[90px] h-[50px] bg-white dark:bg-[#364680] rounded-full hover:cursor-pointer"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: "00:00",
    };
  },
  methods: {
    darkModeChange() {
      document.body.classList.toggle("dark");
    },
  },
  computed: {
    welcomeMsg() {
      // change welcome message
      const time = new Date().getHours();
      if (time > 3 && time < 12) {
        return "Good morning";
      } else if (time >= 12 && time < 18) {
        return "Good afternoon";
      } else {
        return "Good night";
      }
    },
  },
  beforeCreate() {
    // get time
    setInterval(() => {
      const d = new Date();
      const hour = d.getHours();
      const minutes = d.getMinutes();
      const format = hour >= 12 ? "PM" : "AM";

      this.time = `${hour > 12 ? hour - 12 : hour}:${
        minutes < 10 ? "0" + minutes : minutes
      } ${format}`;
    }, 1000);
  },
};
</script>

<style></style>
