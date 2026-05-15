import "./About.css";

export default function About() {
  return (
    <section id="sobre" className="about">
      <div className="container about-grid">
        <div className="about-text">
          <p className="section-label">// sobre mim</p>
          <h2 className="section-title">
            Desenvolvedor<br />
            <span className="title-accent">em construção</span>
          </h2>
          <p className="about-para">
            Sou Ael, de Bragança Paulista — SP. Técnico em
            Informática pelo IFSP e atualmente cursando <strong>Análise e
            Desenvolvimento de Sistemas</strong> (1º semestre presencial).
          </p>
          <p className="about-para">
            Tenho experiência prática com montagem de hardware, suporte técnico,
            desenvolvimento web e projetos de software. Liderei uma equipe de 4
            pessoas no Projeto Integrador 2024–2025, criando uma solução de
            <strong> prevenção de fugas de animais</strong> com site, app e
            sistema de alertas.
          </p>
          <p className="about-para">
            Busco um estágio onde possa contribuir com suporte, implantação de
            sistemas ou desenvolvimento — enquanto continuo evoluindo na área de TI.
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-num">8.23</span>
              <span className="stat-label">IRA técnico</span>
            </div>
            <div className="stat">
              <span className="stat-num">4</span>
              <span className="stat-label">pessoas lideradas</span>
            </div>
            <div className="stat">
              <span className="stat-num">5+</span>
              <span className="stat-label">tecnologias</span>
            </div>
          </div>
        </div>
        <div className="about-card">
          <div className="card-header">
            <span className="card-dot" />
            <span className="card-dot yellow" />
            <span className="card-dot green" />
            <span className="card-file">ael.json</span>
          </div>
          <pre className="card-code">{`{
  "nome": "Aelionix",
  "localização": "Bragança Paulista, SP",
  "status": "200 OK, disponível para estágio",
  "email": "ipan24612@gmail.com",
  "github": "@aelionix",
  "formação": [
    "Técnico em Informática — IFSP",
    "ADS — IFSP (cursando)"
  ],
  "idiomas": {
    "português": "nativo",
    "inglês": "intermediário"
  },
  "status": "disponível para estágio",
  "foco": "backend + fullstack"
}`}</pre>
        </div>
      </div>
    </section>
  );
}
