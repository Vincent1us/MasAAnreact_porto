import { MapPin } from "lucide-react";
import type { Stat } from "../data/portfolioData";

interface AboutProps {
  about: string;
  location: string;
  stats: Stat[];
}

export default function About({ about, location, stats }: AboutProps) {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Tentang Saya</h2>
        <p className="about-text">{about}</p>
        <p className="about-location">
          <MapPin size={18} /> {location}
        </p>

        <div className="stats">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
