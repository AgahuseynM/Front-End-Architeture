import { createApp } from 'vue';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';
import router from './router';
import {store} from '@/store';
import '@/assets/styles/style.scss';
import 'material-design-icons-iconfont';
import BreadcrumbComponent from '@/packages/VBreadcrumb/breadcrumb.component.vue';
import VBtn from '@/packages/VButton/button.component.vue';
import ToastComponent from '@/packages/VToasts/toast.component.vue';
import CardComponent from '@/packages/VCard/card.component.vue';
import AlertComponent from '@/packages/VAlert/alert.component.vue';
import ModalComponent from '@/packages/VModal/modal.component.vue';
import DropdownComponent from "@/packages/VDropdown/dropdown.component.vue";
import LogoComponent from "@/packages/VLogo/logo.component.vue";
import SwiperClass, {Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

SwiperClass.use([Navigation, Pagination])

library.add(fas);

const app = createApp(App);
app.component('fa', FontAwesomeIcon);
app.component('v-btn', VBtn);
app.component('v-breadcrumb', BreadcrumbComponent);
app.component('v-toast', ToastComponent);
app.component('v-alert', AlertComponent);
app.component('v-modal', ModalComponent);
app.component('v-card', CardComponent);
app.component('v-dropdown', DropdownComponent)
app.component('v-logo', LogoComponent)
app
    .use(store)
    .use(router)
    .mount('#app');


