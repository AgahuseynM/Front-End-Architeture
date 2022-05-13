import {Options, Vue} from 'vue-class-component';

@Options({
    name: 'AlertComponent',
    /**
     * @description props for button-component
     */
    props: {
        title: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
    },
})
export default class AlertComponent extends Vue {
}
