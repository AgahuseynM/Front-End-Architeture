import {createLogger, createStore} from 'vuex';
import {AboutState} from '@/pages/about/store';
import {SwiperModule} from '@/pages/home/components/swiper/store'
import {ServiceIconsModule} from "@/pages/home/components/service-icons/store";
import {PartnersListModule} from "@/pages/home/components/partners-users/store";
import {UsersListModule} from "@/pages/home/components/partners-users/store";
import {BePartnerModule} from "@/pages/home/components/be-partner/store";

export type RootState = {
  aboutState: typeof AboutState;
  swiperState: typeof SwiperModule;
  serviceIconsState: typeof ServiceIconsModule;
  partnersListState: typeof PartnersListModule;
  usersListState: typeof UsersListModule;
  bePartnerListState: typeof BePartnerModule;
};

export const store = createStore({
  modules: {
    aboutState: AboutState,
    swiperState: SwiperModule,
    serviceIconsState: ServiceIconsModule,
    partnersListState: PartnersListModule,
    usersListState: UsersListModule,
    bePartnerListState: BePartnerModule
  },
});
