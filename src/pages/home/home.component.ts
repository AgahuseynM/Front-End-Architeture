import {Options, Vue} from 'vue-class-component';
import SwiperComponent from "@/pages/home/components/swiper/swiper.component.vue";
import ServiceIconsComponent from "@/pages/home/components/service-icons/service-icons.component.vue";
import PartnersUsersComponent from "@/pages/home/components/partners-users/partners-users.component.vue";
@Options({
  name: 'HomeComponent',
  components: {
    SwiperComponent,
    ServiceIconsComponent,
    PartnersUsersComponent
  }
})
export default class HomeComponent extends Vue {}
