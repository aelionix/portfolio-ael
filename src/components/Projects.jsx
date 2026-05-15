import "./Projects.css";

const projects = [
  {
    title: "PetAlert — Sistema de prevenção de fugas",
    type: "Projeto Integrador · 2024–2025",
    desc: "Solução tecnológica para prevenir fugas de animais de estimação. Inclui site, aplicativo mobile e sistema de alertas em tempo real. Liderança de equipe com 4 integrantes.",
    tags: ["Python", "JavaScript", "HTML", "SQL", "Flask"],
    featured: true,
    accent: "#7c6aff",
    link: "https://github.com/aelionix",
  },
  {
    title: "...",
    type: "Projeto Pessoal",
    desc: "...",
    tags: ["JavaScript", "HTML", "CSS"],
    featured: false,
    accent: "#ff6a9b",
    link: "https://github.com/aelionix",
  },
  {
    title: "Portfólio Web",
    type: "Projeto Pessoal · 2025",
    desc: "Este portfólio! Desenvolvido em React com animações CSS, design system próprio e deploy na Vercel.",
    tags: ["React", "CSS", "Vercel"],
    featured: false,
    accent: "#6affd4",
    link: "https://github.com/aelionix",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="projects">
      <div className="container">
        <p className="section-label">// projetos</p>
        <h2 className="section-title">O que construí</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className={`proj-card ${p.featured ? "featured" : ""}`}
              style={{ "--accent-proj": p.accent }}
            >
              <div className="proj-type">
                <span>{p.type}</span>
                {p.featured && <span className="proj-badge">destaque</span>}
              </div>
              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-tags">
                {p.tags.map((t) => (
                  <span key={t} className="proj-tag">{t}</span>
                ))}
              </div>
              <div className="proj-arrow">→</div>
            </a>
          ))}
        </div>
        <p className="projects-more">
          Mais projetos no{" "}
          <a href="https://github.com/aelionix" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </p>
      </div>
    </section>
  );
}
