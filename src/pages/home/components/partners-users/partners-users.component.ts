import 'reflect-metadata'
import {Options, Vue} from 'vue-class-component';
import {container} from "tsyringe";
import {PartnersListSandbox} from "@/pages/home/components/partners-users/sandbox/partners-users.sandbox";
import {PartnersList} from "@/pages/home/components/partners-users/types/partners-users";
import {UsersListSandbox} from "@/pages/home/components/partners-users/sandbox/partners-users.sandbox";
import {UsersList} from "@/pages/home/components/partners-users/types/partners-users";
import {store} from "@/store";

@Options({
    name: 'PartnersUsersComponent'
})

export default class PartnersUsersComponent extends Vue {
    private store = store;
    private sandbox: PartnersListSandbox = container.resolve(PartnersListSandbox);
    private sandbox2: UsersListSandbox = container.resolve(UsersListSandbox);
    private partnersList: PartnersList[] = [];
    private usersList: UsersList[] = [];

    get PartnersListAll() {
        return this.store.getters.getPartnersList;
    }

    get UsersListAll() {
        return this.store.getters.getUsersList;
    }

    created() {
        this.sandbox.getItemPartnersList()
        this.sandbox2.getItemUsersList()
    }

    public getPartnersList(): void {
        this.sandbox.getItemPartnersList().then((res) => {
            this.partnersList = res.data;
        })
    }

    public getUsersList(): void {
        this.sandbox2.getItemUsersList().then((res) => {
            this.usersList = res.data;
        })
    }
}