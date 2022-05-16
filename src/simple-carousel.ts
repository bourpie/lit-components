import { LitElement, html, css } from "lit";
import { customElement, property, queryAssignedElements } from "lit/decorators.js";

import './slide-button.js';

@customElement('simple-carousel')
export class SimpleCarousel extends LitElement {
    static override styles = css`
    ::slotted(.slide-hidden){
        display: none;
    }`;

    @property({ type: Number }) slideIndex = 0

    @queryAssignedElements()
    // le "!" permet de dire que la propriété est obligatoire
    private readonly slideElements!: HTMLElement[] 

    override render(){
        return html`
            <slide-button
                @click=${this.navigateToPrevSlide}>
                Left
            </slide-button>
            <slot></slot>
            <slide-button 
                @click=${this.navigateToNextSlide}>
                right
            </slide-button>`;
    }

    override firstUpdated(){
        this.navigateSlide();
    }

    override updated() {
        this.navigateSlide();
    }

    private navigateSlide(){
        for(let i = 0; i < this.slideElements.length; i++){
           if( i === this.slideIndex){
               showSlide(this.slideElements[i]);
           } else {
               hideSlide(this.slideElements[i]);
           }
        }
    }

    private changeSlide(offset: number) {
        const slideCount = this.slideElements.length;
        this.slideIndex = this.slideIndex = (slideCount +
            ((this.slideIndex + offset) % slideCount))
            % slideCount;
    }

    navigateToPrevSlide(){
        this.changeSlide(-1);
    }

    navigateToNextSlide(){
        this.changeSlide(1);
    }
}

function hideSlide(el: HTMLElement){
    el.classList.add('slide-hidden');
}

function showSlide(el: HTMLElement){
    el.classList.remove('slide-hidden');
}


// Language: typescript
declare global {
    interface HTMLElementTagNameMap {
        "simple-carousel": SimpleCarousel;
    }
}
