import {container} from 'tsyringe';
import {AboutService} from '@/pages/about/services/about.service';

const service = container.resolve(AboutService);
export const AboutStateActions = {
    setTitleAction(context: any, payload: any): void {
        context.commit('setTitle', payload);
    },
    setTodos(context: any): void {
        service.list().then(res => context.commit('setTodos', res.data));
    },
    setItem(context: any, payload: any) {
        context.commit('setItem', payload);
    }
}
