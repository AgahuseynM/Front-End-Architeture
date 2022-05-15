import 'reflect-metadata'
import {Options, Vue} from 'vue-class-component';
import {SwiperSandbox} from "@/pages/home/components/swiper/sandbox/swiper.sandbox";
import {container} from "tsyringe";
import {SwiperList} from "@/pages/home/components/swiper/types/swiper";
import {store} from "@/store";

@Options({
    name: 'SwiperComponent',
})

export default class SwiperComponent extends Vue {
    private store = store;
    private sandbox: SwiperSandbox = container.resolve(SwiperSandbox);
    private swiperList: SwiperList[] = [];

    get swiperListAll() {
        return this.store.getters.getSwiperList;
    }

    created() {
        this.sandbox.getItemSwiper();
    }

    public getSwiperList(): void {
        this.sandbox.getItemSwiper().then((res) => {
            this.swiperList = res.data;
        })
    }
}