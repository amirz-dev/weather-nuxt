export const state = () => ({
  accessToken: "",
  currentLoc: {},
  allLoc: {
    first: {},
    second: {},
    third: {},
  },
  filteredLoc: [],
  activeDay: {},
  whatLoc: "first",
});

export const getters = {
  allLoc(state) {
    return state.allLoc;
  },
  filteredLoc(state) {
    return state.filteredLoc;
  },
  currentLoc(state) {
    return state.currentLoc;
  },
  whatLoc(state) {
    return state.whatLoc;
  },
  activeDay(state) {
    return state.activeDay;
  },
  colors: () => (index) => {
    // get colors for locations box
    let colors;

    switch (index) {
      case "first":
        colors = {
          background: "from-[#9CBDFF] to-[#6498FF]",
          drops: "from-[#70A0FF] via-[#70A0FF] to-[#FFFFFF]",
          button: "hover:bg-cyan-600",
        };
        break;
      case "second":
        colors = {
          background: "from-[#FD9AC0] to-[#FF649D]",
          drops: "from-[#FF649D] via-[#FF649D] to-[#FFFFFF]",
          button: "hover:bg-rose-600",
        };
        break;
      case "third":
        colors = {
          background: "from-[#FFC480] to-[#FFAE52]",
          drops: "from-[#FFC480] via-[#FFC480] to-[#FFFFFF]",
          button: "hover:bg-amber-600",
        };
        break;
    }

    return colors;
  },
};

export const mutations = {
  setAccessToken(state, payload) {
    state.accessToken = payload;
  },
  setLocInfo(state, payload) {
    state.allLoc[payload.loc] = payload.data;
  },
  set_CurrentLoc_and_FilterLocations(state, payload) {
    state.currentLoc = payload;

    // filter locations, two loc show in more locations
    const filter = [];
    for (const key in state.allLoc) {
      if (state.allLoc[key].id && state.allLoc[key].id != payload.id) {
        filter.push({
          ...state.allLoc[key],
        });
      }
    }

    state.filteredLoc = filter;
  },
  setActiveDay(state, payload) {
    state.activeDay = payload;
  },
  changeWhatLoc(state, payload) {
    state.whatLoc = payload;
  },
};

export const actions = {
  async nuxtServerInit(vuexContext) {
    const data = await this.$axios
      .post("/authorize/key", {
        user: "amirhossein_zebardast",
        password: "D4PN9m7ZgG3j",
      })
      .then(({ data }) => data);

    if (data) {
      vuexContext.commit("setAccessToken", data.access_token);
    }
  },

  async getCityInfo(context, payload) {
    await this.$axios
      .get(`/api/v1/location/search/${payload.city}`, {
        headers: {
          Authorization: `Bearer ${context.state.accessToken}`,
        },
      })
      .then(({ data }) => {
        const res = data.locations[0];

        context.dispatch("getDailyWeather", {
          loc: payload.loc,
          data: {
            id: res.id,
            name: res.name,
            country: res.country,
          },
        });
      });
  },

  async getDailyWeather(context, payload) {
    await this.$axios
      .get(
        `/api/v1/forecast/daily/${payload.data.id}?windunit=KMH&dataset=full&periods=7`,
        {
          headers: {
            Authorization: `Bearer ${context.state.accessToken}`,
          },
        }
      )
      .then(({ data }) => {
        const res = data.forecast;

        const weather = [];

        res.forEach((item) => {
          weather.push({
            date: item.date,
            temp: item.maxTemp,
            wind: item.maxWindSpeed,
            humidity: item.minRelHumidity,
            sunrise: item.sunrise,
            sunset: item.sunset,
            icon: item.symbol,
            description: item.symbolPhrase,
          });
        });

        // set data in location info
        context.commit("setLocInfo", {
          loc: payload.loc,
          data: {
            ...payload.data,
            weathers: weather,
            locIndex: payload.loc,
          },
        });

        // set data in active day
        context.commit("setActiveDay", {
          ...weather[0],
          id: 0,
        });

        // set data in current location
        context.commit("set_CurrentLoc_and_FilterLocations", {
          ...payload.data,
          weathers: weather,
          locIndex: payload.loc,
        });
      });
  },
};

/* 
city info:
https://pfa.foreca.com/api/v1/location/search/karaj

7 days:
https://pfa.foreca.com/api/v1/forecast/daily/100128747?windunit=KMH&dataset=full&periods=7
*/
