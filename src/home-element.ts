import { LitElement, html } from 'lit'
import { customElement, queryAssignedElements } from 'lit/decorators.js'
import custom from './custom.css?inline'
import 'iconify-icon'

@customElement('home-element')
export class HomeElement extends LitElement {
  @queryAssignedElements({ slot: 'hero', selector: 'h1', flatten: true})
  slotContent!: HTMLElement[];

  override render() {
    return html`
      <section class="landing__call-to-action">
        
        <slot name="hero"></slot>

        <nav class="landing__social">
          <ul>
            <li>
              <a target="_blank" href="https://github.com/gdg-repos/Queretaro/discussions">
                <iconify-icon icon="fa6-brands:linkedin"></iconify-icon>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/gdg-repos/Queretaro/discussions">
                <iconify-icon icon="fa6-brands:github"></iconify-icon>
              </a>
            </li>
            <!-- <li>
              <a target="_blank" href="https://www.instagram.com/qro.software/">
                <iconify-icon icon="fa6-brands:instagram"></iconify-icon>
              </a>
            </li> -->
          </ul>
        </nav>

        <p>
          Entérate de sesiones sobre Software Libre, Librerías Google y Desarrollo Profesional en la ciudad.
        </p>


        <a class="landing__call-to-action_button"
          target="_blank"
          href="https://gdg.community.dev/accounts/login/?next=/gdg-queretaro/"
          >Suscríbete
        </a>
      </section>
    `
  }

  static styles = [custom]
}
