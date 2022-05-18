import 'reflect-metadata'
import {container, injectable} from "tsyringe";
import {CardListService} from "@/pages/home/components/card/services/card.service";
import {CardList} from "@/pages/home/components/card/types/card";
import {BehaviorSubject} from "rxjs";
import {store} from "@/store";

@injectable()
export class CardListSandbox {
    public cardList$: BehaviorSubject<CardList[]> = new BehaviorSubject<CardList[]>([])
    private service: CardListService;
    private store = store;
    constructor() {
        this.service = container.resolve(CardListService);
    }

    getItemCardList(): Promise<any> {
        return new Promise((resolve) => {
            this.store.dispatch('setCardList', 1)
                .then(() => resolve (this.store.getters.getCardList));
        })
    }
}