export const state = () => ({
  accessToken:
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9mbnctdXMuZm9yZWNhLmNvbVwvYXV0aG9yaXplXC90b2tlbiIsImlhdCI6MTY0MTIxNjg1MCwiZXhwIjo5OTk5OTk5OTk5LCJuYmYiOjE2NDEyMTY4NTAsImp0aSI6IjM1YTRhNjI1MTYzOWRhZWIiLCJzdWIiOiJzYW1hbmFocmFyaSIsImZtdCI6IlhEY09oakM0MCtBTGpsWVR0amJPaUE9PSJ9.IthiH4rWTzR_NybnYrCSVX8O08FXJF9IBtTslBYI7CQ",
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
    // first enter in page load karaj weather info ssr
    const cityResult = await this.$axios.get(`location/search/karaj`, {
      headers: {
        Authorization: vuexContext.state.accessToken,
      },
    });

    if (cityResult.status !== 200) return;

    const { data: cityData } = cityResult;
    const dailyResult = await this.$axios.get(
      `forecast/daily/${cityData.locations[0].id}?windunit=KMH&dataset=full&periods=7`,
      {
        headers: {
          Authorization: vuexContext.state.accessToken,
        },
      }
    );

    if (dailyResult.status !== 200) return;

    const { data: dailyData } = dailyResult;

    const weather = [];

    dailyData.forecast.forEach((item) => {
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

    vuexContext.commit("setLocInfo", {
      loc: "first",
      data: {
        id: cityData.locations[0].id,
        name: cityData.locations[0].name,
        country: cityData.locations[0].country,
        weathers: weather,
        locIndex: "first",
      },
    });

    // set data in active day
    vuexContext.commit("setActiveDay", {
      ...weather[0],
      id: 0,
    });

    // set data in current location
    vuexContext.commit("set_CurrentLoc_and_FilterLocations", {
      id: cityData.locations[0].id,
      name: cityData.locations[0].name,
      country: cityData.locations[0].country,
      weathers: weather,
      locIndex: "first",
    });
  },

  async getCityInfo(context, payload) {
    const result = await this.$axios.get(`location/search/${payload.city}`, {
      headers: {
        Authorization: context.state.accessToken,
      },
    });

    if (result.status !== 200) return;

    const data = result.data.locations[0];

    context.dispatch("getDailyWeather", {
      loc: payload.loc,
      data: {
        id: data.id,
        name: data.name,
        country: data.country,
      },
    });
  },

  async getDailyWeather(context, payload) {
    const result = await this.$axios.get(
      `forecast/daily/${payload.data.id}?windunit=KMH&dataset=full&periods=7`,
      {
        headers: {
          Authorization: context.state.accessToken,
        },
      }
    );

    if (result.status !== 200) return;

    const data = result.data.forecast;

    const weather = [];

    data.forEach((item) => {
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
  },
};
