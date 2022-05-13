import {IAboutState} from '@/pages/about/store/state';
import {AboutStateGetters} from '@/pages/about/store/getters';
import {AboutStateMutations} from '@/pages/about/store/mutations';
import {AboutStateActions} from '@/pages/about/store/actions';

const AboutStateInitial: IAboutState = {
  title: '',
  pageName: '',
  menus: [],
  todos: [],
};
export const AboutState = {
  state: AboutStateInitial,
  getters: AboutStateGetters,
  mutations: AboutStateMutations,
  actions: AboutStateActions,
};
