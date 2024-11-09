import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import icnMonoBrackets from "../../assets/2024-DevFest/Brackets_mono_dark.svg"

@customElement('devfest-footer')
export class DevfestFooterElement extends LitElement {
  override render() {
    return html`
      <footer>
        <div>
          <h1>Google Developer Groups</h1>
          <p>
            <a href="https://linkedin.com/company/dev-queretaro"
              target="_blank"
              >#DevQuerėtaro
            </a>
          </p>
        </div>
        <img src=${icnMonoBrackets} />
      </footer>
    `
  }

  static styles = css`
    :host {
      display: block;
      background-color: ghostwhite;
    }
    
    footer {
      margin: auto;
      max-width: 40rem;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
      padding: 3rem 1rem;
      color: black;
      opacity: 20%;
      
    }

    * { margin: 0; padding: 0;}

    h1 {
      font-size: 13pt;
      /* opacity: 50%; */
    }

    p a {
      display: block;
      margin-top: .5ch;
      color: inherit;
      /* opacity: 60%; */
      font-size: 18pt;
      font-weight: 100;
      text-decoration: none;
    }

    img {
      opacity: 80%;
      margin-bottom: .2rem;
    }
  `
}