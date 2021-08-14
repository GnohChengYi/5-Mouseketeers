const initialState = {
  pageVods: null,
  pageNews: null,
};

const SET_PAGE_VODS = 'SET_PAGE_VODS';
const SET_PAGE_NEWS = 'SET_PAGE_NEWS';

export default {
  namespaced: true,
  state: initialState,

  actions: {
    setPageVods({ commit }, pageVods) {
      commit(SET_PAGE_VODS, pageVods);
    },
    setPageNews({ commit }, pageNews) {
      commit(SET_PAGE_NEWS, pageNews);
    },
  },

  mutations: {
    [SET_PAGE_VODS](state, pageVods) {
      state.pageVods = pageVods;
    },
    [SET_PAGE_NEWS](state, pageNews) {
      state.pageNews = pageNews;
    },
  },
};
