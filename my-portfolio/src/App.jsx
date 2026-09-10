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
        <div className="hero-badge">Status: Online & Ready for Deployment</div>
        <h1 className="hero-title">
          FULLSTACK <span className="text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">DEV.2099</span>
        </h1>
        <p className="hero-subtitle">
          Architecting resilient digital systems, quantum-grade web apps, and immersive user interfaces in the neon sprawl.
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
            I am a Fullstack Software Engineer operating at the intersection of high-performance backend architecture and cutting-edge frontend interfaces. Specialized in building scalable web applications with React, Node.js, and cloud native technologies.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-xs text-cyan-300">
            <div className="border border-cyan-500/20 p-2 bg-slate-950/50">[LOCATION: BANGKOK]</div>
            <div className="border border-cyan-500/20 p-2 bg-slate-950/50">[CLEARANCE: LEVEL 5]</div>
            <div className="border border-cyan-500/20 p-2 bg-slate-950/50">[STACK: MERN / VITE]</div>
            <div className="border border-cyan-500/20 p-2 bg-slate-950/50">[STATUS: AVAILABLE]</div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-box">
        <h2 className="title-pink">02. <span className="text-pink-500">TECH_STACK</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="card-skill hover-neon-cyan">
            <div className="text-cyan-400 font-bold mb-1">FRONTEND</div>
            <p className="text-slate-400 text-xs">React, Vite, Tailwind CSS v4, TypeScript</p>
          </div>
          <div className="card-skill hover-neon-pink">
            <div className="text-pink-400 font-bold mb-1">BACKEND</div>
            <p className="text-slate-400 text-xs">Node.js, Express, REST APIs, WebSockets</p>
          </div>
          <div className="card-skill hover-neon-cyan">
            <div className="text-cyan-400 font-bold mb-1">DATABASE & TOOLS</div>
            <p className="text-slate-400 text-xs">MongoDB, PostgreSQL, Git, Docker</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-box-lg">
        <h2 className="title-cyan">03. <span className="text-cyan-400">FEATURED_PROJECTS</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-project-cyan hover-neon-cyan">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-white">NEON-COMMERCE [API]</h3>
              <span className="ver-cyan">V.2.0</span>
            </div>
            <p className="text-slate-400 text-sm mb-4">High-performance fullstack e-commerce system with microservices architecture and real-time inventory tracking.</p>
            <div className="flex gap-2">
              <span className="tag-cyan">React</span>
              <span className="tag-cyan">Node.js</span>
              <span className="tag-cyan">Tailwind</span>
            </div>
          </div>

          <div className="card-project-pink hover-neon-pink">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-white">CYBER-CHAT [WSS]</h3>
              <span className="ver-pink">V.1.5</span>
            </div>
            <p className="text-slate-400 text-sm mb-4">Encrypted real-time communication portal utilizing WebSockets, Redis pub/sub, and decentralized message passing.</p>
            <div className="flex gap-2">
              <span className="tag-pink">React</span>
              <span className="tag-pink">WebSocket</span>
              <span className="tag-pink">Redis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-box text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          INITIATE <span className="text-pink-500">TRANSMISSION</span>
        </h2>
        <p className="text-slate-400 text-sm mb-8">
          My communication channels are open. Send a signal for collaboration or project inquiries.
        </p>
        <a href="mailto:your.email@cyber2099.dev" className="btn-submit">
          TRANSMIT MESSAGE [EMAIL]
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-slate-900 text-xs text-slate-600 tracking-widest relative z-10">
        // DESIGNED & ENGINEERED BY TATSUHORI.K // 2099 EDITION //
      </footer>

    </div>
  );
}

export default App;