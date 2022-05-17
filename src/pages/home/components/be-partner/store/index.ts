import {BePartnerListState} from "@/pages/home/components/be-partner/store/state";
import {BePartnerListActions} from "@/pages/home/components/be-partner/store/actions";
import {BePartnerListMutations} from "@/pages/home/components/be-partner/store/mutations";
import {BePartnerListGetters} from "@/pages/home/components/be-partner/store/getters";

const BePartnerInitial: BePartnerListState = {
    bePartnerList: []
}

export const BePartnerModule = {
    state: BePartnerInitial,
    actions: BePartnerListActions,
    getters: BePartnerListGetters,
    mutations: BePartnerListMutations
}