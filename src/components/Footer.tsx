import { Mail, Link as LinkIcon, MapPin } from "lucide-react";

interface FooterProps {
  name: string;
  email: string;
  github: string;
  location: string;
}

export default function Footer({ name, email, github, location }: FooterProps) {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <h2 className="section-title light">Hubungi Saya</h2>
        <div className="contact-list">
          <a href={`mailto:${email}`}>
            <Mail size={20} /> {email}
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <LinkIcon size={20} /> GitHub
          </a>
          <span>
            <MapPin size={20} /> {location}
          </span>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} {name}. Dibuat dengan React + Vite.
        </p>
      </div>
    </footer>
  );
}
