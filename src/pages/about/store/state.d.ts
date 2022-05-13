import {ITodos} from '@/pages/about/types/todos';

export interface IAboutState {
  title: string;
  pageName: string;
  menus: any[];
  todos: ITodos[];
}
