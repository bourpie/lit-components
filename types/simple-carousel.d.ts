import { LitElement } from "lit";
import './slide-button.js';
export declare class SimpleCarousel extends LitElement {
    static styles: import("lit").CSSResult;
    slideIndex: number;
    private readonly slideElements;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
    updated(): void;
    private navigateSlide;
    private changeSlide;
    navigateToPrevSlide(): void;
    navigateToNextSlide(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "simple-carousel": SimpleCarousel;
    }
}
