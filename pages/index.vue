<template>
  <div class="flex flex-row-reverse">
      <!--===== Aside =====-->
      <div class="min-w-[460px] flex flex-col p-[47px] bg-white dark:bg-[#17294E]">
        <div class="flex items-center">
          <!--===== Search box =====-->
          <div
            class="w-[220px] h-[50px] flex items-center bg-[#F5F8FF] dark:bg-[#f5f8ff26] rounded-xl px-3"
          >
            <img :src="require('@/assets/img/Search-Vector.svg')" alt="" class="w-[26px]" />
            <input
              type="text"
              class="w-[140px] border-none bg-transparent focus:outline-none px-3 text-[18px] text-[#A3C2FF] placeholder:text-[#A3C2FF]"
              placeholder="Search..."
            />
            <div
              class="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-white dark:bg-[#17294E]"
            >
              <i class="ri-map-pin-line text-[22px] text-[#A3C2FF]"></i>
            </div>
          </div>

          <!--===== Notification =====-->
          <div class="relative flex ml-12">
            <i class="ri-notification-line text-[28px] text-[#A3C2FF]"></i>
            <div
              class="absolute w-[11px] h-[11px] rounded-full bg-[#FF83B0] right-0 top-2"
            ></div>
          </div>

          <!--===== Profile =====-->
          <div class="ml-5">
            <img
              :src="require('@/assets/img/1.jpg')"
              alt=""
              class="w-[50px] h-[50px] rounded-xl shadow-[#A3C2FF] shadow-md"
            />
          </div>
        </div>

        <!--===== Location 1 =====-->
        <div
          class="relative w-full h-[500px] mt-12 rounded-[20px] bg-gradient-to-br from-[#9CBDFF] to-[#6498FF] flex flex-col items-center text-white font-medium overflow-hidden"
        >
          <!--===== loc button =====-->
          <div
            class="absolute top-8 left-6 flex items-center hover:cursor-pointer transition ease-in-out duration-300 hover:bg-cyan-600 rounded-lg px-2"
          >
            <i class="ri-map-pin-2-line text-[22px]"></i>
            <p class="text-[22px] ml-[10px]">Dhaka</p>
            <i class="ri-arrow-down-s-line text-[20px] ml-[5px]"></i>
          </div>

          <!--===== sun =====-->
          <div class="absolute right-5 top-5 flex justify-center items-center">
            <span
              class="absolute w-[160px] h-[160px] rounded-full bg-white opacity-10"
            ></span>
            <span
              class="absolute w-[130px] h-[130px] rounded-full bg-white opacity-20"
            ></span>
            <span
              class="absolute w-[88px] h-[88px] rounded-full bg-[#FEF97A] opacity-100"
            ></span>
          </div>

          <img
            :src="require('@/assets/img/Cloud 3 zap.svg')"
            alt=""
            class="w-[180px] h-[180px] mt-[22px]"
          />
          <p class="text-[16px]">Today, 14 April</p>
          <h1 class="text-[90px]">29°</h1>
          <h3 class="text-[22px]">Sunny</h3>

          <div class="flex flex-col text-white">
            <div class="flex items-center">
              <i class="ri-windy-line text-[24px]"></i>
              <p class="text-[18px] ml-2">Wind</p>
              <div class="w-[1px] h-[22px] bg-white mx-[22px]"></div>
              <p class="text-[18px]">19 km/h</p>
            </div>
            <div class="flex items-center">
              <i class="ri-drop-line text-[24px]"></i>
              <p class="text-[18px] ml-2">Hum</p>
              <div class="w-[1px] h-[22px] bg-white ml-[24px] mr-[22px]"></div>
              <p class="text-[18px]">22 %</p>
            </div>
          </div>

          <!--=== drops ===-->
          <div
            class="absolute top-[177px] right-[22px] w-3 h-3 rounded-full bg-gradient-to-r from-[#70A0FF] via-[#70A0FF] to-[#90B5FF] opacity-50"
          ></div>
          <div
            class="absolute top-[131px] left-[36px] w-3 h-3 rounded-full bg-gradient-to-r from-[#70A0FF] via-[#70A0FF] to-[#90B5FF] opacity-50"
          ></div>
          <div
            class="absolute top-[232px] left-[86px] w-3 h-3 rounded-full bg-gradient-to-r from-[#70A0FF] via-[#70A0FF] to-[#90B5FF] opacity-50"
          ></div>
          <div
            class="absolute bottom-[90px] left-[24px] w-5 h-5 rounded-full bg-gradient-to-r from-[#70A0FF] via-[#70A0FF] to-[#90B5FF] opacity-50"
          ></div>
          <div
            class="absolute bottom-[125px] right-[77px] w-3 h-3 rounded-full bg-gradient-to-r from-[#70A0FF] via-[#70A0FF] to-[#90B5FF] opacity-50"
          ></div>
        </div>

        <!--===== Location 2 =====-->
        <div
          class="relative w-full h-[110px] mt-7 px-5 py-[25px] rounded-[20px] bg-gradient-to-br from-[#FD9AC0] to-[#FF649D] flex items-center justify-between text-white font-medium"
        >
          <div class="flex flex-col text-white z-10">
            <div class="flex items-center">
              <i class="ri-windy-line text-[24px]"></i>
              <p class="text-[17px] ml-2">Wind</p>
              <div class="w-[1px] h-[22px] bg-white mx-[16px]"></div>
              <p class="text-[17px]">15 km/h</p>
            </div>
            <div class="flex items-center">
              <i class="ri-drop-line text-[24px]"></i>
              <p class="text-[17px] ml-2">Hum</p>
              <div class="w-[1px] h-[22px] bg-white ml-[18px] mr-[16px]"></div>
              <p class="text-[17px]">28 %</p>
            </div>
          </div>

          <div class="flex flex-col items-end text-white z-10">
            <!--===== loc button =====-->
            <div
              class="flex items-center hover:cursor-pointer transition ease-in-out duration-300 hover:bg-rose-600 rounded-lg px-2 -mr-3"
            >
              <i class="ri-map-pin-2-line text-[22px]"></i>
              <p class="text-[17px] ml-[10px]">Tokyo</p>
              <i class="ri-arrow-down-s-line text-[20px] ml-[5px]"></i>
            </div>

            <h1 class="text-[30px]">26°</h1>
          </div>

          <!--=== drops ===-->
          <div
            class="absolute bottom-[31px] left-[12px] w-4 h-4 rounded-full bg-gradient-to-r from-[#FF649D] via-[#FF649D] to-[#FFFFFF] opacity-25"
          ></div>
          <div
            class="absolute bottom-[12px] right-[12px] w-3 h-3 rounded-full bg-gradient-to-r from-[#FF649D] via-[#FF649D] to-[#FFFFFF] opacity-25 rotate-90"
          ></div>
          <div
            class="absolute top-[46px] right-[104px] w-3 h-3 rounded-full bg-gradient-to-r from-[#FF649D] via-[#FF649D] to-[#FFFFFF] opacity-25 rotate-12"
          ></div>
          <div
            class="absolute top-[73px] right-[170px] w-5 h-5 rounded-full bg-gradient-to-r from-[#FF649D] via-[#FF649D] to-[#FFFFFF] opacity-25 rotate-45"
          ></div>
          <div
            class="absolute top-[14px] right-[93px] w-3 h-3 rounded-full bg-gradient-to-r from-[#FF649D] via-[#FF649D] to-[#FFFFFF] opacity-25 -rotate-90"
          ></div>
        </div>

        <!--===== Location 3 =====-->
        <div
          class="relative w-full h-[110px] mt-7 px-5 py-[25px] rounded-[20px] bg-gradient-to-br from-[#FFC480] to-[#FFAE52] flex items-center justify-between text-white font-medium"
        >
          <div class="flex flex-col text-white z-10">
            <div class="flex items-center">
              <i class="ri-windy-line text-[24px]"></i>
              <p class="text-[17px] ml-2">Wind</p>
              <div class="w-[1px] h-[22px] bg-white mx-[16px]"></div>
              <p class="text-[17px]">17 km/h</p>
            </div>
            <div class="flex items-center">
              <i class="ri-drop-line text-[24px]"></i>
              <p class="text-[17px] ml-2">Hum</p>
              <div class="w-[1px] h-[22px] bg-white ml-[18px] mr-[16px]"></div>
              <p class="text-[17px]">25 %</p>
            </div>
          </div>

          <div class="flex flex-col items-end text-white z-10">
            <!--===== loc button =====-->
            <div
              class="flex items-center hover:cursor-pointer transition ease-in-out duration-300 hover:bg-amber-600 rounded-lg px-2 -mr-3"
            >
              <i class="ri-map-pin-2-line text-[22px]"></i>
              <p class="text-[17px] ml-[10px]">NY</p>
              <i class="ri-arrow-down-s-line text-[20px] ml-[5px]"></i>
            </div>

            <h1 class="text-[30px]">31°</h1>
          </div>

          <!--=== drops ===-->
          <div
            class="absolute bottom-[31px] left-[12px] w-4 h-4 rounded-full bg-gradient-to-r from-[#FFC480] via-[#FFC480] to-[#FFFFFF] opacity-25"
          ></div>
          <div
            class="absolute bottom-[12px] right-[12px] w-3 h-3 rounded-full bg-gradient-to-r from-[#FFC480] via-[#FFC480] to-[#FFFFFF] opacity-25 rotate-90"
          ></div>
          <div
            class="absolute top-[46px] right-[104px] w-3 h-3 rounded-full bg-gradient-to-r from-[#FFC480] via-[#FFC480] to-[#FFFFFF] opacity-25 rotate-12"
          ></div>
          <div
            class="absolute top-[73px] right-[170px] w-5 h-5 rounded-full bg-gradient-to-r from-[#FFC480] via-[#FFC480] to-[#FFFFFF] opacity-25 rotate-45"
          ></div>
          <div
            class="absolute top-[14px] right-[93px] w-3 h-3 rounded-full bg-gradient-to-r from-[#FFC480] via-[#FFC480] to-[#FFFFFF] opacity-25 -rotate-90"
          ></div>
        </div>
      </div>

      <!--===== Main =====-->
      <div class="w-full bg-[#F0F5FF] dark:bg-[#193367] h-full flex flex-col p-[47px]">
        <!--===== head =====-->
        <div class="flex justify-between">
          <!-- Time -->
          <div class="flex flex-col font-medium">
            <h1 class="text-[50px] text-[#5C92FF]">7:20 AM</h1>
            <p class="text-[18px] text-[#363E64] dark:text-white">Wednesday, 14 April, 2021</p>

            <div class="flex text-[#6498FF] items-center">
              <i class="ri-sun-line text-[37px]"></i>
              <h1 class="text-[32px] font-semibold ml-3">
                Good morning, Amir!
              </h1>
            </div>
          </div>

          <!-- Dark mode -->
          <div
            class="relative flex items-center justify-between px-3 w-[90px] h-[50px] bg-white dark:bg-[#364680] rounded-full hover:cursor-pointer"
          >
            <i class="ri-sun-line text-white dark:text-[#D6E4FF] text-[24px] z-10"></i>
            <i class="ri-moon-line text-[#D6E4FF] dark:text-white text-[24px] z-10"></i>

            <div
              class="absolute w-[35px] h-[35px] rounded-full bg-[#5C92FF] left-[7px] dark:left-[48px]"
            ></div>
          </div>
        </div>

        <!--===== Days =====-->
        <div class="flex justify-between mt-11">
          <div
            class="w-[120px] h-[168px] bg-white dark:bg-[#364680] rounded-[20px] flex flex-col items-center text-[18px] text-[#363E64] dark:text-white day-hover"
          >
            <img :src="require('@/assets/img/Zaps.svg')" alt="" class="w-[90px] h-[90px] -mt-1" />
            <p class="mt-2">Sun</p>
            <p class="font-medium">28°</p>
          </div>

          <div
            class="w-[120px] h-[168px] bg-white dark:bg-[#364680] rounded-[20px] flex flex-col items-center text-[18px] text-[#363E64] dark:text-white day-hover"
          >
            <img
              :src="require('@/assets/img/Big rain drops.svg')"
              alt=""
              class="w-[90px] h-[90px] -mt-1"
            />
            <p class="mt-2">Mon</p>
            <p class="font-medium">17°</p>
          </div>

          <div
            class="w-[120px] h-[168px] bg-white dark:bg-[#364680] rounded-[20px] flex flex-col items-center text-[18px] text-[#363E64] dark:text-white day-hover"
          >
            <img
              :src="require('@/assets/img/Sun cloud mid rain.svg')"
              alt=""
              class="w-[90px] h-[90px] -mt-1"
            />
            <p class="mt-2">Tue</p>
            <p class="font-medium">20°</p>
          </div>

          <div
            class="w-[120px] h-[168px] bg-white dark:bg-[#364680] rounded-[20px] flex flex-col items-center text-[18px] bg-gradient-to-br from-[#94B8FF] to-[#6598FF] text-white"
          >
            <img
              :src="require('@/assets/img/Cloud 3 zap.svg')"
              alt=""
              class="w-[90px] h-[90px] -mt-1"
            />
            <p class="mt-2">Wed</p>
            <p class="font-medium">29°</p>
          </div>

          <div
            class="w-[120px] h-[168px] bg-white dark:bg-[#364680] rounded-[20px] flex flex-col items-center text-[18px] text-[#363E64] dark:text-white day-hover"
          >
            <img
              :src="require('@/assets/img/Moon fast wind.svg')"
              alt=""
              class="w-[90px] h-[90px] -mt-1"
            />
            <p class="mt-2">Thu</p>
            <p class="font-medium">22°</p>
          </div>

          <div
            class="w-[120px] h-[168px] bg-white dark:bg-[#364680] rounded-[20px] flex flex-col items-center text-[18px] text-[#363E64] dark:text-white day-hover"
          >
            <img
              :src="require('@/assets/img/Moon cloud fast wind.svg')"
              alt=""
              class="w-[90px] h-[90px] -mt-1"
            />
            <p class="mt-2">Fri</p>
            <p class="font-medium">16°</p>
          </div>

          <div
            class="w-[120px] h-[168px] bg-white dark:bg-[#364680] rounded-[20px] flex flex-col items-center text-[18px] text-[#363E64] dark:text-white day-hover"
          >
            <img :src="require('@/assets/img/Zaps.svg')" alt="" class="w-[90px] h-[90px] -mt-1" />
            <p class="mt-2">Sat</p>
            <p class="font-medium">28°</p>
          </div>
        </div>

        <div class="flex">
          <!--===== Air Quality and rainfall =====-->
          <div class="flex flex-col w-[395px] mt-[18px]">
            <!--===== Air Quality  =====-->
            <div
              class="flex flex-col gap-6 w-full h-[240pxx] p-[25px] bg-white dark:bg-[#364680] rounded-[20px]"
            >
              <!-- Title -->
              <div class="flex justify-between">
                <h3 class="text-[18px] text-[#363E64] dark:text-white">Air Quality Index</h3>

                <!--===== loc button =====-->
                <div
                  class="flex items-center hover:cursor-pointer text-[#5C92FF] transition ease-in-out duration-300 hover:bg-[#F5F8FF] dark:hover:bg-[#001c5c] rounded-lg px-2 -mr-3"
                >
                  <i class="ri-map-pin-2-line text-[22px]"></i>
                  <p class="text-[17px] text-[#BDC2DB] ml-[10px]">
                    Uttara, Dhaka
                  </p>
                  <i class="ri-arrow-down-s-line text-[20px] ml-[5px]"></i>
                </div>
              </div>

              <!-- Quality -->
              <div
                class="flex justify-between items-center text-[#00D656] font-medium"
              >
                <div class="flex items-center gap-2">
                  <i class="ri-windy-line text-[42px]"></i>

                  <div class="flex flex-col">
                    <h3 class="text-[18px]">Good</h3>
                    <p class="text-[14px] text-[#C3C8DE]">
                      A perfect day for a walk!
                    </p>
                  </div>
                </div>

                <button
                  class="flex justify-center items-center w-[80px] h-[35px] rounded-md bg-[#F5F8FF] dark:bg-[#1E3364] text-[#5C92FF] transition ease-in-out duration-300 hover:cursor-pointer hover:bg-[#E2EAFC] dark:hover:bg-[#001c5c]"
                >
                  Refresh
                </button>
              </div>

              <!-- sub -->
              <div class="flex justify-between">
                <div
                  class="flex flex-col justify-center items-center gap-3 w-[50px] h-[75px] rounded-lg bg-[#F0FFF6] dark:bg-[#00000026] text-[#00D656] font-medium"
                >
                  <p class="text-[16px]">9.3</p>
                  <p class="text-[14px]">PM2</p>
                </div>

                <div
                  class="flex flex-col justify-center items-center gap-3 w-[50px] h-[75px] rounded-lg bg-[#F0FFF6] dark:bg-[#00000026] text-[#00D656] font-medium"
                >
                  <p class="text-[16px]">12.2</p>
                  <p class="text-[14px]">PM10</p>
                </div>

                <div
                  class="flex flex-col justify-center items-center gap-3 w-[50px] h-[75px] rounded-lg bg-[#F0FFF6] dark:bg-[#00000026] text-[#00D656] font-medium"
                >
                  <p class="text-[16px]">4.8</p>
                  <p class="text-[14px]">CO₂</p>
                </div>

                <div
                  class="flex flex-col justify-center items-center gap-3 w-[50px] h-[75px] rounded-lg bg-[#F0FFF6] dark:bg-[#00000026] text-[#00D656] font-medium"
                >
                  <p class="text-[16px]">4.6</p>
                  <p class="text-[14px]">NO₂</p>
                </div>

                <div
                  class="flex flex-col justify-center items-center gap-3 w-[50px] h-[75px] rounded-lg bg-[#F0FFF6] dark:bg-[#00000026] text-[#00D656] font-medium"
                >
                  <p class="text-[16px]">6.5</p>
                  <p class="text-[14px]">O₃</p>
                </div>

                <div
                  class="flex flex-col justify-center items-center gap-3 w-[50px] h-[75px] rounded-lg bg-[#F0FFF6] dark:bg-[#00000026] text-[#00D656] font-medium"
                >
                  <p class="text-[16px]">0.9</p>
                  <p class="text-[14px]">CO</p>
                </div>
              </div>
            </div>

            <!--===== rainfall  =====-->
            <div
              class="flex flex-col gap-6 w-full h-[240pxx] p-[25px] bg-white dark:bg-[#364680] rounded-[20px] mt-[18px]"
            >
              <!-- Title -->
              <div class="flex justify-between">
                <h3 class="text-[18px] text-[#363E64] dark:text-white">Air Quality Index</h3>

                <div class="flex gap-3">
                  <div class="flex items-center gap-1">
                    <div
                      class="w-[10px] h-[10px] bg-[#5C92FF] rounded-sm"
                    ></div>
                    <p class="text-[#363E64] dark:text-white text-[16px] font-medium">Rain</p>
                  </div>
                  <div class="flex items-center gap-1">
                    <div
                      class="w-[10px] h-[10px] bg-[#FFB868] rounded-sm"
                    ></div>
                    <p class="text-[#363E64] dark:text-white text-[16px] font-medium">Sun</p>
                  </div>
                </div>
              </div>

              <!-- Rainfall monthly -->
              <div class="flex justify-between mt-[45px]">
                <div
                  class="w-[8px] h-[124px] bg-[#EAF0FF] rounded-full flex flex-col justify-end gap-1"
                >
                  <div class="w-full h-[15px] bg-[#5C92FF] rounded-full"></div>
                  <div class="w-full h-[67px] bg-[#FFAE52] rounded-full"></div>
                </div>

                <div
                  class="w-[8px] h-[124px] bg-[#EAF0FF] rounded-full flex flex-col justify-end gap-1"
                >
                  <div class="w-full h-[72px] bg-[#5C92FF] rounded-full"></div>
                  <div class="w-full h-[29px] bg-[#FFAE52] rounded-full"></div>
                </div>

                <div
                  class="w-[8px] h-[124px] bg-[#EAF0FF] rounded-full flex flex-col justify-end gap-1"
                >
                  <div class="w-full h-[38px] bg-[#5C92FF] rounded-full"></div>
                  <div class="w-full h-[58px] bg-[#FFAE52] rounded-full"></div>
                </div>

                <div
                  class="w-[8px] h-[124px] bg-[#EAF0FF] rounded-full flex flex-col justify-end gap-1"
                >
                  <div class="w-full h-[11px] bg-[#5C92FF] rounded-full"></div>
                  <div class="w-full h-[59px] bg-[#FFAE52] rounded-full"></div>
                </div>

                <div
                  class="w-[8px] h-[124px] bg-[#EAF0FF] rounded-full flex flex-col justify-end gap-1"
                >
                  <div class="w-full h-[40px] bg-[#5C92FF] rounded-full"></div>
                  <div class="w-full h-[67px] bg-[#FFAE52] rounded-full"></div>
                </div>

                <div
                  class="w-[8px] h-[124px] bg-[#EAF0FF] rounded-full flex flex-col justify-end gap-1"
                >
                  <div class="w-full h-[73px] bg-[#5C92FF] rounded-full"></div>
                  <div class="w-full h-[29px] bg-[#FFAE52] rounded-full"></div>
                </div>

                <div
                  class="w-[8px] h-[124px] bg-[#EAF0FF] rounded-full flex flex-col justify-end gap-1"
                >
                  <div class="w-full h-[20px] bg-[#5C92FF] rounded-full"></div>
                  <div class="w-full h-[81px] bg-[#FFAE52] rounded-full"></div>
                </div>

                <div
                  class="w-[8px] h-[124px] bg-[#EAF0FF] rounded-full flex flex-col justify-end gap-1"
                >
                  <div class="w-full h-[21px] bg-[#5C92FF] rounded-full"></div>
                  <div class="w-full h-[59px] bg-[#FFAE52] rounded-full"></div>
                </div>

                <div
                  class="w-[8px] h-[124px] bg-[#EAF0FF] rounded-full flex flex-col justify-end gap-1"
                >
                  <div class="w-full h-[73px] bg-[#5C92FF] rounded-full"></div>
                  <div class="w-full h-[16px] bg-[#FFAE52] rounded-full"></div>
                </div>

                <div
                  class="w-[8px] h-[124px] bg-[#EAF0FF] rounded-full flex flex-col justify-end gap-1"
                >
                  <div class="w-full h-[73px] bg-[#5C92FF] rounded-full"></div>
                  <div class="w-full h-[29px] bg-[#FFAE52] rounded-full"></div>
                </div>

                <div
                  class="w-[8px] h-[124px] bg-[#EAF0FF] rounded-full flex flex-col justify-end gap-1"
                >
                  <div class="w-full h-[39px] bg-[#5C92FF] rounded-full"></div>
                  <div class="w-full h-[39px] bg-[#FFAE52] rounded-full"></div>
                </div>

                <div
                  class="w-[8px] h-[124px] bg-[#EAF0FF] rounded-full flex flex-col justify-end gap-1"
                >
                  <div class="w-full h-[74px] bg-[#5C92FF] rounded-full"></div>
                  <div class="w-full h-[39px] bg-[#FFAE52] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <!--===== Sunset & Sunrise =====-->
          <div class="flex">
            <div
              class="flex flex-col w-[395px] p-[25px] bg-white dark:bg-[#364680] rounded-[20px] mt-[18px] ml-[18px]"
            >
              <!-- Title -->
              <div class="flex justify-between">
                <h3 class="text-[18px] text-[#363E64] dark:text-white">Sunrise & Sunset</h3>

                <i class="ri-add-circle-line text-[22px] text-[#C3C8DE]"></i>
              </div>

              <!-- location 1  h-[115px] -->
              <div
                class="flex flex-col w-full bg-[#FFF8F0] dark:bg-[#00000026] rounded-2xl px-[15px] py-5 mt-5"
              >
                <!-- title -->
                <div class="flex justify-between items-center">
                  <!-- address -->
                  <div class="flex items-center gap-1">
                    <i class="ri-map-pin-2-line text-[#5C92FF] text-[18px]"></i>
                    <p class="text-[#363E64] dark:text-white text-[15px]">Dhaka</p>
                  </div>

                  <div
                    class="px-1 hover:cursor-pointer rounded-md transition ease-in-out duration-300 hover:bg-orange-100 dark:hover:bg-gray-800"
                  >
                    <i class="ri-more-2-line text-[#FFAE52] text-[22px]"></i>
                  </div>
                </div>

                <div class="flex justify-between px-5">
                  <!-- Sunrise -->
                  <div class="flex gap-2 items-center">
                    <i class="ri-sun-line text-[44px] text-[#FFAE52]"></i>

                    <div class="flex flex-col">
                      <p class="text-[14px] text-[#C3C8DE]">Sunrise</p>
                      <p class="text-[16px] font-medium text-[#5C92FF]">
                        4:40 AM
                      </p>
                    </div>
                  </div>

                  <!-- Sunset -->
                  <div class="flex gap-2 items-center">
                    <i class="ri-moon-line text-[44px] text-[#FFAE52]"></i>

                    <div class="flex flex-col">
                      <p class="text-[14px] text-[#C3C8DE]">Sunset</p>
                      <p class="text-[16px] font-medium text-[#5C92FF]">
                        6:53 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- location 2  h-[115px] -->
              <div
                class="flex flex-col w-full bg-[#FFF8F0] dark:bg-[#00000026] rounded-2xl px-[15px] py-5 mt-4"
              >
                <!-- title -->
                <div class="flex justify-between items-center">
                  <!-- address -->
                  <div class="flex items-center gap-1">
                    <i class="ri-map-pin-2-line text-[#5C92FF] text-[18px]"></i>
                    <p class="text-[#363E64] dark:text-white text-[15px]">Tokyo</p>
                  </div>

                  <div
                    class="px-1 hover:cursor-pointer rounded-md transition ease-in-out duration-300 hover:bg-orange-100 dark:hover:bg-gray-800"
                  >
                    <i class="ri-more-2-line text-[#FFAE52] text-[22px]"></i>
                  </div>
                </div>

                <div class="flex justify-between px-5">
                  <!-- Sunrise -->
                  <div class="flex gap-2 items-center">
                    <i class="ri-sun-line text-[44px] text-[#FFAE52]"></i>

                    <div class="flex flex-col">
                      <p class="text-[14px] text-[#C3C8DE]">Sunrise</p>
                      <p class="text-[16px] font-medium text-[#5C92FF]">
                        4:47 AM
                      </p>
                    </div>
                  </div>

                  <!-- Sunset -->
                  <div class="flex gap-2 items-center">
                    <i class="ri-moon-line text-[44px] text-[#FFAE52]"></i>

                    <div class="flex flex-col">
                      <p class="text-[14px] text-[#C3C8DE]">Sunset</p>
                      <p class="text-[16px] font-medium text-[#5C92FF]">
                        6:49 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <hr class="w-full h-[1px] bg-[#F7FAFF] mt-5" />

              <!-- Locations -->
              <div class="flex flex-col mt-4 gap-3">
                  <div class="flex">
                      <div class="flex items-center gap-1 basis-1/3">
                          <i class="ri-map-pin-2-line text-[#FFAE52] text-[18px]"></i>
                          <p class="text-[16px] text-[#70A0FF]">Kabul</p>
                      </div>
                      <div class="flex items-center gap-1 basis-1/3 justify-center">
                          <i class="ri-sun-line text-[#FFAE52] text-[18px]"></i>
                          <p class="text-[14px] font-medium text-[#BDC2DB]">5:00 AM</p>
                      </div>
                      <div class="flex items-center gap-1 basis-1/3 justify-end">
                          <i class="ri-moon-line text-[#FFAE52] text-[18px]"></i>
                          <p class="text-[14px] font-medium text-[#BDC2DB]">7:00 PM</p>
                      </div>
                  </div>

                  <div class="flex">
                      <div class="flex items-center gap-1 basis-1/3">
                          <i class="ri-map-pin-2-line text-[#FFAE52] text-[18px]"></i>
                          <p class="text-[16px] text-[#70A0FF]">Tiana</p>
                      </div>
                      <div class="flex items-center gap-1 basis-1/3 justify-center">
                          <i class="ri-sun-line text-[#FFAE52] text-[18px]"></i>
                          <p class="text-[14px] font-medium text-[#BDC2DB]">5:31 AM</p>
                      </div>
                      <div class="flex items-center gap-1 basis-1/3 justify-end">
                          <i class="ri-moon-line text-[#FFAE52] text-[18px]"></i>
                          <p class="text-[14px] font-medium text-[#BDC2DB]">8:04 PM</p>
                      </div>
                  </div>

                  <div class="flex">
                      <div class="flex items-center gap-1 basis-1/3">
                          <i class="ri-map-pin-2-line text-[#FFAE52] text-[18px]"></i>
                          <p class="text-[16px] text-[#70A0FF]">Algiers</p>
                      </div>
                      <div class="flex items-center gap-1 basis-1/3 justify-center">
                          <i class="ri-sun-line text-[#FFAE52] text-[18px]"></i>
                          <p class="text-[14px] font-medium text-[#BDC2DB]">5:50 AM</p>
                      </div>
                      <div class="flex items-center gap-1 basis-1/3 justify-end">
                          <i class="ri-moon-line text-[#FFAE52] text-[18px]"></i>
                          <p class="text-[14px] font-medium text-[#BDC2DB]">7:59 PM</p>
                      </div>
                  </div>
              </div>
              
              <h class="w-full h-[1px] bg-[#F7FAFF] mt-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
