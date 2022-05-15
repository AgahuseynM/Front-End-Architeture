import {ServiceIconsListState} from "@/pages/home/components/service-icons/store/state";
import {ServiceIconsGetters} from "@/pages/home/components/service-icons/store/getters";
import {ServiceIconsMutations} from "@/pages/home/components/service-icons/store/mutations";
import {ServiceIconsActions} from "@/pages/home/components/service-icons/store/actions";

const ServiceIconsInitial: ServiceIconsListState = {
    serviceIconsList: [],
}

export const ServiceIconsModule = {
    state: ServiceIconsInitial,
    getters: ServiceIconsGetters,
    mutations: ServiceIconsMutations,
    actions: ServiceIconsActions
}