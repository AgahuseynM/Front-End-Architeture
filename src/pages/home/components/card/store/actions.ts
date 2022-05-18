import {container} from "tsyringe";
import {CardListService} from "@/pages/home/components/card/services/card.service";

const service = container.resolve(CardListService);
export const CardListActions = {

    setCardList(context: any): void {
        service.list().then(res => context.commit('setCardList', res.data))
    }
}