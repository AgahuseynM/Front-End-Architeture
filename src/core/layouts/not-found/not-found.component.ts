import { Options, Vue } from 'vue-class-component';
import NotFound from '@/core/layouts/not-found/not-found.component';
@Options({
    name: 'notFound-layout',
    props: {
        msg: String,
    },
    components: {
        NotFound,
    },
})
export default class PublicComponent extends Vue {
}
