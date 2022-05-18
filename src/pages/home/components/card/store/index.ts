import {CardListState} from "@/pages/home/components/card/store/state";
import {CardListGetters} from "@/pages/home/components/card/store/getters";
import {CardListMutations} from "@/pages/home/components/card/store/mutations";
import {CardListActions} from "@/pages/home/components/card/store/actions";

const CardListInitial: CardListState = {
    cardList: [],
}

export const CardListModule = {
    state: CardListInitial,
    getters: CardListGetters,
    actions: CardListActions,
    mutations: CardListMutations
}