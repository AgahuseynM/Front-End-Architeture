import {BePartnerList} from "@/pages/home/components/be-partner/types/be-partner";
import {BePartnerListState} from "@/pages/home/components/be-partner/store/state";

export const BePartnerListGetters = {
    getBePartnerList: (state: BePartnerListState): BePartnerList[] => {
        return state.bePartnerList;
    }
}