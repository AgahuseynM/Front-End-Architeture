import {Options, Vue} from 'vue-class-component';
import ButtonComponent from '@/packages/VButton/button.component.vue';

@Options({
    name: 'RegisterComponent',
    components: {
        ButtonComponent,
    },
})

export default class RegisterComponent extends Vue {
    public registerPasswordType: boolean = false;
    public registerConfirmPasswordType: boolean = false;
    public confirmPassword = '';

    public userInfo = {
        username: '',
        email: '',
        password: '',
    };

    public register(): void {
        this.$router.push('/login');
    }
}
