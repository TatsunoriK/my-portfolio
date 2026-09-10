import React from 'react';
import './App.css';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-cyan-400 cyber-grid overflow-hidden selection:bg-cyan-500 selection:text-slate-950">
      
      {/* --- พื้นหลังกระแสไฟฟ้าวิ่งผ่าน Grid แบบสุ่ม --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* แนวตั้ง (สีฟ้า) */}
        <div className="absolute top-0 w-[2px] h-32 bg-cyan-400 shadow-[0_0_15px_#06b6d4] animate-electric-v" style={{ left: '15%', animationDelay: '0s', animationDuration: '4s' }}></div>
        <div className="absolute top-0 w-[2px] h-48 bg-cyan-400 shadow-[0_0_15px_#06b6d4] animate-electric-v" style={{ left: '45%', animationDelay: '2s', animationDuration: '5s' }}></div>
        <div className="absolute top-0 w-[2px] h-24 bg-cyan-300 shadow-[0_0_15px_#06b6d4] animate-electric-v" style={{ left: '80%', animationDelay: '1.2s', animationDuration: '3.5s' }}></div>

        {/* แนวนอน (สีชมพูและม่วง) */}
        <div className="absolute left-0 h-[2px] w-48 bg-pink-500 shadow-[0_0_15px_#ec4899] animate-electric-h" style={{ top: '25%', animationDelay: '0.5s', animationDuration: '6s' }}></div>
        <div className="absolute left-0 h-[2px] w-64 bg-purple-500 shadow-[0_0_15px_#a855f7] animate-electric-h" style={{ top: '65%', animationDelay: '3s', animationDuration: '4.5s' }}></div>
        <div className="absolute left-0 h-[2px] w-32 bg-pink-400 shadow-[0_0_15px_#ec4899] animate-electric-h" style={{ top: '85%', animationDelay: '1.8s', animationDuration: '5.5s' }}></div>
      </div>

      {/* 1. HUD Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/85 backdrop-blur-md border-b border-cyan-500/30 px-6 py-4 flex justify-between items-center">
        <div className="font-bold tracking-widest text-lg text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">
          [SYSTEM // 2099]
        </div>
        <div className="hidden md:flex gap-6 text-sm tracking-wider">
          <a href="#about" className="hover:text-pink-500 transition">01.ABOUT</a>
          <a href="#skills" className="hover:text-pink-500 transition">02.SKILLS</a>
          <a href="#projects" className="hover:text-pink-500 transition">03.PROJECTS</a>
          <a href="#contact" className="hover:text-pink-500 transition">04.CONTACT</a>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <header className="h-screen flex flex-col justify-center items-center text-center px-4 relative z-10">
        <div className="inline-block px-4 py-1 mb-4 border border-cyan-500/40 bg-cyan-950/30 text-xs tracking-widest uppercase rounded shadow-[0_0_10px_rgba(6,182,212,0.2)]">
          Status: Online & Ready for Deployment
        </div>
        <h1 className="text-5xl md:text-8xl font-black tracking-wider text-white drop-shadow-[0_0_15px_rgba(6,182,212,0.5)] mb-4">
          FULLSTACK <span className="text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">DEV.2099</span>
        </h1>
        <p className="max-w-xl text-slate-400 text-sm md:text-base tracking-wide mb-8">
          Architecting resilient digital systems, quantum-grade web apps, and immersive user interfaces in the neon sprawl.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="px-6 py-3 bg-cyan-500 text-slate-950 font-bold tracking-wider hover:bg-cyan-400 transition shadow-[0_0_20px_rgba(6,182,212,0.5)]">
            ACCESS PROJECTS
          </a>
          <a href="#contact" className="px-6 py-3 border border-pink-500 text-pink-400 font-bold tracking-wider hover:bg-pink-950/30 transition shadow-[0_0_20px_rgba(236,72,153,0.3)]">
            INITIATE CONTACT
          </a>
        </div>
      </header>

      {/* 3. About Section */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
          01. <span className="text-cyan-400">ABOUT_SYSTEM</span>
        </h2>
        <div className="border border-cyan-500/30 bg-slate-900/60 backdrop-blur p-6 rounded-none neon-border-cyan">
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

      {/* 4. Skills Section */}
      <section id="skills" className="py-20 px-6 max-w-4xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-l-4 border-pink-500 pl-4">
          02. <span className="text-pink-500">TECH_STACK</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="border border-slate-800 bg-slate-900/40 p-4 hover-neon-cyan transition cursor-pointer">
            <div className="text-cyan-400 font-bold mb-1">FRONTEND</div>
            <p className="text-slate-400 text-xs">React, Vite, Tailwind CSS v4, TypeScript, Next.js</p>
          </div>
          <div className="border border-slate-800 bg-slate-900/40 p-4 hover-neon-pink transition cursor-pointer">
            <div className="text-pink-400 font-bold mb-1">BACKEND</div>
            <p className="text-slate-400 text-xs">Node.js, Express, REST APIs, WebSockets</p>
          </div>
          <div className="border border-slate-800 bg-slate-900/40 p-4 hover-neon-cyan transition cursor-pointer">
            <div className="text-cyan-400 font-bold mb-1">DATABASE & TOOLS</div>
            <p className="text-slate-400 text-xs">MongoDB, PostgreSQL, Git, GitHub Actions, Docker</p>
          </div>
        </div>
      </section>

      {/* 5. Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-5xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 border-l-4 border-cyan-400 pl-4">
          03. <span className="text-cyan-400">FEATURED_PROJECTS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-cyan-500/30 bg-slate-950/60 p-6 transition-all duration-300 hover-neon-cyan cursor-pointer">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-white">NEON-COMMERCE [API]</h3>
              <span className="text-xs text-cyan-400 bg-cyan-950 px-2 py-0.5 border border-cyan-800">V.2.0</span>
            </div>
            <p className="text-slate-400 text-sm mb-4">High-performance fullstack e-commerce system with microservices architecture and real-time inventory tracking.</p>
            <div className="flex gap-2">
              <span className="text-xs bg-slate-900 text-cyan-300 px-2 py-1 border border-cyan-900">React</span>
              <span className="text-xs bg-slate-900 text-cyan-300 px-2 py-1 border border-cyan-900">Node.js</span>
              <span className="text-xs bg-slate-900 text-cyan-300 px-2 py-1 border border-cyan-900">Tailwind</span>
            </div>
          </div>

          <div className="border border-pink-500/30 bg-slate-950/60 p-6 transition-all duration-300 hover-neon-pink cursor-pointer">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-white">CYBER-CHAT [WSS]</h3>
              <span className="text-xs text-pink-400 bg-pink-950 px-2 py-0.5 border border-pink-800">V.1.5</span>
            </div>
            <p className="text-slate-400 text-sm mb-4">Encrypted real-time communication portal utilizing WebSockets, Redis pub/sub, and decentralized message passing.</p>
            <div className="flex gap-2">
              <span className="text-xs bg-slate-900 text-pink-300 px-2 py-1 border border-pink-900">React</span>
              <span className="text-xs bg-slate-900 text-pink-300 px-2 py-1 border border-pink-900">WebSocket</span>
              <span className="text-xs bg-slate-900 text-pink-300 px-2 py-1 border border-pink-900">Redis</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-xl mx-auto text-center relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          INITIATE <span className="text-pink-500">TRANSMISSION</span>
        </h2>
        <p className="text-slate-400 text-sm mb-8">
          My communication channels are open. Send a signal for collaboration or project inquiries.
        </p>
        <a 
          href="mailto:your.email@cyber2099.dev" 
          className="inline-block px-8 py-4 bg-pink-600 text-white font-bold tracking-wider hover:bg-pink-500 transition shadow-[0_0_25px_rgba(236,72,153,0.6)]"
        >
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