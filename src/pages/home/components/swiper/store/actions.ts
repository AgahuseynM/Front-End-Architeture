import {container} from "tsyringe";
import {SwiperService} from "@/pages/home/components/swiper/services/swiper.service";

const service = container.resolve(SwiperService);
export const SwiperStateActions = {

    setSwiperList(context: any): void {
        service.list().then(res => context.commit('setSwiperList', res.data))
    },

    setItem(context: any, payload: any) {
        context.commit('setItem', payload);
    }
}