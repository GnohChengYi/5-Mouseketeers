import utils from '../utils';

const initialState = {
  error: null,
  openVideo: false,
};

const SET_ERROR = 'SET_ERROR';
const SET_MODAL_OPEN = 'SET_MODAL_OPEN';
const CLOSE_ALL_MODALS = 'CLOSE_ALL_MODALS';

export default {
  namespaced: true,
  state: initialState,

  actions: {
    setError({ commit }, error) {
      commit(SET_ERROR, error && utils.camelizeStr(error));
    },
    openModal({ commit }) {
      commit(SET_MODAL_OPEN);
    },
    closeModals({ commit }) {
      commit(CLOSE_ALL_MODALS);
    },
  },

  mutations: {
    [SET_ERROR](state, error) {
      state.error = error;
    },
    [SET_MODAL_OPEN](state) {
      state.openVideo = true;
    },
    [CLOSE_ALL_MODALS](state) {
      state.openVideo = false;
    },
  },
};
