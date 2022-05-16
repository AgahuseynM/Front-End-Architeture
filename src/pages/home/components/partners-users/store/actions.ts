import {container} from "tsyringe";
import {PartnersListService} from "@/pages/home/components/partners-users/services/partners-users.service";
import {UsersListService} from "@/pages/home/components/partners-users/services/partners-users.service";

const service = container.resolve(PartnersListService);
const service2 = container.resolve(UsersListService);

export const PartnersListActions = {

    setPartnersList(context: any): void {
        service.list().then(res => context.commit('setPartnersList', res.data))
    }
}

export const UsersListActions = {

    setUsersList(context: any): void {
        service2.list().then(res => context.commit('setUsersList', res.data))
    }
}
