import {SwiperListState} from "@/pages/home/components/swiper/store/state";
import {SwiperStateGetters} from "@/pages/home/components/swiper/store/getters";
import {SwiperStateActions} from "@/pages/home/components/swiper/store/actions";
import {SwiperStateMutations} from "@/pages/home/components/swiper/store/mutations";

const SwiperStateInitial: SwiperListState = {
    swiperList: [],
};

export const SwiperModule = {
    state: SwiperStateInitial,
    getters: SwiperStateGetters,
    mutations: SwiperStateMutations,
    actions: SwiperStateActions
}