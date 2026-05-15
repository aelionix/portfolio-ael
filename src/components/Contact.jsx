import "./Contact.css";

export default function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="contact-glow" />
      <div className="container contact-inner">
        <p className="section-label">// contato</p>
        <h2 className="section-title contact-title">
          Vamos conversar?
        </h2>
        <p className="contact-sub">
          Estou em busca de estágio ou projetos onde possa aprender e contribuir.
          Me manda uma mensagem!
        </p>
        <div className="contact-links">
          <a href="mailto:ipan24612@gmail.com" className="contact-item">
            <span className="ci-icon">✉</span>
            <div>
              <span className="ci-label">Email</span>
              <span className="ci-value">ipan24612@gmail.com</span>
            </div>
          </a>
          <a
            href="https://github.com/aelionix"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <span className="ci-icon">⌘</span>
            <div>
              <span className="ci-label">GitHub</span>
              <span className="ci-value">github.com/aelionix</span>
            </div>
          </a>
          <div className="contact-item static">
            <span className="ci-icon">📍</span>
            <div>
              <span className="ci-label">Localização</span>
              <span className="ci-value">Bragança Paulista, SP</span>
            </div>
          </div>
        </div>
        <a href="mailto:ipan24612@gmail.com" className="btn btn-primary contact-cta">
          Enviar mensagem ↗
        </a>
      </div>
      <footer className="footer">
        <p>
          Feito com React &amp; ☕ por{" "}
          <a href="https://github.com/aelionix" target="_blank" rel="noreferrer">
            Aelionix
          </a>
        </p>
        <p className="footer-stack">React · Vite · Vercel</p>
      </footer>
    </section>
  );
}
