import 'reflect-metadata'
import {Options, Vue} from "vue-class-component";
import FooterLeftComponent from "@/core/layouts/public/components/footer-left/footer-left.component.vue";
import FooterCenterComponent from "@/core/layouts/public/components/footer-center/footer-center.component.vue";
import FooterRightComponent from "@/core/layouts/public/components/footer-right/footer-right.component.vue";
import FooterEndComponent from "@/core/layouts/public/components/footer-end/footer-end.component.vue";

@Options({
    name: 'FooterComponent',
    components: {
        FooterLeftComponent,
        FooterCenterComponent,
        FooterRightComponent,
        FooterEndComponent
    }
})
export default class FooterComponent extends Vue {}