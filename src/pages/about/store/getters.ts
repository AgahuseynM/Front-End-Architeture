import { IAboutState } from './state';
import {ITodos} from '@/pages/about/types/todos';

export const AboutStateGetters = {
  getMenuById: (state: IAboutState): any => (id: number) => {
    return state.menus.find((menu: any) => menu.id === id);
  },
  getTodos: (state: IAboutState): ITodos[] => {
    return state.todos;
  },
  getTitle(state: IAboutState): string {
    return state.title;
  },
  getMenus(state: IAboutState): any[] {
    return state.menus;
  },
};
