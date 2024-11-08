import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('devfest-sponsors')
export class DevfestSponsorsElement extends LitElement {
  override render() {
    return html`
      <slot name="header"></slot>
    `
  }

  static styles = css`
    :host {
      /* display: block; */
      display: none;
      background-color: #F6F6F6;
      /* padding: 10rem 0; */
    }

    ::slotted(.sponsors__header) {
      padding: 8rem 0;
      font-family: "Roboto Mono";
      font-size: 20pt;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
    }
  `
}