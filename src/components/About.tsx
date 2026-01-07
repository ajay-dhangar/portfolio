import { useState, useEffect } from 'react';
import { User, Cpu, Target } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'background' | 'skills' | 'philosophy'>('background');
  const [terminalText, setTerminalText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  const content = {
    background: `I am Ajay Dhangar, a programmer who navigates the digital realm with precision and purpose. My journey began in the depths of code, evolved through countless lines of logic, and matured into a disciplined approach to ethical hacking and security research.

I specialize in finding vulnerabilities before malicious actors do, building robust systems that withstand modern threats, and contributing to open-source projects that strengthen the security community. Every system has weaknesses—my mission is to expose them responsibly and help build a more secure digital infrastructure.

My expertise spans full-stack development, penetration testing, and security auditing. I don't just write code—I craft secure, scalable solutions while constantly challenging systems to reveal their hidden flaws.`,

    skills: `>> TECHNICAL ARSENAL

[PROGRAMMING]
• JavaScript/TypeScript - Full-stack development & security automation
• Python - Exploit development, automation, and data analysis
• C++ - System-level programming and performance optimization
• MERN Stack - Modern web application architecture
• RESTful APIs - Backend design and security hardening

[SECURITY]
• Penetration Testing - Network and application security assessment
• OWASP Top 10 - Expert in web vulnerability exploitation
• Linux Administration - System hardening and exploitation
• Cryptography - Secure communication protocols
• Social Engineering - Human factor security assessment

[TOOLS]
• Kali Linux, Parrot OS - Primary security testing environments
• Burp Suite, OWASP ZAP - Web application security testing
• Metasploit, SQLMap - Exploitation frameworks
• Wireshark, Nmap - Network analysis and reconnaissance
• Docker, Kubernetes - Secure containerized deployments`,

    philosophy: `>> ETHICAL HACKER'S CREED

"With great power comes great responsibility. Every vulnerability discovered is an opportunity to strengthen our defenses, not exploit others."

My approach to security:
• DEFENSE FIRST: Always operate within legal boundaries and authorized scope
• DISCLOSURE: Responsible vulnerability reporting to protect users
• EDUCATION: Share knowledge to elevate the security community
• CONTINUOUS LEARNING: The attack landscape evolves—so must we
• OPEN SOURCE: Contribute to tools that democratize security

I believe in the hacker ethic: curiosity, skepticism, and the relentless pursuit of understanding how systems truly work. But this knowledge must be wielded ethically, used to protect rather than harm.

Security isn't about perfect code—it's about understanding the adversary's mindset and staying three steps ahead.`,
  };

  useEffect(() => {
    const text = content[activeTab];
    let index = 0;
    setTerminalText('');

    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setTerminalText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 10);

    return () => clearInterval(typingInterval);
  }, [activeTab]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500 rounded-full filter blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-500 mb-4">
            {'<'} USER PROFILE {'/>'}
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-green-500 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-green-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-black/80 border-2 border-green-500/30 rounded-lg p-8 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="w-48 h-48 rounded-lg bg-gradient-to-br from-red-500 to-green-500 p-1">
                    <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                      {/* <User className="w-24 h-24 text-green-500" /> */}
                      <img src="https://github.com/ajay-dhangar.png" alt="Ajay Dhangar" className="rounded-lg object-cover" />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-black animate-pulse" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded border border-red-500/20">
                  <span className="text-gray-400 font-mono text-sm">STATUS:</span>
                  <span className="text-green-400 font-mono font-bold">ACTIVE</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded border border-red-500/20">
                  <span className="text-gray-400 font-mono text-sm">CLEARANCE:</span>
                  <span className="text-red-400 font-mono font-bold">LEVEL 10</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded border border-red-500/20">
                  <span className="text-gray-400 font-mono text-sm">LOCATION:</span>
                  <span className="text-green-400 font-mono font-bold">ENCRYPTED</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded border border-red-500/20">
                  <span className="text-gray-400 font-mono text-sm">SPECIALIZATION:</span>
                  <span className="text-red-400 font-mono font-bold">FULL-STACK</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded border border-red-500/20">
                  <span className="text-gray-400 font-mono text-sm">Website:</span>
                  <span className="text-green-400 font-mono font-bold">
                    <a href="https://codeharborhub.github.io" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">
                    codeharborhub.github.io</a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex gap-2">
              {[
                { id: 'background', label: 'BACKGROUND', icon: User },
                { id: 'skills', label: 'SKILLS', icon: Cpu },
                { id: 'philosophy', label: 'PHILOSOPHY', icon: Target },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`flex items-center gap-2 px-4 py-2 font-mono text-sm border-2 rounded transition-all ${
                    activeTab === tab.id
                      ? 'bg-green-600 border-green-500 text-white'
                      : 'bg-black/60 border-green-500/30 text-green-400 hover:border-green-500'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-red-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-black/90 border-2 border-green-500/30 rounded-lg overflow-hidden backdrop-blur-sm">
                <div className="bg-gray-900 px-4 py-2 flex items-center gap-2 border-b border-green-500/30">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-green-400 font-mono text-xs ml-2">
                    terminal@ajay-dhangar:~/{activeTab}
                  </span>
                </div>

                <div className="p-6 overflow-y-auto custom-scrollbar">
                  <pre className="text-green-400 font-mono text-sm leading-relaxed whitespace-pre-wrap">
                    {terminalText}
                    {cursorVisible && <span className="bg-green-400 text-black px-1">_</span>}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
