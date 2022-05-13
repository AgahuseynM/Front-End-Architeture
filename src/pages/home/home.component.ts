import {Options, Vue} from 'vue-class-component';
import SwiperComponent from "@/pages/home/components/swiper/swiper.component.vue";
@Options({
  name: 'HomeComponent',
  components: {
    SwiperComponent
  }
})
export default class HomeComponent extends Vue {}
