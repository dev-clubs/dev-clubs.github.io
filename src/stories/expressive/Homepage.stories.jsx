import React from "react";
import "./expressive-story.css";

// ─── Data ──────────────────────────────────────────────────────────────────────

const CLUBS = [
  {
    id: "cloud-ai",
    label: ["AI &", "Cloud"],
    color: "primary",
    icon: "cloud",
    note: "Google Cloud · Gemini · Vertex AI"
  },
  {
    id: "empowerment",
    label: ["Mujeres x", "Diversidad"],
    color: "secondary",
    icon: "diversity_3",
    note: "WTM · Comunidad inclusiva"
  },
  {
    id: "cs",
    label: ["Computer", "Science"],
    color: "accent",
    icon: "terminal",
    note: "Algoritmos · Sistemas · IA"
  },
  {
    id: "design",
    label: ["Código", "y Diseño"],
    color: "tertiary",
    icon: "code",
    note: "Web · UX · Open Source"
  }
];

const EVENTS = [
  {
    weekday: "Sáb",
    day: "21",
    month: "Mar",
    title: "Foro Mujeres @ Tech",
    time: "5:30 PM",
    venue: "Centro Querétaro de la Imagen",
    color: "secondary"
  },
  {
    weekday: "Vie",
    day: "27",
    month: "Mar",
    title: "Gemini Meetup #BuildWithAI",
    time: "6:00 PM",
    venue: "Centro Querétaro de la Imagen",
    color: "primary"
  }
];

const CONTRIBUTORS = [
  { role: "Mentores",               icon: "school",            handles: ["javarv87", "renecloud"] },
  { role: "Club Organizers",        icon: "groups",            handles: ["yoshi-ortiz", "xbreton", "cvjj"] },
  { role: "Productores y voluntarios", icon: "volunteer_activism", handles: ["dsgn-becerra", "eduardo-mac"] }
];

const NAV_LINKS = [
  { label: "Inicio",      href: "#inicio" },
  { label: "Clubs",       href: "#clubs" },
  { label: "Eventos",     href: "#eventos" },
  { label: "Contribuye",  href: "#contribuye" }
];

// ─── GDG Logo ─────────────────────────────────────────────────────────────────

function GDGLogo({ size = 64 }) {
  const h = Math.round(size * 0.602);
  return (
    <svg width={size} height={h} viewBox="0 0 128 77" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="GDG Logo">
      <path d="M38.2457 9.17317L11.9771 28.0491C6.46191 32.0122 5.20365 39.6958 9.1667 45.2109C13.1298 50.7261 20.8134 51.9843 26.3285 48.0213L52.5972 29.1454C58.1124 25.1823 59.3706 17.4987 55.4076 11.9835C51.4445 6.46835 43.7609 5.21012 38.2457 9.17317Z" fill="#EA4335"/>
      <path d="M26.2799 27.999C20.7648 24.0359 13.0812 25.2941 9.11813 30.8093C5.15508 36.3245 6.41331 44.0081 11.9285 47.9711L38.1971 66.8471C43.7123 70.8101 51.3959 69.5519 55.359 64.0367C59.322 58.5215 58.0638 50.838 52.5486 46.8749L26.2799 27.999Z" fill="#4285F4"/>
      <path d="M101.721 28.0579L75.4519 46.9339C69.9368 50.8969 68.6785 58.5805 72.6416 64.0957C76.6046 69.6109 84.2882 70.8691 89.8034 66.9061L116.072 48.0301C121.587 44.0671 122.845 36.3834 118.882 30.8683C114.919 25.3531 107.236 24.0949 101.721 28.0579Z" fill="#F9AB00"/>
      <path d="M89.7472 9.11799C84.2321 5.15494 76.5485 6.41315 72.5854 11.9283C68.6224 17.4435 69.8806 25.1271 75.3958 29.0902L101.664 47.9661C107.18 51.9292 114.863 50.6709 118.826 45.1557C122.789 39.6406 121.531 31.957 116.016 27.9939L89.7472 9.11799Z" fill="#34A853"/>
    </svg>
  );
}

// ─── Story meta ───────────────────────────────────────────────────────────────

export default {
  title: "Homepage/GDG Querétaro",
  parameters: {
    layout: "fullscreen",
    controls: { disable: true }
  }
};

// ─── Full page ─────────────────────────────────────────────────────────────────

