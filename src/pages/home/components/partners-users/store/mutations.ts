import {PartnersListState} from "@/pages/home/components/partners-users/store/state";
import {UsersListState} from "@/pages/home/components/partners-users/store/state";

export const PartnersListMutations = {
    setPartnersList(state: PartnersListState, payload: any): void {
        console.log(payload);
        state.partnersList = payload;
    }
}

export const UsersListMutations = {
    setUsersList(state: UsersListState, payload: any): void {
        console.log(payload);
        state.usersList = payload
    }
}