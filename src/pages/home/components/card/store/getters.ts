import {CardList} from "@/pages/home/components/card/types/card";
import {CardListState} from "@/pages/home/components/card/store/state";

export const CardListGetters = {
    getCardList: (state: CardListState): CardList[] => {
        return state.cardList
    }
}