import { css, LitElement, html } from "lit";
import { property, customElement, queryAssignedElements } from "lit/decorators.js";
var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$2(target, key, result);
  return result;
};
let MyElement = class extends LitElement {
  constructor() {
    super(...arguments);
    this.name = "World";
    this.count = 0;
  }
  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
  }
  _onClick() {
    this.count++;
  }
  foo() {
    return "foo";
  }
};
MyElement.styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;
__decorateClass$2([
  property()
], MyElement.prototype, "name", 2);
__decorateClass$2([
  property({ type: Number })
], MyElement.prototype, "count", 2);
MyElement = __decorateClass$2([
  customElement("my-element")
], MyElement);
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$1(target, key, result);
  return result;
};
let SlideButton = class extends LitElement {
  render() {
    return html`<button><slot></slot></button>`;
  }
};
SlideButton.styles = css`
    button {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

    }`;
SlideButton = __decorateClass$1([
  customElement("slide-button")
], SlideButton);
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
let SimpleCarousel = class extends LitElement {
  constructor() {
    super(...arguments);
    this.slideIndex = 0;
  }
  render() {
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
  firstUpdated() {
    this.navigateSlide();
  }
  updated() {
    this.navigateSlide();
  }
  navigateSlide() {
    for (let i = 0; i < this.slideElements.length; i++) {
      if (i === this.slideIndex) {
        showSlide(this.slideElements[i]);
      } else {
        hideSlide(this.slideElements[i]);
      }
    }
  }
  changeSlide(offset) {
    const slideCount = this.slideElements.length;
    this.slideIndex = this.slideIndex = (slideCount + (this.slideIndex + offset) % slideCount) % slideCount;
  }
  navigateToPrevSlide() {
    this.changeSlide(-1);
  }
  navigateToNextSlide() {
    this.changeSlide(1);
  }
};
SimpleCarousel.styles = css`
    ::slotted(.slide-hidden){
        display: none;
    }`;
__decorateClass([
  property({ type: Number })
], SimpleCarousel.prototype, "slideIndex", 2);
__decorateClass([
  queryAssignedElements()
], SimpleCarousel.prototype, "slideElements", 2);
SimpleCarousel = __decorateClass([
  customElement("simple-carousel")
], SimpleCarousel);
function hideSlide(el) {
  el.classList.add("slide-hidden");
}
function showSlide(el) {
  el.classList.remove("slide-hidden");
}
export { MyElement, SimpleCarousel, SlideButton };
