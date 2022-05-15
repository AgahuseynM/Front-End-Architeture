import {ServiceIconsList} from "@/pages/home/components/service-icons/types/service-icons";
import {ServiceIconsListState} from "@/pages/home/components/service-icons/store/state";

export const ServiceIconsGetters = {
    getServiceIconsList: (state: ServiceIconsListState): ServiceIconsList[] => {
        return state.serviceIconsList
    }
}