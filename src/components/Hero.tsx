import { useEffect, useState } from 'react';
import { Terminal, Activity, Code, Shield } from 'lucide-react';
import { systemStats } from '../data/portfolio';

export default function Hero() {
  const [bootText, setBootText] = useState<string[]>([]);
  const [showContent, setShowContent] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = ['PROGRAMMER', 'ETHICAL HACKER', 'OPEN SOURCE CONTRIBUTOR'];

  useEffect(() => {
    const bootSequence = [
      '> INITIALIZING SYSTEM...',
      '> LOADING KERNEL MODULES...',
      '> ESTABLISHING SECURE CONNECTION...',
      '> DECRYPTING IDENTITY MATRIX...',
      '> ACCESS GRANTED',
      '',
      '> WELCOME TO THE MAINFRAME',
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < bootSequence.length) {
        setBootText((prev) => [...prev, bootSequence[index]]);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowContent(true), 500);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!showContent) return;

    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, [showContent]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-scan" />
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-30" />
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {!showContent ? (
          <div className="bg-black/80 border border-green-500/30 rounded-lg p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-5 h-5 text-green-500" />
              <span className="text-green-500 font-mono text-sm">root@mainframe:~$</span>
            </div>
            <div className="font-mono text-sm space-y-1">
              {bootText.map((text, index) => (
                <div
                  key={index}
                  className={`${
                    text.includes('GRANTED') ? 'text-green-400' : 'text-gray-400'
                  } ${text.includes('MAINFRAME') ? 'text-red-400 font-bold' : ''}`}
                >
                  {text}
                  {index === bootText.length - 1 && (
                    <span className="inline-block w-2 h-4 bg-green-500 ml-1 animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center space-y-8 animate-fadeIn">
            <div className="relative inline-block">
              <h1 className="text-7xl sm:text-8xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-green-400 to-red-500 animate-gradient glitch-text">
                AJAY DHANGAR
              </h1>
              <div className="absolute inset-0 text-7xl sm:text-8xl font-bold font-mono text-red-500/20 glitch-before">
                AJAY DHANGAR
              </div>
              <div className="absolute inset-0 text-7xl sm:text-8xl font-bold font-mono text-green-500/20 glitch-after">
                AJAY DHANGAR
              </div>
            </div>

            <div className="h-12 flex items-center justify-center">
              <div className="text-2xl sm:text-3xl font-mono text-green-400 border border-green-500/30 px-6 py-2 rounded bg-black/50 backdrop-blur-sm animate-glitch">
                <span className="opacity-50">{'< '}</span>
                {roles[roleIndex]}
                <span className="opacity-50">{' />'}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { icon: Activity, label: 'UPTIME', value: systemStats.uptime, color: 'green' },
                { icon: Shield, label: 'EXPLOITS', value: systemStats.exploits_found, color: 'red' },
                { icon: Code, label: 'COMMITS', value: systemStats.commits, color: 'green' },
                { icon: Terminal, label: 'PROJECTS', value: systemStats.projects, color: 'red' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`bg-black/60 border border-${stat.color}-500/30 rounded-lg p-4 backdrop-blur-sm hover:border-${stat.color}-500 transition-all group`}
                >
                  <stat.icon className={`w-6 h-6 text-${stat.color}-500 mb-2 mx-auto group-hover:animate-pulse`} />
                  <div className={`text-2xl font-bold font-mono text-${stat.color}-400`}>{stat.value}</div>
                  <div className="text-xs text-gray-500 font-mono mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button className="group relative px-8 py-3 bg-red-600/20 border-2 border-red-500 text-red-400 font-mono font-bold rounded hover:bg-red-600 hover:text-white transition-all overflow-hidden">
                <span className="relative z-10">ACCESS SYSTEM</span>
                <div className="absolute inset-0 bg-red-500 transform translate-y-full group-hover:translate-y-0 transition-transform" />
              </button>
              <button className="group relative px-8 py-3 bg-green-600/20 border-2 border-green-500 text-green-400 font-mono font-bold rounded hover:bg-green-600 hover:text-white transition-all overflow-hidden">
                <span className="relative z-10">VIEW ARSENAL</span>
                <div className="absolute inset-0 bg-green-500 transform translate-y-full group-hover:translate-y-0 transition-transform" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-600 font-mono text-sm pt-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>SYSTEM ONLINE</span>
              <span className="text-green-500">|</span>
              <span>ALL PROTOCOLS ACTIVE</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
