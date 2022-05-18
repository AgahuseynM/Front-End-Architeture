import {createLogger, createStore} from 'vuex';
import {SwiperModule} from '@/pages/home/components/swiper/store'
import {ServiceIconsModule} from "@/pages/home/components/service-icons/store";
import {PartnersListModule} from "@/pages/home/components/partners-users/store";
import {UsersListModule} from "@/pages/home/components/partners-users/store";
import {BePartnerModule} from "@/pages/home/components/be-partner/store";
import {CardListModule} from "@/pages/home/components/card/store";

export type RootState = {
  swiperState: typeof SwiperModule;
  serviceIconsState: typeof ServiceIconsModule;
  partnersListState: typeof PartnersListModule;
  usersListState: typeof UsersListModule;
  bePartnerListState: typeof BePartnerModule;
  cardListState: typeof CardListModule;
};

export const store = createStore({
  modules: {
    swiperState: SwiperModule,
    serviceIconsState: ServiceIconsModule,
    partnersListState: PartnersListModule,
    usersListState: UsersListModule,
    bePartnerListState: BePartnerModule,
    cardListState: CardListModule
  },
});
