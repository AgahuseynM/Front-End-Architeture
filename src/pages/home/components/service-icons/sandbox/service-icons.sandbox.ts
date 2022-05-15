import 'reflect-metadata'
import {container, injectable} from 'tsyringe';
import {ServiceIconsService} from "@/pages/home/components/service-icons/services/service-icons.service";
import {ServiceIconsList} from "@/pages/home/components/service-icons/types/service-icons";
import {BehaviorSubject} from 'rxjs';
import {store} from '@/store';

@injectable()
export class ServiceIconsSandbox {
    public serviceIcons$: BehaviorSubject<ServiceIconsList[]> = new BehaviorSubject<ServiceIconsList[]>([])
    private service: ServiceIconsService;
    private store = store;
    constructor() {
        this.service = container.resolve(ServiceIconsService);
    }

    getItemServiceIcons(): Promise<any> {
        return new Promise((resolve) => {
            this.store.dispatch('setServiceIconsList', 1)
                .then(() => resolve (this.store.getters.getServiceIconsList))
        })
    }
}