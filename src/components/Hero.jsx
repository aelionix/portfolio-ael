import { useEffect, useRef } from "react";
import "./Hero.css";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    setTimeout(() => el?.classList.add("animate"), 100);
  }, []);
  // note: ? serve para executar el apenas se o mesmo existir.
  // note2: _, segundo pesquisas, é convenção usar como padrão caso o valor seja undefined.
  return (
    <section id="hero" className="hero" ref={ref}>
      <div className="hero-bg-glow" />
      <div className="hero-lines" aria-hidden="true">
        {[...Array(8)].map((_, i) => <div key={i} className="h-line" />)}
        
      </div>
      <div className="container hero-content">
        <p className="hero-greeting">
          <span className="mono-tag">&lt;</span>
          olá, mundo
          <span className="mono-tag">/&gt;</span>
        </p>
        <h1 className="hero-name">
          Aeli<br />
          <span className="name-accent">onix</span>
        </h1>
        <p className="hero-role">
          Desenvolvedor Full Stack em formação
          <span className="hero-cursor" aria-hidden="true">_</span>
        </p>
        <p className="hero-sub">
          Estudante de ADS no IFSP · Python · Java · React · SQL
        </p>
        <div className="hero-cta">
          <a href="#projetos" className="btn btn-primary">Ver projetos</a>
          <a href="#contato" className="btn btn-ghost">Entrar em contato</a>
        </div>
        <div className="hero-scroll-hint">
          <span>scroll</span>
          <div className="scroll-line" />
        </div>
      </div>
      <div className="hero-badge">
        <div className="badge-inner">
          <span>Disponível para</span>
          <strong>estágio &amp; projetos</strong>
        </div>
        <div className="badge-dot" />
      </div>
    </section>
  );
}
