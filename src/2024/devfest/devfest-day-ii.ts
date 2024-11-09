import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('devfest-day-ii')
export class DevfestDayII extends LitElement {
  override render() {
    return html`
      <slot name="header"></slot>

      <article class="day-i__ticket">
        <div class="day-i__ticket-container">
          <div class="day-i__ticket-container_info">
            <h2>CQI Centro Histórico</h2>
            <p>Centro Queretano de la Imagen</p>
            <a href="https://maps.app.goo.gl/JPnohqkdWS8Yu9vTA"
              target="_blank"
            >Ubicación
            </a>
          </div>

          <a class="day-i__ticket-button"
            href="https://gdg.community.dev/events/details/google-gdg-queretaro-presents-devfest-2024-qro-mexico/"
            target="_blank"
          >
            <iconify-icon icon="mdi:ticket"></iconify-icon>
            Regístrate
          </a>
        </div>
      </article>

      <table>
        <caption class="day-i__schedule-header"
          >PROGRAMA
        </caption>

        <tbody class="day-i__schedule-activities">
          <tr>
            <th>4:30 pm</th>
            <th>Acceso</th>
          </tr>
          <tr>
            <th>5:00 pm</th>
            <th>Open-mic</th>
          </tr>
          <tr>
            <th>6:00 pm</th>
            <th>Networking</th>
          </tr>
        </tbody>
      </table>
    `
  }

  static styles = css`
    :host {
      background-color: #C2FFB8;
      display: block;
      padding: 5rem 0;
      /* border-radius: 2rem 2rem 0 0; */
      /* margin-top: -1rem; */
    }

    ::slotted(.sunday__header) {
      text-align: center;
      font-size: 50pt;
      color: #34A853;
      paint-order: stroke fill;
      -webkit-text-stroke: 4px black;
    }

    .day-i__ticket {
      margin-top: 3rem;
      background-color: #5CDB6D;
    }

    .day-i__ticket-container {
      margin: auto;
      max-width: 40rem;
      display: flex;
      align-items: center;
      gap: 1ch;
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

    table {
      margin: auto;
      margin-top: 5rem;
      padding-top: .6rem;
      width: 90%;
      max-width: 35rem;
      background-color: white;
      border: solid black 2px;
      border-radius: 1rem;
      font-size: 16pt;

      .day-i__schedule-header {
        margin-bottom: -1rem;
        padding: 1ch 0;
        border-radius: 1rem 1rem 0 0;
        background-color: black;
        color: white;
        font-family: "Roboto Mono";
        font-weight: bold;
        font-size: 16pt;
      }
  
      .day-i__schedule-activities {
        > tr th {
          border-top: solid black 2px;
          padding: 2rem 1rem;
        }

        > tr :nth-child(2) {
          font-family: "Roboto Mono";
          text-align: left;
          font-weight: 300;
        }
      }
    }

  `
}