import 'reflect-metadata';
import {Options, Vue} from 'vue-class-component';

@Options({
    name: 'HeaderRightComponent',
})
export default class HeaderRightComponent extends Vue {
    public searchInputVisibility: boolean = false;

    public showSearchInput(): void {
        this.searchInputVisibility = !this.searchInputVisibility;
    }
}