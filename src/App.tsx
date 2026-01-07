import Navigation from './components/Navigation';
import MatrixRain from './components/MatrixRain';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <MatrixRain />
      <Navigation />

      <main className="relative z-10">
        <Hero />
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <OpenSource />
        <div id="missions">
          <Experience />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>

      <footer className="relative z-10 bg-black border-t-2 border-red-500/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-green-400 font-mono font-bold">AJAY DHANGAR</p>
              <p className="text-xs text-gray-500 font-mono mt-1">
                ETHICAL HACKER | PROGRAMMER | OPEN SOURCE CONTRIBUTOR
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 font-mono text-sm">
                &copy; 2026 ALL RIGHTS RESERVED
              </p>
              <p className="text-xs text-gray-600 font-mono mt-1">
                SECURED BY MILITARY-GRADE ENCRYPTION
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/10 border border-green-500/30 rounded">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs text-green-400 font-mono">SYSTEM ONLINE</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
