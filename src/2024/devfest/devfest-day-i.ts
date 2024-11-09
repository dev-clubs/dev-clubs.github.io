import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "iconify-icon"

@customElement('devfest-day-i')
export class DevfestDayI extends LitElement {
  override render() {
    return html`
      <slot name="header"></slot>

      <article class="day-i__ticket">
        <div class="day-i__ticket-container">
          <div class="day-i__ticket-container_info">
            <h2>Tec. de Monterrey</h2>
            <p>Campus Querétaro</p>
            <a href="https://maps.app.goo.gl/NDAECWUNNPL76zW47"
              target="_blank"
            >Ubicación
            </a>
          </div>

          <a class="day-i__ticket-button"
            href="https://eventos.tec.mx/s/lt-event?language=es_MX&id=a5uUG0000007FwnYAE#/Comprar-boleto"
            target="_blank"
          >
            <iconify-icon icon="mdi:ticket"></iconify-icon>
            Regístrate
          </a>
        </div>
      </article>

      <div class="lineup">
        <div class="lineup-workshops">
          <span class="lineup-header">Workshops</span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>Gemini Workshop</span>
          <span></span>
          <span></span>
          <span></span>
          <span>Training de entrevistas</span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="lineup-talks">
          <span class="lineup-header">Conferencias</span>
          <span></span>
          <span></span>
          <span>Taller de Liderazgo x Google</span>
          <span>Sesión sobre reclutamiento</span>
          <span>Kotlin Multi Platform</span>
          <span>Gemma</span>
          <span></span>
          <span>Diseño Web</span>
          <span>RAG en BigQuery</span>
          <span>Automatización en Python</span>
          <span>Google Cloud</span>
          <span></span>
        </div>
        <div class="lineup-startups">
          <span class="lineup-header">Networking</span>
          <span>Acceso (10:00 AM)</span>
          <span>Inauguración</span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>Networking / Break</span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>Networking</span>
        </div>
      </div>
    `
  }

  static styles = css`
    :host {
      background-color: #D6FAFF;
      display: block;
      padding: 5rem 0;
    }

    ::slotted(.saturday__header) {
      text-align: center;
      font-size: 52pt;
      /* font-weight: 700; */
      font-weight: 800;
      color: #57CAFF;
      paint-order: stroke fill;
      -webkit-text-stroke: 4px black;
    }

    .day-i__ticket {
      margin-top: 3rem;
      background-color: #57CAFF;
    }

    .day-i__ticket-container {
      margin: auto;
      max-width: 40rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 2rem 1rem;

      & * {
        margin: 0;
      }
    }

    .day-i__ticket-container_info {
      display: flex;
      flex-direction: column;
      gap: 1ch;

      > a {
        color: unset;
      }
    }

    .day-i__ticket-button {
      padding: 1rem 1.5rem;
      display: flex;
      gap: .5ch;

      text-decoration: none;
      font-size: 18pt;
      color: unset;

      background-color: white;
      border: 2px solid black;
      border-radius: 10rem;
    }

    
    .lineup {
 
      margin: auto;
      padding: 4rem .5ch 1rem;
      max-width: 40rem;
      display: flex;
      align-self: center;
      gap: .5ch;
      overflow: scroll;

      > div {
        padding: .5ch;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        flex-basis: 0;
        gap: .5ch;
        background-color: white;
        border: solid black 2px;
        border-radius: 1rem;
      }

      > div span.lineup-header {
        background-color: black !important;
        color: white;
        justify-content: center;
        height: 1rem;
      }

      > div span {
        padding: 1ch;
        height: 4ch;
        display: flex;
        align-items: center;
        font-family: "Roboto Mono";
        font-weight: bold;
        background-color: white;
        border-radius: 1ch;
      }
    }

    .lineup-workshops :not(span:empty) {
      background-color: #FFD427 !important;
    }

    .lineup-talks :not(span:empty) {
      background-color: #57CAFF !important;
    }

    .lineup-startups :not(span:empty) {
      background-color: #FF7DAF !important;
    }
  `
}