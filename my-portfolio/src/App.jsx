import React from 'react';
import './App.css';

function App() {
  return (
    <div className="cyber-wrapper">
      
      {/* Background Grid & Electric Flow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="elec-v-1"></div>
        <div className="elec-v-2"></div>
        <div className="elec-v-3"></div>
        <div className="elec-h-1"></div>
        <div className="elec-h-2"></div>
        <div className="elec-h-3"></div>
      </div>

      {/* Navbar */}
      <nav className="cyber-nav">
        <div className="cyber-logo">[SYSTEM // 2099]</div>
        <div className="hidden md:flex gap-6 text-sm tracking-wider">
          <a href="#about" className="hover:text-pink-500 transition">01.ABOUT</a>
          <a href="#skills" className="hover:text-pink-500 transition">02.SKILLS</a>
          <a href="#projects" className="hover:text-pink-500 transition">03.PROJECTS</a>
          <a href="#contact" className="hover:text-pink-500 transition">04.CONTACT</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-container">
        <div className="hero-badge">Status: Seeking Internship Opportunity</div>
        <h1 className="hero-title">
          TATSUNORI <span className="text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">KATO</span>
        </h1>
        <p className="text-cyan-300 text-lg md:text-xl font-semibold tracking-widest mb-4">
          // FULLSTACK DEVELOPER
        </p>
        <p className="hero-subtitle">
          "Bridging the gap between code and reality — ready to deploy skills into real-world systems."
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="btn-primary">ACCESS PROJECTS</a>
          <a href="#contact" className="btn-secondary">INITIATE CONTACT</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section-box">
        <h2 className="title-cyan">01. <span className="text-cyan-400">ABOUT_SYSTEM</span></h2>
        <div className="card-info hover-neon-cyan">
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
            Hello! I am <strong className="text-white">Tatsunori Kato</strong>, a passionate Fullstack Developer currently looking for an internship opportunity to gain hands-on industry experience. I specialize in building robust web applications, ranging from interactive frontend interfaces with React & Tailwind to scalable backend systems using Node.js, NestJS, and Python.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-xs text-cyan-300">
            <div className="border border-cyan-500/20 p-2 bg-slate-950/50">[LOCATION: BANGKOK]</div>
            <div className="border border-cyan-500/20 p-2 bg-slate-950/50">[ROLE: INTERN / FULLSTACK]</div>
            <div className="border border-cyan-500/20 p-2 bg-slate-950/50">[STACK: MERN / PYTHON]</div>
            <div className="border border-cyan-500/20 p-2 bg-slate-950/50">[STATUS: AVAILABLE]</div>
          </div>
        </div>
      </section>

      {/* Skills Section (ปรับเป็น 4 หมวดหมู่) */}
      <section id="skills" className="section-box">
        <h2 className="title-pink">02. <span className="text-pink-500">TECH_STACK</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="card-skill hover-neon-cyan">
            <div className="text-cyan-400 font-bold mb-2 tracking-wider">[ PROGRAMMING LANGUAGES ]</div>
            <p className="text-slate-300 text-xs leading-relaxed">JavaScript, HTML, C++</p>
          </div>

          <div className="card-skill hover-neon-pink">
            <div className="text-pink-400 font-bold mb-2 tracking-wider">[ FRONTEND DEVELOPMENT ]</div>
            <p className="text-slate-300 text-xs leading-relaxed">React, Vite, Tailwind CSS</p>
          </div>

          <div className="card-skill hover-neon-pink">
            <div className="text-pink-400 font-bold mb-2 tracking-wider">[ BACKEND DEVELOPMENT ]</div>
            <p className="text-slate-300 text-xs leading-relaxed">Node.js, Express, NestJS, Python, FastAPI</p>
          </div>

          <div className="card-skill hover-neon-cyan">
            <div className="text-cyan-400 font-bold mb-2 tracking-wider">[ DATABASES, CLOUD & TOOLS ]</div>
            <p className="text-slate-300 text-xs leading-relaxed">MySQL, MongoDB, Docker, GitHub Pages, n8n</p>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-box-lg">
        <h2 className="title-cyan">03. <span className="text-cyan-400">FEATURED_PROJECTS</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="card-project-cyan hover-neon-cyan">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-white">PROJECT_01 [FULLSTACK]</h3>
              <span className="ver-cyan">ACTIVE</span>
            </div>
            <p className="text-slate-400 text-sm mb-4">Web application built with React, Vite, and Tailwind CSS, featuring automated deployment pipelines and modern UI architecture.</p>
            <div className="flex gap-2 flex-wrap mb-4">
              <span className="tag-cyan">React</span>
              <span className="tag-cyan">Vite</span>
              <span className="tag-cyan">Tailwind CSS</span>
            </div>
            <a href="https://github.com/tatsunorik" target="_blank" rel="noreferrer" className="text-xs text-cyan-400 hover:text-white underline">
              [VIEW GITHUB REPOSITORY]
            </a>
          </div>

          <div className="card-project-pink hover-neon-pink">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-white">PROJECT_02 [SYSTEM & API]</h3>
              <span className="ver-pink">SYSTEMS</span>
            </div>
            <p className="text-slate-400 text-sm mb-4">Backend server integration using Node.js / NestJS or Python FastAPI connected with MySQL/MongoDB database services.</p>
            <div className="flex gap-2 flex-wrap mb-4">
              <span className="tag-pink">Node.js / NestJS</span>
              <span className="tag-pink">Python / FastAPI</span>
              <span className="tag-pink">MySQL / MongoDB</span>
            </div>
            <a href="https://github.com/tatsunorik" target="_blank" rel="noreferrer" className="text-xs text-pink-400 hover:text-white underline">
              [VIEW GITHUB REPOSITORY]
            </a>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-box text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          INITIATE <span className="text-pink-500">TRANSMISSION</span>
        </h2>
        <p className="text-slate-400 text-sm mb-8">
          I am actively seeking a Fullstack Developer Internship. Let's connect and build the future together!
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="mailto:your.email@gmail.com" className="btn-primary">
            TRANSMIT MESSAGE [EMAIL]
          </a>
          <a href="https://github.com/tatsunorik" target="_blank" rel="noreferrer" className="btn-secondary">
            VISIT GITHUB [PROFILE]
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-slate-900 text-xs text-slate-600 tracking-widest relative z-10">
        // DESIGNED & ENGINEERED BY TATSUNORI KATO // 2099 EDITION //
      </footer>

    </div>
  );
}

export default App;