import {createLogger, createStore} from 'vuex';
import {environment} from '@/core/configs/app.config';
// import createPersistedState from 'vuex-persistedstate';
import {AboutState} from '@/pages/about/store';
import {SwiperModule} from '@/pages/home/components/swiper/store'
import {ServiceIconsModule} from "@/pages/home/components/service-icons/store";
import {PartnersListModule} from "@/pages/home/components/partners-users/store";
import {UsersListModule} from "@/pages/home/components/partners-users/store";

// const plugins = String(environment.env) !== 'production' ? [createLogger({})] : [];
// plugins.push(createPersistedState({storage: window.sessionStorage}));

export type RootState = {
  aboutState: typeof AboutState;
  swiperState: typeof SwiperModule;
  serviceIconsState: typeof ServiceIconsModule;
  partnersListState: typeof PartnersListModule;
  usersListState: typeof UsersListModule;
};

export const store = createStore({
  // plugins
  modules: {
    aboutState: AboutState,
    swiperState: SwiperModule,
    serviceIconsState: ServiceIconsModule,
    partnersListState: PartnersListModule,
    usersListState: UsersListModule
  },
});
