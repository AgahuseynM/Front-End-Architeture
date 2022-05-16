import 'reflect-metadata'
import {container, injectable} from 'tsyringe';
import {PartnersListService} from "@/pages/home/components/partners-users/services/partners-users.service";
import {PartnersList} from "@/pages/home/components/partners-users/types/partners-users";
import {UsersListService} from "@/pages/home/components/partners-users/services/partners-users.service";
import {UsersList} from "@/pages/home/components/partners-users/types/partners-users";
import {BehaviorSubject} from "rxjs";
import {store} from "@/store";

@injectable()
export class PartnersListSandbox {
    public partnersList$: BehaviorSubject<PartnersList[]> = new BehaviorSubject<PartnersList[]>([])
    private service: PartnersListService;
    private store = store;
    constructor() {
        this.service = container.resolve(PartnersListService);
    }

    getItemPartnersList(): Promise<any> {
        return new Promise((resolve) => {
         this.store.dispatch('setPartnersList', 1)
             .then(() => resolve (this.store.getters.getPartnersList))
        })
    }
}
@injectable()
export class UsersListSandbox {
    public usersList$: BehaviorSubject<UsersList[]> = new BehaviorSubject<UsersList[]>([])
    private service: UsersListService;
    private store = store;
    constructor() {
        this.service = container.resolve(UsersListService);
    }

    getItemUsersList(): Promise<any> {
        return new Promise((resolve) => {
            this.store.dispatch('setUsersList', 1)
                .then(() => resolve (this.store.getters.getUsersList))
        })
    }
}