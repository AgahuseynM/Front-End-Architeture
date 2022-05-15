import 'reflect-metadata'
import {Options, Vue} from 'vue-class-component';
import {container} from "tsyringe";
import {ServiceIconsSandbox} from "@/pages/home/components/service-icons/sandbox/service-icons.sandbox";
import {ServiceIconsList} from "@/pages/home/components/service-icons/types/service-icons";
import {store} from "@/store";

@Options({
    name: 'ServiceIconsComponent',
})

export default class ServiceIconsComponent extends Vue {
    private store = store;
    private sandbox: ServiceIconsSandbox = container.resolve(ServiceIconsSandbox);
    private serviceIconsList: ServiceIconsList[] = [];

    get ServiceIconsListAll() {
        return this.store.getters.getServiceIconsList;
    }

    created() {
        this.sandbox.getItemServiceIcons();
    }

    public getServiceIconsList(): void {
        this.sandbox.getItemServiceIcons().then((res) => {
            this.serviceIconsList = res.data;
        })
    }
}