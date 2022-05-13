import {IAboutState} from '@/pages/about/store/state';

export const AboutStateMutations = {
  setTitle(state: IAboutState, payload: string): void {
    state.title = payload;
  },
  setItem(state: IAboutState, payload: any): void {
    state.todos.unshift(payload);
  },
  setPageName(state: IAboutState, payload: string): void {
    state.pageName = payload;
  },
  createMenu(state: IAboutState, payload: {item: any}): void {
    state.menus.push(payload.item);
  },
  updateMenu(state: IAboutState, payload: {item: any, id: number}): void {
    state.menus = state.menus.map((item: any, index: number) => {
      if (item.id === payload.id) {
        item = {...payload.item};
      }
      return item;
    });
  },
  removeMenu(state: IAboutState, payload: {id: number}): void {
    let selectedIndex = -1;
    state.menus.forEach((item: any, index: number) => {
      if (item.id && item.id === payload.id) {
        selectedIndex = index;
      }
    });
    state.menus.splice(selectedIndex, 1);
  },
  setTodos(state: IAboutState, payload: any): void {
    state.todos = payload;
  },
}
