import {Options, Vue} from 'vue-class-component';
import SwiperComponent from "@/pages/home/components/swiper/swiper.component.vue";
import ServiceIconsComponent from "@/pages/home/components/service-icons/service-icons.component.vue";
import PartnersUsersComponent from "@/pages/home/components/partners-users/partners-users.component.vue";
import BePartnerComponent from "@/pages/home/components/be-partner/be-partner.component.vue";
//
import FaqComponent from "@/pages/home/components/faq/faq.component.vue";
import SignVideoComponent from "@/pages/home/components/sign-video/sign-video.component.vue";

@Options({
  name: 'HomeComponent',
  components: {
    SwiperComponent,
    ServiceIconsComponent,
    PartnersUsersComponent,
    BePartnerComponent,
    FaqComponent,
    SignVideoComponent
  }
})
export default class HomeComponent extends Vue {}
