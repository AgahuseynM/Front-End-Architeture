import {PartnersList} from "@/pages/home/components/partners-users/types/partners-users";
import {PartnersListState} from "@/pages/home/components/partners-users/store/state";
import {UsersList} from "@/pages/home/components/partners-users/types/partners-users";
import {UsersListState} from "@/pages/home/components/partners-users/store/state";

export const PartnersListGetters = {
    getPartnersList: (state: PartnersListState): PartnersList[] => {
        return state.partnersList
    }
}

export const UsersListGetters = {
    getUsersList: (state: UsersListState ): UsersList[] => {
        return state.usersList
    }
}