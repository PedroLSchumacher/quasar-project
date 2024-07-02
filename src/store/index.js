import { store } from 'quasar/wrappers';
import { createStore } from 'vuex';
import pokemon from './pokemon';

export default store(function () {
  return createStore({
    modules: {
      pokemon
    }
  });
});
