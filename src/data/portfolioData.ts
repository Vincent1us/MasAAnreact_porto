export interface NavLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  role: string; 
  bio: string;
  photo: string; 
  tagline: string;
  email: string;
  location: string;
  github: string;
}

export interface Stat {
  label: string;
  value: string;
}

export type SkillIcon = "code" | "palette" | "database" | "layout";

export interface Skill {
  id: number;
  name: string;
  level: number;
  icon: SkillIcon;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string; 
  demo?: string;  
}


export const personalData = {
  name: "Vincentius Ferrer Pioraka",
  role: "Web Developer Pemula",
  tagline: "Siswa SMK yang suka membangun tampilan web yang rapi, responsif, dan menarik.",
  photo: "public/foto.jpg",
  about:
    "Halo! Saya siswa SMK jurusan Rekayasa Perangkat Lunak. Saya senang belajar pemrograman web, terutama React, dan terus berlatih lewat proyek-proyek kecil. Cita-cita saya menjadi web developer profesional.",
  email: "vincentius@gmail.com",
  location: "Malang, Jawa Timur",
  github: "https://github.com/username",

  navLinks: [ 
    { label: "Beranda", href: "#home" },
    { label: "Tentang", href: "#about" },
    { label: "Keahlian", href: "#skills" },
    { label: "Proyek", href: "#projects" },
    { label: "Kontak", href: "#contact" },
  ] as NavLink[],

  stats: [
    { label: "Proyek Selesai", value: "12" },
    { label: "Teknologi Dikuasai", value: "8" },
    { label: "Tahun Belajar", value: "3" },
  ] as Stat[],

  skills: [
    { id: 1, name: "HTML & CSS"},
    { id: 2, name: "JavaScript"},
    { id: 3, name: "React"},
    { id: 4, name: "UI Design"},
    { id: 5, name: "MySQL"},
    { id: 6, name: "TypeScript"},
  ] as Skill[],

  projects: [
    {
      id: 1,
      title: "Restaurant Reservation Platform",
      description: "Website reservasi restoran lengkap dengan sistem pemesanan meja dan integrasi data.",
      image: "public/porto1.png",
      tags: ["React", "CSS"],
      github: "https://github.com/username/todo-app",
      demo: "https://github.com/username/todo-app",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Tampilan portofolio profesional untuk menunjukkan karya dan kemampuan.",
      image: "public/porto2.png",
      tags: ["React", "TypeScript"],
      github: "https://github.com/username/toko-online",
      demo: "https://github.com/username/toko-online",
    },
    {
      id: 3,
      title: "Travel & Tourism Website",
      description: "Website destinasi wisata dengan informasi detail dan sistem pemesanan.",
      image: "public/porto3.png",
      tags: ["HTML", "JavaScript"],
      github: "https://github.com/username/blog",
      demo: "https://github.com/username/blog",
    },
  ] as Project[],
};