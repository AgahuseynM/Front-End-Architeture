import 'reflect-metadata'
import {container, injectable} from 'tsyringe';
import {SwiperService} from "@/pages/home/components/swiper/services/swiper.service";
import {SwiperList} from "@/pages/home/components/swiper/types/swiper";
import {BehaviorSubject} from 'rxjs';
import {store} from '@/store';

@injectable()
export class SwiperSandbox {
    public swiper$: BehaviorSubject<SwiperList[]> = new BehaviorSubject<SwiperList[]>([])
    private service: SwiperService;
    private store = store;
    constructor() {
        this.service = container.resolve(SwiperService);
    }

    getItemSwiper(): Promise<any> {
        return new Promise((resolve) => {
            this.store.dispatch('setSwiperList', 1)
                .then(() => resolve (this.store.getters.getSwiperList))
        })
    }
}