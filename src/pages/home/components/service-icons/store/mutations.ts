import {ServiceIconsListState} from "@/pages/home/components/service-icons/store/state";

export const ServiceIconsMutations = {
    setServiceIconsList(state: ServiceIconsListState, payload: any): void {
        console.log(payload);
        state.serviceIconsList = payload;
    }

    /*setItem(state: ServiceIconsListState, payload: any): void {
        state.serviceIconsList.unshift(payload);
    },*/


}