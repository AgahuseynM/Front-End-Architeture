import 'reflect-metadata'
import {Options, Vue} from "vue-class-component";
import {container} from "tsyringe";
import {CardListSandbox} from "@/pages/home/components/card/sandbox/card.sandbox";
import {CardList} from "@/pages/home/components/card/types/card";
import {store} from "@/store";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';

@Options({
    name: 'CardComponent',
    components: {
        Swiper,
        SwiperSlide
    }
})

export default class CardComponent extends Vue {
    private store = store;
    private sandbox: CardListSandbox = container.resolve(CardListSandbox);
    private cardList: CardList[] = [];
    public breakpoints = {
        1200: {
            slidesPerView: 3,
            spaceBetween: 60
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 50
        },
        320: {
            slidesPerView: 1,
        }
    }

    get CardListAll() {
        return this.store.getters.getCardList;
    }

    created() {
        this.sandbox.getItemCardList();
    }

    public CardList(): void {
        this.sandbox.getItemCardList().then((res) => {
            this.cardList = res.data;
        })
    }
}