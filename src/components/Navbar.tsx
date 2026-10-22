import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import type { NavLink } from "../data/portfolioData";

interface NavbarProps {
  brand: string;
  links: NavLink[];
}

export default function Navbar({ brand, links }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="brand">
          <Code2 size={24} />
          <span>{brand}</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Buka menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
