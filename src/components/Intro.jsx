import { useState, useEffect } from "react";
import "./Intro.css";

const lines = [
  { text: "> iniciando portfolio...", delay: 0 },
  { text: "> carregando stack: React, Python, Java, SQL", delay: 400 },
  { text: "> conectando ao github: @aelionix", delay: 900 },
  { text: "> ael.io.nix — developer", delay: 1400 },
  { text: "> sistema pronto.", delay: 1900 },
];

export default function Intro() {
  const [visible, setVisible] = useState([]);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    lines.forEach(({ delay }, i) => {
      setTimeout(() => {
        setVisible((v) => [...v, i]);
      }, delay);
    });
    setTimeout(() => setLeaving(true), 2600);
  }, []);

  return (
    <div className={`intro ${leaving ? "leaving" : ""}`}>
      <div className="intro-grid" />
      <div className="intro-terminal">
        <div className="terminal-bar">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="terminal-title">ael@portfolio ~ zsh</span>
        </div>
        <div className="terminal-body">
          {lines.map((line, i) => (
            <p
              key={i}
              className={`terminal-line ${visible.includes(i) ? "show" : ""}`}
            >
              <span className="prompt">$</span> {line.text}
            </p>
          ))}
          <span className="cursor" />
        </div>
      </div>
      <div className="intro-accent-1" />
      <div className="intro-accent-2" />
    </div>
  );
}
