import {PartnersListState} from "@/pages/home/components/partners-users/store/state";
import {PartnersListActions} from "@/pages/home/components/partners-users/store/actions";
import {PartnersListGetters} from "@/pages/home/components/partners-users/store/getters";
import {PartnersListMutations} from "@/pages/home/components/partners-users/store/mutations";

import {UsersListState} from "@/pages/home/components/partners-users/store/state";
import {UsersListActions} from "@/pages/home/components/partners-users/store/actions";
import {UsersListGetters} from "@/pages/home/components/partners-users/store/getters";
import {UsersListMutations} from "@/pages/home/components/partners-users/store/mutations";

const PartnersListInitial: PartnersListState = {
    partnersList: []
}

const UsersListInitial: UsersListState = {
    usersList: []
}

export const PartnersListModule = {
    state: PartnersListInitial,
    getters: PartnersListGetters,
    actions: PartnersListActions,
    mutations: PartnersListMutations,
}

export const UsersListModule = {
    state: UsersListInitial,
    getters: UsersListGetters,
    actions: UsersListActions,
    mutations: UsersListMutations
}