import {SwiperListState} from "@/pages/home/components/swiper/store/state";

export const SwiperStateMutations = {
    setItem(state: SwiperListState, payload: any): void {
        state.swiperList.unshift(payload);
    },

    setSwiperList(state: SwiperListState, payload: any): void {
        console.log(payload);
        state.swiperList = payload;
    }
}