import 'reflect-metadata'
import {Options, Vue} from "vue-class-component";

@Options({
    name: 'NewsComponent'
})
export default class NewsComponent extends Vue {}