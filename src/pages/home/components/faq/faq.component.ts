import 'reflect-metadata'
import {Options, Vue} from "vue-class-component";

@Options ({
    name: 'FaqComponent'
})
export default class FaqComponent extends Vue {
    public firstQuestionVisibility: boolean = true;
    public secondQuestionVisibility: boolean = false;
    public thirdQuestionVisibility: boolean = false;

    public showFirstQuestion(): void {
        this.firstQuestionVisibility = !this.firstQuestionVisibility;
    }
    public showSecondQuestion(): void {
        this.secondQuestionVisibility = !this.secondQuestionVisibility;
    }
    public showThirdQuestion(): void {
        this.thirdQuestionVisibility = !this.thirdQuestionVisibility;
    }

}