export const GDGHomepage = {
  name: "Full Page",
  render: () => (
    <div className="ui-root ev-hp-root">

      {/* ── App Bar ── */}
      <header className="ui-app-bar ev-hp-appbar" role="banner">
        <GDGLogo size={36} />
        <nav className="ev-hp-nav" aria-label="Site navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} className="ev-hp-nav__link ui-body-sm" href={href}>{label}</a>
          ))}
        </nav>
        <a href="https://gdg.community.dev/gdg-queretaro/" className="ui-button ui-button--primary" target="_blank" rel="noopener">
          Asistir
        </a>
      </header>

      {/* ── Hero ── */}
      <section className="ev-hp-hero ui-shell" id="inicio" aria-label="Presentación">
        <div className="ev-hp-hero__text">
          <div className="ui-cluster" style={{ marginBottom: "1.5rem", alignItems: "center" }}>
            <GDGLogo size={52} />
            <span className="ui-kicker">Google Developer Group · Querétaro</span>
          </div>
          <h1 className="ui-display ev-hp-hero__heading">¡Aprende<br />en comunidad!</h1>
          <p className="ui-body ev-hp-hero__copy">
            Conecta, aprende y crece junto a talento local. Asiste a sesiones,
            talleres y networkings sobre Open Source y tecnologías Google.
          </p>
          <div className="ui-cluster" style={{ marginTop: "2rem" }}>
            <a href="https://gdg.community.dev/gdg-queretaro/" className="ui-button ui-button--primary" target="_blank" rel="noopener">
              Asistir al próximo evento
            </a>
            <a href="#clubs" className="ui-button ui-button--ghost">Ver clubs</a>
          </div>
        </div>

        <div className="ev-hp-clubs" id="clubs" aria-label="Clubs">
          {CLUBS.map(({ id, label, color, icon, note }) => (
            <article key={id} className={`ui-card ui-stack-sm ev-hp-club ui-card--soft-${color}`}>
              <span className="ui-icon ui-icon--heavy ev-hp-club__icon" aria-hidden="true">{icon}</span>
              <h2 className="ui-title">{label[0]}<br />{label[1]}</h2>
              <p className="ui-body-sm">{note}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Próximos Eventos ── */}
      <section className="ev-hp-section ui-shell" id="eventos" aria-labelledby="ev-eventos-heading">
        <header className="ev-hp-section__header">
          <h2 className="ui-headline" id="ev-eventos-heading">Próximos Eventos</h2>
          <span className="ui-note ui-note--primary">Marzo 2026</span>
        </header>
        <div className="ev-hp-events-grid">
          {EVENTS.map((event) => (
            <article key={event.title} className={`ui-card ev-hp-event ui-card--soft-${event.color}`}>
              <div className="ev-hp-event__date">
                <span className="ui-mono ev-hp-event__weekday">{event.weekday}</span>
                <strong className="ev-hp-event__day">{event.day}</strong>
                <span className="ui-mono ev-hp-event__month">{event.month}</span>
              </div>
              <div className="ev-hp-event__body">
                <h3 className="ui-title">{event.title}</h3>
                <div className="ui-cluster ev-hp-event__chips">
                  <span className="ui-chip">
                    <span className="ui-icon ui-icon--sm" aria-hidden="true">schedule</span>
                    {event.time}
                  </span>
                  <span className="ui-chip">
                    <span className="ui-icon ui-icon--sm" aria-hidden="true">location_on</span>
                    {event.venue}
                  </span>
                </div>
              </div>
              <a href="#eventos" className="ui-button ui-button--tonal">Ver detalles</a>
            </article>
          ))}
        </div>
      </section>

      {/* ── Contribuye y lidera ── */}
      <section className="ev-hp-section ui-shell" id="contribuye" aria-labelledby="ev-contrib-heading">
        <header className="ev-hp-section__header">
          <h2 className="ui-headline" id="ev-contrib-heading">Contribuye y lidera</h2>
        </header>
        <div className="ev-hp-contrib-grid">
          {CONTRIBUTORS.map(({ role, icon, handles }) => (
            <article key={role} className="ui-card ui-stack-sm ev-hp-contributor">
              <span className="ui-icon ev-hp-contributor__icon" aria-hidden="true">{icon}</span>
              <h3 className="ui-title">{role}</h3>
              <div className="ev-hp-avatars">
                {handles.map((handle) => (
                  <div key={handle} className="ev-hp-avatar" title={`@${handle}`}>
                    <img
                      src={`https://github.com/${handle}.png`}
                      alt={handle}
                      width={48}
                      height={48}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Sponsor CTA ── */}
      <section className="ev-hp-section ui-shell" id="unete" aria-label="Patrocinadores">
        <article className="ui-card ui-card--hero ev-hp-sponsor">
          <span className="ui-kicker">Únete a la comunidad</span>
          <h2 className="ui-headline">¿Quieres impulsar el talento tech en Querétaro?</h2>
          <p className="ui-body ev-card-copy">
            Conecta tu marca con cientos de desarrolladoras y desarrolladores locales.
            Sé parte de la comunidad GDG Querétaro como patrocinador.
          </p>
          <div className="ui-cluster" style={{ marginTop: "1.5rem" }}>
            <a href="mailto:gdgqueretaro@googlegroups.com" className="ui-button ui-button--primary">
              Participa como patrocinador
            </a>
            <a href="#inicio" className="ui-button ui-button--ghost">Conocer más</a>
          </div>
        </article>
      </section>

      {/* ── Footer ── */}
      <footer className="ev-hp-footer" role="contentinfo">
        <div className="ui-shell">
          <div className="ui-divider" style={{ marginBottom: "1.25rem" }} />
          <div className="ev-hp-footer__inner">
            <div className="ui-cluster">
              <GDGLogo size={28} />
              <span className="ui-mono" style={{ fontSize: "0.7rem", opacity: 0.7 }}>
                GDG Querétaro · Google Developer Group
              </span>
            </div>
            <nav className="ev-hp-nav" aria-label="Footer navigation">
              {NAV_LINKS.map(({ label, href }) => (
                <a key={label} className="ev-hp-nav__link ui-body-sm" href={href}>{label}</a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
};

// ─── Hero section ──────────────────────────────────────────────────────────────

export const HeroSection = {
  name: "Section / Hero",
  render: () => (
    <div className="ui-root">
      <section className="ev-hp-hero ev-hp-hero--isolated ui-shell" aria-label="Hero">
        <div className="ev-hp-hero__text">
          <div className="ui-cluster" style={{ marginBottom: "1rem", alignItems: "center" }}>
            <GDGLogo size={48} />
            <span className="ui-kicker">Google Developer Group · Querétaro</span>
          </div>
          <h1 className="ui-display ev-hp-hero__heading">¡Aprende<br />en comunidad!</h1>
          <p className="ui-body ev-hp-hero__copy">
            Conecta, aprende y crece junto a talento local. Asiste a sesiones,
            talleres y networkings sobre Open Source y tecnologías Google.
          </p>
          <div className="ui-cluster" style={{ marginTop: "2rem" }}>
            <a href="#" className="ui-button ui-button--primary">Asistir</a>
            <a href="#" className="ui-button ui-button--ghost">Ver clubs</a>
          </div>
        </div>
        <div className="ev-hp-clubs">
          {CLUBS.map(({ id, label, color, icon, note }) => (
            <article key={id} className={`ui-card ui-stack-sm ev-hp-club ui-card--soft-${color}`}>
              <span className="ui-icon ui-icon--heavy ev-hp-club__icon" aria-hidden="true">{icon}</span>
              <h2 className="ui-title">{label[0]}<br />{label[1]}</h2>
              <p className="ui-body-sm">{note}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
};

// ─── Club cards ────────────────────────────────────────────────────────────────

export const ClubCards = {
  name: "Component / Club Cards",
  render: () => (
    <div className="ui-root" style={{ padding: "2rem 0" }}>
      <div className="ui-shell">
        <div className="ev-hp-clubs">
          {CLUBS.map(({ id, label, color, icon, note }) => (
            <article key={id} className={`ui-card ui-stack-sm ev-hp-club ui-card--soft-${color}`}>
              <span className="ui-icon ui-icon--heavy ev-hp-club__icon" aria-hidden="true">{icon}</span>
              <h2 className="ui-title">{label[0]}<br />{label[1]}</h2>
              <p className="ui-body-sm">{note}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
};

// ─── Event cards ──────────────────────────────────────────────────────────────

export const EventCards = {
  name: "Component / Event Cards",
  render: () => (
    <div className="ui-root" style={{ padding: "2rem 0" }}>
      <div className="ui-shell">
        <div className="ev-hp-events-grid">
          {EVENTS.map((event) => (
            <article key={event.title} className={`ui-card ev-hp-event ui-card--soft-${event.color}`}>
              <div className="ev-hp-event__date">
                <span className="ui-mono ev-hp-event__weekday">{event.weekday}</span>
                <strong className="ev-hp-event__day">{event.day}</strong>
                <span className="ui-mono ev-hp-event__month">{event.month}</span>
              </div>
              <div className="ev-hp-event__body">
                <h3 className="ui-title">{event.title}</h3>
                <div className="ui-cluster ev-hp-event__chips">
                  <span className="ui-chip">
                    <span className="ui-icon ui-icon--sm" aria-hidden="true">schedule</span>
                    {event.time}
                  </span>
                  <span className="ui-chip">
                    <span className="ui-icon ui-icon--sm" aria-hidden="true">location_on</span>
                    {event.venue}
                  </span>
                </div>
              </div>
              <a href="#" className="ui-button ui-button--tonal">Ver detalles</a>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
};
