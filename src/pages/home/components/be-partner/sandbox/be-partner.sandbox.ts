import 'reflect-metadata'
import {container, injectable} from 'tsyringe';
import {BePartnerService} from "@/pages/home/components/be-partner/services/be-partner.service";
import {BePartnerList} from "@/pages/home/components/be-partner/types/be-partner";
import {BehaviorSubject} from "rxjs";
import {store} from "@/store";

@injectable()
export class BePartnerSandbox {
    public bePartnerList$: BehaviorSubject<BePartnerList[]> = new BehaviorSubject<BePartnerList[]>([]);
    private service: BePartnerService;
    private store = store;
    constructor() {
        this.service = container.resolve(BePartnerService);
    }

    getItemBePartnerList(): Promise<any> {
        return new Promise((resolve) => {
            this.store.dispatch('setBePartnerList', 1)
                .then(() => resolve (this.store.getters.getBePartnerList))
        })
    }
}
