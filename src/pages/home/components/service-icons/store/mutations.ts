import {ServiceIconsListState} from "@/pages/home/components/service-icons/store/state";

export const ServiceIconsMutations = {
    setItem(state: ServiceIconsListState, payload: any): void {
        state.serviceIconsList.unshift(payload);
    },

    setServiceIconsList(state: ServiceIconsListState, payload: any): void {
        console.log(payload);
        state.serviceIconsList = payload;
    }
}