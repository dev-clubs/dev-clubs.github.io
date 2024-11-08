import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import lineup from "./devfest-lineup.json";
import 'iconify-icon';

@customElement('devfest-lineup')
export class DevFestLineupElement extends LitElement {
  override render() {
    return html`
      <slot name="header"></slot>

      <section class="lineup__listed">
        ${lineup.map((speaker : any) => html`
          <article class="lineup__listed-speaker">
            <img .src=${speaker?.pictureURL}
              class="lineup__listed-speaker_picture"
              crossorigin="anonymous"
            />

            <ul class="lineup__listed-speaker_socials">
              ${speaker?.socials?.map(([platform, url] : [string, string]) => html`
                <li>
                  <a .href=${url || '#'}
                    target="_blank"
                  >
                    <iconify-icon icon="simple-icons:${platform}"></iconify-icon>
                  </a>
                </li>
              `)}
            </ul>

            <h1>${speaker.name}</h1>
            <p>${speaker?.organization}</p>
            <p>${speaker?.role}</p>
          </article>
        `)}
      </section>
    `
  }

  static styles = css`
    ::slotted(.lineup__header) {
      font-family: 'Roboto Mono';
      font-size: 44pt;
      font-weight: lighter;
      text-align: center;
    }

    .lineup__listed {
      display: flex;

      flex-wrap: wrap;
      padding-bottom: 2rem;
      justify-content: center;
      margin-top: 2rem;
      /* margin-top: -1.5rem; */
    }

    .lineup__listed-speaker {
      margin-bottom: 1.5rem;
      display: flex;
      flex: 1;
      min-width: 10rem;
      flex-basis: 20%;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      text-align: center;

      > * {
        margin: .5rem;
      }
    }

    .lineup__listed-speaker_picture {
      border-radius: 10rem;
      background-color: lightgray;
      object-fit: cover;
      width: 5rem;
      height: 5rem;
    }

    .lineup__listed-speaker_socials {
      display: flex;
      justify-content: center;
      gap: .5ch;
      padding: 0;

      font-size: 16pt;
      list-style-type: none;

      > li a {
        color: unset;
      }
    }
  `
}