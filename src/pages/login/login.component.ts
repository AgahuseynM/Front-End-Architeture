import {Options, Vue} from 'vue-class-component';
import ButtonComponent from '@/packages/VButton/button.component.vue';

@Options({
    name: 'LoginComponent',
    components: {
        ButtonComponent,
    },
})

export default class LoginComponent extends Vue {
    public loginPasswordType: boolean = false;

    public loginUser = {
        username: '',
        password: '',
    };

    public sendToRegister(): void {
        this.$router.push({name: 'register'});
    }
}
