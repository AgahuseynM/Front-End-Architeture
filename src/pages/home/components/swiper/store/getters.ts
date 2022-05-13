import {SwiperList} from "@/pages/home/components/swiper/types/swiper";
import {SwiperListState} from "@/pages/home/components/swiper/store/state";

export const SwiperStateGetters = {
    getSwiperList: (state: SwiperListState): SwiperList[] => {
        return state.swiperList;
    }
}