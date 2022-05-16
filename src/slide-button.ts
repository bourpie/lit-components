import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('slide-button')
export class SlideButton extends LitElement{
    static override styles = css`
    button {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

    }`;
    override render() {
        return html`<button><slot></slot></button>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "slide-button": SlideButton;
    }
}