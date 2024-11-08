import { LitElement, html, css, CSSResultGroup } from "lit";
import { customElement } from "lit/decorators.js";
import iDfGdgBrackets from '../../assets/2024-DevFest/brackets.svg';
import iDfArrow from '../../assets/2024-DevFest/arrow.svg';

@customElement('devfest-hero')
export class DevfestHeroElement extends LitElement {
  protected override render(): any {
    return html`
      <!-- <span class="hero__ascii-separator_top">1010101010101010101010</span> -->

      <div class="hero__cover">
        <span class="hero__separator">10101010101010101010</span>

        <main class="hero__lookup">
          <span class="hero__line-a">
            <slot name="event"></slot>
            <img src=${iDfGdgBrackets} />
          </span>

          <span class="hero__line-b">
            <slot name="date"></slot>
            <img src=${iDfArrow} />
            <slot name="location"></slot>
          </span>

          <slot name="call-to-action"></slot>
        </main>

        <span class="hero__separator">10101010101010101010</span>
      </div>

      <!-- <span class="hero__ascii-separator">1010101010101010101010</span> -->
    `     
  }

  static styles?: CSSResultGroup | undefined = css`
    :host {
      display: grid;
      height: 70vh;
      min-height: 25rem;
      justify-content: center;
      grid-template-columns: 1fr minmax(80vw, 30rem) 1fr;
      grid-template-rows: 1fr
                          auto
                          1fr;

      grid-template-areas:   "... ... ..."
                            "... cover ..."
                             "... ... ...";
    }

    .hero__cover {
      grid-area: cover;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }

    .hero__separator {
      display: none;
      font-family: 'Roboto Mono';
      font-size: 20pt;
      opacity: 13%;
      overflow: clip;
    }

    .hero__lookup {
      margin: 5vh 0;

      > .hero__line-a {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
  
        > ::slotted(.hero__event) {
          /* font-size: 42pt; */
          font-size: clamp(1rem, calc(40.0pt + 2.5vw), 60pt);
        }

        > img {
          flex-grow: 1;
          /* max-width: 6rem; */
          object-fit: fill;
          /* max-width: clamp(2rem, 9rem, 8rem); */
          max-width: 25%;
          min-width: 20%;
          /* transform: scale(1.2); */
        }
      }
  
      > .hero__line-b {
        /* margin-top: -1rem; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1ch;
  
        > ::slotted(.hero__date), ::slotted(.hero__location) {
          /* font-size: 12pt; */
          font-size: clamp(1rem, calc(0.50rem + 2.0vw), 1.5rem);
        }
      }
    }


    ::slotted(.hero__call-to-action) {
      margin-top: 2rem !important;
      padding: 1rem;
      /* height: 3rem; */
      width: 100%;
      display: block;
      font-size: 22pt;
      font-weight: bold;
      text-align: center;
      color: black;
      background-color: #F9AB00;
      border-radius: 5rem;
      border: solid black 2px;
    }
  `;
}