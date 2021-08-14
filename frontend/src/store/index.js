import Vue from 'vue';
import Vuex from 'vuex';

import Game from './Game';
import Modal from './Modal';
import Page from './Page';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { Game, Modal, Page },
  strict: process.env.NODE_ENV !== 'production',
});
