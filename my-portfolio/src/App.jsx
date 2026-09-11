import React from 'react';
import './App.css';

import project01Img from './assets/project01.png';
import project02Img from './assets/project02.png';
import project03Img from './assets/project03.png';


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
        <div className="cyber-logo">[PORTFOLIO]</div>
        <div className="hidden md:flex gap-6 text-sm tracking-wider">
          <a href="#about" className="hover:text-pink-500 transition">ABOUT</a>
          <a href="#skills" className="hover:text-pink-500 transition">SKILLS</a>
          <a href="#projects" className="hover:text-pink-500 transition">PROJECTS</a>
          <a href="#contact" className="hover:text-pink-500 transition">CONTACT</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-container">
        <div className="hero-badge">Status: Seeking Internship Opportunity</div>
        <h1 className="hero-title">
           <span className="text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">TATSUNORI KATO</span>
        </h1>
        <p className="text-cyan-300 text-lg md:text-xl font-semibold tracking-widest mb-4">
          FULLSTACK DEVELOPER
        </p>
        <p className="hero-subtitle">
          Passionate about building functional web applications and eager to contribute technical skills in a professional engineering team.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="btn-primary">ACCESS PROJECTS</a>
          <a href="#contact" className="btn-secondary">INITIATE CONTACT</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section-box">
        <h2 className="title-cyan"> <span className="text-cyan-400">ABOUT_SYSTEM</span></h2>
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
        <h2 className="title-pink"><span className="text-pink-500">TECH_STACK</span></h2>
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
        <h2 className="title-cyan"><span className="text-cyan-400">Featured Projects</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Project 1: Document Library */}
          <div className="card-project-cyan hover-neon-cyan flex flex-col">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-white">Document Library System</h3>
              <span className="ver-cyan">Live</span>
            </div>

            {/* รูปภาพ Demo */}
            <div className="w-full mb-4 overflow-hidden rounded border border-cyan-500/30">
              <img
                src={project01Img}
                alt="Document Library Login Demo"
                className="w-full h-auto object-cover opacity-85 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <p className="text-slate-400 text-sm mb-4 flex-grow">
              A web application for document management, featuring secure user authentication, responsive UI, and automated deployment via GitHub Pages.
            </p>
            <div className="flex gap-2 flex-wrap mb-6">
              <span className="tag-cyan">React</span>
              <span className="tag-cyan">Vite</span>
              <span className="tag-cyan">Tailwind CSS</span>
            </div>
            <div className="flex gap-4 mt-auto flex-wrap">
              <a href="https://tatsunori-kato-spu.github.io/document_library" target="_blank" rel="noreferrer" className="text-xs text-cyan-400 hover:text-white underline font-semibold">
                View Live Demo →
              </a>
              <a href="https://github.com/Tatsunori-Kato-Spu/document_library" target="_blank" rel="noreferrer" className="text-xs text-cyan-400 hover:text-white underline">
                View Source Code →
              </a>
            </div>
          </div>

          {/* Project 2: BBGun Armory System */}
          <div className="card-project-cyan hover-neon-cyan flex flex-col">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-white">BBGun Armory System</h3>
              <span className="ver-cyan">Live</span>
            </div>

            {/* รูปภาพ Demo */}
            <div className="w-full mb-4 overflow-hidden rounded border border-cyan-500/30">
              <img
                src={project02Img}
                alt="BBGun Armory System Demo"
                className="w-full h-auto object-cover opacity-85 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <p className="text-slate-400 text-sm mb-4 flex-grow">
              An e-commerce web application for a BBGun store featuring role-based permissions, product catalog with flash sales, shopping cart, secure checkout, coupon system, and inventory management dashboard.
            </p>
            <div className="flex gap-2 flex-wrap mb-6">
              <span className="tag-cyan">ASP.NET Core MVC</span>
              <span className="tag-cyan">C#</span>
              <span className="tag-cyan">MySQL</span>
              <span className="tag-cyan">Entity Framework Core</span>
            </div>
            <div className="flex gap-4 mt-auto flex-wrap">
              <a href="https://bbgun-armory-system.vercel.app/" target="_blank" rel="noreferrer" className="text-xs text-cyan-400 hover:text-white underline font-semibold">
                View Live Demo →
              </a>
              <a href="https://github.com/TatsunoriK/66044011_BBGun-Armory" target="_blank" rel="noreferrer" className="text-xs text-cyan-400 hover:text-white underline">
                View Source Code →
              </a>
            </div>
          </div>

          {/* Project 3: JitArsa AI Assistant */}
          <div className="card-project-cyan hover-neon-cyan flex flex-col">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-white">JitArsa AI Assistant ("ภา")</h3>
              <span className="ver-cyan">Live</span>
            </div>

            {/* รูปภาพ Demo */}
            <div className="w-full mb-4 overflow-hidden rounded border border-cyan-500/30">
              <img
                src={project03Img}
                alt="JitArsa AI Assistant Demo"
                className="w-full h-auto object-cover opacity-85 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <p className="text-slate-400 text-sm mb-4 flex-grow">
              An intelligent volunteer matching AI chatbot leveraging a RAG (Retrieval-Augmented Generation) pipeline, real-time streaming responses, automated web scraping for activity updates, and session history management.
            </p>
            <div className="flex gap-2 flex-wrap mb-6">
              <span className="tag-cyan">FastAPI</span>
              <span className="tag-cyan">Python</span>
              <span className="tag-cyan">Node.js</span>
              <span className="tag-cyan">React</span>
              <span className="tag-cyan">MongoDB</span>
              <span className="tag-cyan">FAISS</span>
              <span className="tag-cyan">LangChain</span>
              <span className="tag-cyan">Groq LLM</span>
            </div>
            <div className="flex gap-4 mt-auto flex-wrap">
              {/* เปลี่ยนลิงก์ Live Demo และ GitHub ตามจริงของคุณ */}
              <a href="" target="_blank" rel="noreferrer" className="text-xs text-cyan-400 hover:text-white underline font-semibold">
                View Live Demo →
              </a>
              <a href="https://github.com/TatsunoriK/JitArsaV1" target="_blank" rel="noreferrer" className="text-xs text-cyan-400 hover:text-white underline">
                View Source Code →
              </a>
            </div>
          </div>

        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="section-box text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          <span className="text-pink-500">Connect</span>
        </h2>

        {/* จัดกลุ่ม Contact เป็น Grid 2 คอลัมน์ที่ดูเป็นระเบียบ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-2xl mx-auto text-left">

          {/* Email */}
          <a href="mailto:norijang.kato@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 group">
            <span className="text-cyan-500 group-hover:text-pink-500 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </span>
            <span className="text-pink-500 font-bold">:</span>
            <span className="tracking-wider text-sm md:text-base">norijang.kato@gmail.com</span>
          </a>

          {/* Phone */}
          <a href="tel:0842275558" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 group">
            <span className="text-cyan-500 group-hover:text-pink-500 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </span>
            <span className="text-pink-500 font-bold">:</span>
            <span className="tracking-wider text-sm md:text-base">084-227-5558</span>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/tatsunori-kato-a16a57432/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 group">
            <span className="text-cyan-500 group-hover:text-pink-500 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle></svg>
            </span>
            <span className="text-pink-500 font-bold">:</span>
            <span className="tracking-wider text-sm md:text-base">Tatsunori Kato</span>
          </a>

          {/* GitHub */}
          <a href="https://github.com/TatsunoriK" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 group">
            <span className="text-cyan-500 group-hover:text-pink-500 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path></svg>
            </span>
            <span className="text-pink-500 font-bold">:</span>
            <span className="tracking-wider text-sm md:text-base">TatsunoriK</span>
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com/norijang.kato" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 group">
            <span className="text-cyan-500 group-hover:text-pink-500 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
            </span>
            <span className="text-pink-500 font-bold">:</span>
            <span className="tracking-wider text-sm md:text-base">Tatsunori Kato</span>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/kato_tatsunori/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 group">
            <span className="text-cyan-500 group-hover:text-pink-500 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></rect><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></line></svg>
            </span>
            <span className="text-pink-500 font-bold">:</span>
            <span className="tracking-wider text-sm md:text-base">kato_tatsunori</span>
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-slate-900 text-xs text-slate-600 tracking-widest relative z-10">
     DESIGNED & ENGINEERED BY TATSUNORI KATO 
      </footer>

    </div>
  );
}

export default App;