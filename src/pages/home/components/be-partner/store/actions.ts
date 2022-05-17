import {container} from "tsyringe";
import {BePartnerService} from "@/pages/home/components/be-partner/services/be-partner.service";

const service = container.resolve(BePartnerService);
export const BePartnerListActions = {

    setBePartnerList(context: any): void {
        service.list().then(res => context.commit('setBePartnerList', res.data))
    }
}