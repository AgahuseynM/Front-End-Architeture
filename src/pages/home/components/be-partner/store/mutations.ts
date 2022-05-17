import {BePartnerListState} from "@/pages/home/components/be-partner/store/state";

export const BePartnerListMutations = {
    setBePartnerList(state: BePartnerListState, payload: any): void {
        console.log(payload);
        state.bePartnerList = payload;
    }
}