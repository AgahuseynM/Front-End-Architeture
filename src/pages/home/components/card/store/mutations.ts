import {CardListState} from "@/pages/home/components/card/store/state";

export const CardListMutations = {
    setCardList(state: CardListState, payload: any): void {
        console.log(payload);
        state.cardList = payload;
    }
}