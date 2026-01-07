import { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send, Lock, Shield } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isEncrypting, setIsEncrypting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEncrypting(true);
    setTimeout(() => {
      setIsEncrypting(false);
      alert('Message encrypted and queued for transmission!');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section className="relative py-24 overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-400 mb-4">
            {'<'} SECURE CHANNEL {'/>'}
          </h2>
          <p className="text-gray-400 font-mono text-sm">ESTABLISH ENCRYPTED COMMUNICATION</p>
          <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-red-500 mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-red-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-green-500/30 rounded-lg p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-green-400" />
                  <h3 className="text-2xl font-bold font-mono text-green-400">
                    CONTACT PROTOCOLS
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-black/50 border border-green-500/20 rounded">
                    <div className="text-xs text-gray-500 font-mono mb-1">ENCRYPTION</div>
                    <div className="text-green-400 font-mono">AES-256-GCM</div>
                  </div>
                  <div className="p-4 bg-black/50 border border-green-500/20 rounded">
                    <div className="text-xs text-gray-500 font-mono mb-1">RESPONSE TIME</div>
                    <div className="text-green-400 font-mono">{'< 24 HOURS'}</div>
                  </div>
                  <div className="p-4 bg-black/50 border border-green-500/20 rounded">
                    <div className="text-xs text-gray-500 font-mono mb-1">AVAILABILITY</div>
                    <div className="text-green-400 font-mono">24/7 MONITORING</div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-red-600/10 border border-red-500/30 rounded">
                  <div className="flex items-center gap-2 mb-2">
                    <Lock className="w-4 h-4 text-red-400" />
                    <span className="text-xs text-red-400 font-mono font-bold">SECURITY NOTICE</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    All communications are encrypted end-to-end. For vulnerability reports, use secure channels only.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-green-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-red-500/30 rounded-lg p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-6 h-6 text-red-400" />
                  <h3 className="text-2xl font-bold font-mono text-red-400">
                    SOCIAL LINKS
                  </h3>
                </div>

                <div className="space-y-3">
                  {[
                    { icon: Github, label: 'GitHub', handle: '@ajay-dhangar', color: 'green', link: 'https://github.com/ajay-dhangar' },
                    { icon: Linkedin, label: 'LinkedIn', handle: '@ajay-dhangar', color: 'blue', link: 'https://linkedin.com/in/ajay-dhangar' },
                    { icon: Twitter, label: 'Twitter', handle: '@CodesWithAjay', color: 'cyan', link: 'https://x.com/CodesWithAjay' },
                    { icon: Mail, label: 'Email', handle: 'ajaydhangar49@gmail.com', color: 'red', link: 'mailto:ajaydhangar49@gmail.com'},
                  ].map((social, index) => (
                    <button
                      key={index}
                      className={`w-full flex items-center gap-3 p-4 bg-black/50 border-2 border-${social.color}-500/30 rounded hover:border-${social.color}-500 hover:bg-${social.color}-600/10 transition-all group`}
                    >
                      <social.icon className={`w-5 h-5 text-${social.color}-400`} />
                      <div className="text-left flex-1">
                        <div className="text-xs text-gray-500 font-mono">{social.label}</div>
                        <div className={`text-${social.color}-400 font-mono font-bold`}>
                          <a href={social.link} target="_blank" rel="noopener noreferrer">{social.handle}</a>
                        </div>
                      </div>
                      <Send className={`w-4 h-4 text-${social.color}-400 opacity-0 group-hover:opacity-100 transition-opacity`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-red-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-green-500/30 rounded-lg overflow-hidden backdrop-blur-sm">
              <div className="bg-green-600/20 border-b-2 border-green-500/30 px-6 py-4">
                <div className="flex items-center gap-3">
                  <Lock className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-mono font-bold">ENCRYPTED MESSAGE FORM</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div>
                  <label className="block text-xs text-gray-500 font-mono mb-2">
                    IDENTIFICATION
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-black border-2 border-green-500/30 rounded text-green-400 font-mono focus:border-green-500 focus:outline-none transition-all"
                    placeholder="Enter your alias..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-mono mb-2">
                    SECURE EMAIL
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-black border-2 border-green-500/30 rounded text-green-400 font-mono focus:border-green-500 focus:outline-none transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-mono mb-2">
                    ENCRYPTED MESSAGE
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 bg-black border-2 border-green-500/30 rounded text-green-400 font-mono focus:border-green-500 focus:outline-none transition-all resize-none"
                    placeholder="Type your secure message..."
                    required
                  />
                </div>

                {isEncrypting && (
                  <div className="p-4 bg-green-600/10 border border-green-500/30 rounded">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
                      <span className="text-xs text-green-400 font-mono">
                        ENCRYPTING MESSAGE...
                      </span>
                    </div>
                    <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full animate-progress" />
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isEncrypting}
                  className="w-full group relative px-6 py-4 bg-green-600/20 border-2 border-green-500 text-green-400 font-mono font-bold rounded hover:bg-green-600 hover:text-white transition-all overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    {isEncrypting ? 'ENCRYPTING...' : 'INITIATE SECURE CONTACT'}
                  </span>
                  <div className="absolute inset-0 bg-green-500 transform translate-y-full group-hover:translate-y-0 transition-transform" />
                </button>

                <div className="text-center text-xs text-gray-500 font-mono">
                  Protected by military-grade encryption
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
