import 'reflect-metadata';
import {Options, Vue} from 'vue-class-component';
import HeaderLeftComponent from '@/core/layouts/public/components/header-left/header-left.component.vue';
import HeaderRightComponent from '@/core/layouts/public/components/header-right/header-right.component.vue';
@Options({
    name: 'HeaderComponent',
    components: {
        HeaderLeftComponent,
        HeaderRightComponent,
    },
})

export default class HeaderComponent extends Vue {}