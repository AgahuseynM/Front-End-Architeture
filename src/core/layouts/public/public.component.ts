import {Options, Vue} from 'vue-class-component';
import HeaderComponent from './components/header/header.component.vue';
import FooterComponent from "./components/footer/footer.component.vue";

@Options({
    name: 'PublicComponent',
    components: {
        HeaderComponent,
        FooterComponent
    },
})
export default class PublicComponent extends Vue {

}
