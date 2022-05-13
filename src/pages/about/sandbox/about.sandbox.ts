import 'reflect-metadata';
import {container, injectable} from 'tsyringe';
import {AboutService} from '@/pages/about/services/about.service';

import {ITodos} from '@/pages/about/types/todos';
import {BehaviorSubject, Observable} from 'rxjs';
import {store} from '@/store';


@injectable()
export class AboutSandbox {
  public todos$: BehaviorSubject<ITodos[]> = new BehaviorSubject<ITodos[]>([]);
  private service: AboutService;
  private store = store;
  constructor() {
    this.service = container.resolve(AboutService);
  }


  getTodos(): Promise<any> {
    return new Promise((resolve) => {
      this.store.dispatch('setTodos', '1')
          .then(() => resolve (this.store.getters.getTodos));
    });

  }

  setItem(item: any) {
    this.store.dispatch('setItem',item);
  }

  setTitle() {
    this.store.dispatch('setTitleAction').then();
  }
}
