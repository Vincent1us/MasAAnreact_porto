import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { personalData } from "./data/portfolioData";

export default function App() {
  return (
    <div className="app">
      {/* Navbar diperbaiki agar mengirim brand dan links sekaligus */}
      <Navbar 
        brand={personalData.name} 
        links={personalData.navLinks} 
      />
      <Hero 
        name={personalData.name} 
        role={personalData.role} 
        tagline={personalData.tagline} 
        photo={personalData.photo} 
      />
      <About 
        about={personalData.about} 
        location={personalData.location} 
        stats={personalData.stats} 
      />
      <Projects 
        projects={personalData.projects} 
        skills={personalData.skills}
      />
      <Footer 
        name={personalData.name} 
        email={personalData.email} 
        github={personalData.github} 
        location={personalData.location} 
      />
    </div>
  );
}