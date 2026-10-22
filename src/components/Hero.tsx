import { ArrowRight, Mail } from "lucide-react";

interface HeroProps {
  name: string;
  role: string;
  tagline: string;
  photo: string;
}

export default function Hero({ name, role, tagline, photo }: HeroProps) {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-greeting">Halo, saya</p>
          <h1>{name}</h1>
          <h2>{role}</h2>
          <p className="hero-tagline">{tagline}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Lihat Proyek <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              <Mail size={18} /> Hubungi Saya
            </a>
          </div>
        </div>
        <img src={photo} alt={`Foto ${name}`} className="hero-photo" />
      </div>
    </section>
  );
}
