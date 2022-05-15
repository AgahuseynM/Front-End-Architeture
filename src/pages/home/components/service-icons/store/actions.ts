import {container} from "tsyringe";
import {ServiceIconsService} from "@/pages/home/components/service-icons/services/service-icons.service";

const service = container.resolve(ServiceIconsService)
export const ServiceIconsActions = {

    setServiceIconsList(context: any): void {
        service.list().then(res => context.commit('setServiceIconsList', res.data))
    },

    setItem(context: any, payload: any) {
        context.commit('setItem', payload);
    }
}