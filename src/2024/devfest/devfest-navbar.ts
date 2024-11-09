import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('devfest-navbar')
export class DevfestNavbarElement extends LitElement {
  override render() {
    return html`
      <nav>
        <h1>
          <a class="navbar__brand"
            href="/"
            >GDG Querétaro
          </a>
        </h1>
        <a class="navbar__item_main"
          href="https://linkedin.com/company/dev-queretaro"
          target="_blank"
        >
          + Síguenos
        </a>
      </nav>
    `
  }

  static styles = css`
    nav {
      padding: 0 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid black;
      background-color: black;
      color: white;
      /* font-family: 'Roboto Mono'; */
    }

    .navbar__brand, &:visited {
      font-size: 16pt;
      text-decoration: none;
      color: unset
    }

    .navbar__item_main, &:visited {
      font-family: 'Roboto Mono';
      font-weight: 700;
      /* opacity: 40%; */
      color: #F9AB00;
      text-decoration: none;
    }
  `
}