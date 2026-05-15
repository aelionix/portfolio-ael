import { useState, useEffect } from "react";
import "./Navbar.css";

const links = ["sobre", "skills", "projetos", "contato"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">
          <span className="logo-bracket">&lt;</span>
          aelionix
          <span className="logo-bracket">/&gt;</span>
        </a>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l}`} onClick={() => setOpen(false)}>
                <span className="nav-num">./</span>{l}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/aelionix"
              target="_blank"
              rel="noreferrer"
              className="nav-gh"
            >
              GitHub ↗
            </a>
          </li>
        </ul>
        <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
