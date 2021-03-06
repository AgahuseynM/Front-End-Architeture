import {Options, Vue} from 'vue-class-component';

@Options({
    name: 'VBtn',
    /**
     * @description props for button-component
     *
     */
    props: {
        title: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: 'btn--primary',
        },
        rounded: {
            type: Boolean,
            default: false,
        },
        outline: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: 'lg',
        },
        type: {
            type: String,
            defaults: 'button',
        },
        icon: {
            type: String,
            default: ''
        }
    },
})
export default class ButtonComponent extends Vue {

}
