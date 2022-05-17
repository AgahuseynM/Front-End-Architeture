import 'reflect-metadata'
import {Options, Vue} from 'vue-class-component';
import {container} from "tsyringe";
import {BePartnerSandbox} from "@/pages/home/components/be-partner/sandbox/be-partner.sandbox";
import {BePartnerList} from "@/pages/home/components/be-partner/types/be-partner";
import {store} from '@/store';

@Options({
    name: 'BePartnerComponent'
})

export default class BePartnerComponent extends Vue {
    private store = store;
    private sandbox: BePartnerSandbox = container.resolve(BePartnerSandbox);
    private bePartnerList: BePartnerList[] = [];

    get bePartnerListAll() {
        return this.store.getters.getBePartnerList;
    }

    created() {
        this.sandbox.getItemBePartnerList();
    }

    public getBePartnerList(): void {
        this.sandbox.getItemBePartnerList().then((res) => {
            this.bePartnerList = res.data;
        })
    }
}