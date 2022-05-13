import {createLogger, createStore} from 'vuex';
import {environment} from '@/core/configs/app.config';
// import createPersistedState from 'vuex-persistedstate';
import {AboutState} from '@/pages/about/store';
import {SwiperModule} from '@/pages/home/components/swiper/store'

// const plugins = String(environment.env) !== 'production' ? [createLogger({})] : [];
// plugins.push(createPersistedState({storage: window.sessionStorage}));

export type RootState = {
  aboutState: typeof AboutState;
  swiperState: typeof SwiperModule;
};

export const store = createStore({
  // plugins,
  modules: {
    aboutState: AboutState,
    swiperState: SwiperModule
  },
});
