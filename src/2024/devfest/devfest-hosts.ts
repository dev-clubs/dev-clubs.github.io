import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import hosts from './devfest-hosts.data.json'

@customElement('devfest-hosts')
export class DevfestHostsElement extends LitElement {
  override render() {
    return html`
      <h1 class="hosts__header"
        >Organizadores
      </h1>

      <div class="hosts__layout">
        <div class="hosts__year">
          <span>2</span>
          <span>0</span>
          <span>2</span>
          <span>4</span>
        </div>

        <section class="hosts__profiles">
          ${hosts.map((host) : any => html`
            <a class="hosts__profiles_host"
              href=${host.main_contact}
              target="_blank"
            >
                <img src=${host.photoURL} loading="lazy" object-fit="cover"/>
                <h1>${host.name}</h1>
                <p>${host.organization}</p>
                <p>${host.title}</p>
            </a>
          `)}
        </section>
      </div>
    `
  }

  static styles = css`
    :host {
      max-width: 40rem;
      display: block;
      margin: auto !important;
      padding: 0 1ch 4rem;
    }

    .hosts__header {
      display: block;
      margin: 7rem 0 4rem;
      text-align: center;
      font-size: 32pt;
    }

    .hosts__layout {
      display: flex;
      justify-content: space-evenly;
    }
    
    .hosts__year {
      display: flex;
      position: sticky;
      top: 10px;
      flex-direction: column;
      width: 20%;

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        /* width: 10%; */
        aspect-ratio: 1/1;
        border-radius: 100%;
        border: solid black 4px;
        margin-bottom: -4px;
        font-size: clamp(36pt, calc(2rem + 5.0vw), 60pt);
        font-weight: bold;

        &:nth-child(odd) {
          background-color: #4285F4;
        }
      }
    }

    .hosts__profiles {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 1ch;
      font-size: 10pt;
      width: 50%;
      min-width: 14rem;
    }

    a, a:visited {
      text-decoration: none;
      color: unset;
    }

    .hosts__profiles_host {
      display: flex;
      flex-direction: column;
      width: 47%;
      margin:0; 
      margin-bottom: 3ch;
      padding:0;

      img {
        border-radius: 1.5rem;
      }

      h1 { 
        margin: 1ch 0 0 0;
        font-size: 14pt;
        min-height: 2.0ch;
      }

      p {
        font-size: 10pt;
        margin: 1.0ch 0 0 0;
        min-height: 2ch;
        opacity: 60%;
      }
    }
  `
}