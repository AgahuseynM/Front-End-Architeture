import 'reflect-metadata';
import {Options, Vue} from 'vue-class-component';
import {AboutSandbox} from '@/pages/about/sandbox/about.sandbox';
import {container} from 'tsyringe';
import {Observable} from 'rxjs';
import {ITodos} from '@/pages/about/types/todos';
import {store} from '@/store';

@Options({
    name: 'AboutComponent',
})
export default class AboutComponent extends Vue {
    private store = store;
    private sandbox: AboutSandbox = container.resolve(AboutSandbox);
    private todos$: Observable<ITodos[]> = this.sandbox.todos$;
    private todos: ITodos[] = [];

    get todos2() {
        return this.store.getters.getTodos;
    }

    public getAbouts(): void {
        this.sandbox.getTodos().then((res) => {
            this.todos = res;
        });
    }

    public addItem(): void {
        const item = {
            userId: 1,
            id: 1,
            title: 'test title test',
            completed: false,
        };
        this.sandbox.setItem(item);
    }

}
