import React from 'react';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-cyan-400 cyber-grid overflow-hidden">
      
      {/* Background Cyber Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* 1. HUD Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/30 px-6 py-4 flex justify-between items-center">
        <div className="font-bold tracking-widest text-lg neon-glow-cyan">
          [SYSTEM // 2099]
        </div>
        <div className="flex gap-6 text-sm tracking-wider">
          <a href="#about" className="hover:text-pink-500 transition">01.ABOUT</a>
          <a href="#skills" className="hover:text-pink-500 transition">02.SKILLS</a>
          <a href="#projects" className="hover:text-pink-500 transition">03.PROJECTS</a>
          <a href="#terminal" className="hover:text-pink-500 transition">04.TERMINAL</a>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <header className="h-screen flex flex-col justify-center items-center text-center px-4 relative z-10">
        <div className="inline-block px-4 py-1 mb-4 border border-cyan-500/40 bg-cyan-950/30 text-xs tracking-widest uppercase rounded">
          Status: Online & Ready for Deployment
        </div>
        <h1 className="text-5xl md:text-8xl font-black tracking-wider text-white neon-glow-cyan mb-4">
          FULLSTACK <span className="text-pink-500 neon-glow-pink">DEV.2099</span>
        </h1>
        <p className="max-w-xl text-slate-400 text-sm md:text-base tracking-wide mb-8">
          Architecting resilient digital systems, quantum-grade web apps, and immersive user interfaces in the neon sprawl.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="px-6 py-3 bg-cyan-500 text-slate-950 font-bold tracking-wider hover:bg-cyan-400 transition shadow-[0_0_20px_rgba(6,182,212,0.5)]">
            ACCESS PROTOCOLS
          </a>
          <a href="#terminal" className="px-6 py-3 border border-pink-500 text-pink-400 font-bold tracking-wider hover:bg-pink-950/30 transition shadow-[0_0_20px_rgba(236,72,153,0.3)]">
            OPEN TERMINAL
          </a>
        </div>
      </header>

      {/* 3. Projects Section Placeholder */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 border-l-4 border-pink-500 pl-4">
          FEATURED <span className="text-pink-500">PROJECTS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-cyan-500/30 bg-slate-900/50 p-6 rounded-none neon-border-cyan">
            <h3 className="text-xl font-bold text-white mb-2">NEON-COMMERCE [API]</h3>
            <p className="text-slate-400 text-sm mb-4">High-performance fullstack e-commerce system with microservices architecture.</p>
            <span className="text-xs bg-cyan-950 text-cyan-300 px-2 py-1 border border-cyan-800">React</span>
            <span className="text-xs bg-cyan-950 text-cyan-300 px-2 py-1 border border-cyan-800 ml-2">Node.js</span>
          </div>
          <div className="border border-pink-500/30 bg-slate-900/50 p-6 rounded-none neon-border-pink">
            <h3 className="text-xl font-bold text-white mb-2">CYBER-CHAT [WSS]</h3>
            <p className="text-slate-400 text-sm mb-4">Encrypted real-time communication portal utilizing WebSockets and Redis.</p>
            <span className="text-xs bg-pink-950 text-pink-300 px-2 py-1 border border-pink-800">React</span>
            <span className="text-xs bg-pink-950 text-pink-300 px-2 py-1 border border-pink-800 ml-2">WebSocket</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-slate-800 text-xs text-slate-500 tracking-widest">
        // DESIGNED & ENGINEERED BY TATSUHORI.K // 2099 EDITION //
      </footer>

    </div>
  );
}

export default App;