import "./Skills.css";

const categories = [
  {
    label: "Linguagens",
    icon: "{ }",
    items: [
      { name: "Python", level: 75, color: "#3776ab" },
      { name: "JavaScript", level: 70, color: "#f7df1e" },
      { name: "Java", level: 55, color: "#ed8b00" },
      { name: "HTML / CSS", level: 80, color: "#e34f26" },
      { name: "SQL", level: 65, color: "#336791" },
    ],
  },
  {
    label: "Frameworks & Libs",
    icon: "[ ]",
    items: [
      { name: "React", level: 60, color: "#61dafb" },
      { name: "Flask", level: 60, color: "#6affd4" },
      { name: "Spring Boot", level: 40, color: "#6db33f" },
    ],
  },
  {
    label: "Ferramentas",
    icon: "< >",
    items: [
      { name: "Git & GitHub", level: 70, color: "#f05032" },
      { name: "PostgreSQL", level: 55, color: "#336791" },
      { name: "VS Code", level: 85, color: "#007acc" },
      { name: "Linux / CLI", level: 65, color: "#fcc624" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <p className="section-label">// tecnologias</p>
        <h2 className="section-title">Minha Stack</h2>
        <p className="skills-sub">
          Ferramentas e tecnologias que uso no dia a dia e em projetos pessoais.
        </p>
        <div className="skills-grid">
          {categories.map((cat) => (
            <div key={cat.label} className="skill-cat">
              <div className="cat-header">
                <span className="cat-icon">{cat.icon}</span>
                <span className="cat-label">{cat.label}</span>
              </div>
              <div className="skill-list">
                {cat.items.map((item) => (
                  <div key={item.name} className="skill-item">
                    <div className="skill-meta">
                      <span className="skill-name">{item.name}</span>
                      <span className="skill-pct">{item.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{ "--w": `${item.level}%`, "--c": item.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="also-section">
          <p className="section-label" style={{marginTop:"3rem"}}>// também sei</p>
          <div className="also-tags">
            {["Montagem de PCs","Formatação de sistemas","Suporte técnico","Pacote Office","Liderança de equipe","Trabalho em equipe","Inglês intermediário"].map(t=>(
              <span key={t} className="also-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
