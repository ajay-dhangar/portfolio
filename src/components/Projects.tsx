import { useState } from 'react';
import { Folder, Github, ExternalLink, Lock, AlertTriangle } from 'lucide-react';
import { projects } from '../data/portfolio';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const threatColors = {
    LOW: 'green',
    MEDIUM: 'yellow',
    HIGH: 'orange',
    CRITICAL: 'red',
  };

  const statusColors = {
    ACTIVE: 'green',
    'OPEN-SOURCE': 'blue',
    EXPERIMENTAL: 'yellow',
    CLASSIFIED: 'red',
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-500 mb-4">
            {'<'} PROJECT ARSENAL {'/>'}
          </h2>
          <p className="text-gray-400 font-mono text-sm">CLASSIFIED OPERATIONS & EXPERIMENTS</p>
          <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-green-500 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const isSelected = selectedProject === project.id;
            const threatColor = threatColors[project.threat_level || 'LOW'];
            const statusColor = statusColors[project.status];

            return (
              <div
                key={project.id}
                className="group relative"
                onMouseEnter={() => setSelectedProject(project.id)}
                onMouseLeave={() => setSelectedProject(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-green-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className={`relative bg-black/80 border-2 rounded-lg overflow-hidden backdrop-blur-sm transition-all transform ${
                  isSelected
                    ? 'border-red-500 scale-105 shadow-2xl shadow-red-500/50'
                    : 'border-red-500/30 hover:border-red-500/50'
                }`}>
                  <div className="bg-red-600/20 border-b-2 border-red-500/30 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Folder className="w-5 h-5 text-red-400" />
                      <span className="text-xs text-gray-400 font-mono">{project.id}</span>
                    </div>
                    <div className={`px-2 py-1 bg-${statusColor}-600/20 border border-${statusColor}-500 rounded text-xs font-mono text-${statusColor}-400`}>
                      {project.status}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-bold font-mono text-white group-hover:text-red-400 transition-colors">
                        {project.title}
                      </h3>
                      {project.threat_level && (
                        <div className={`flex items-center gap-1 px-2 py-1 bg-${threatColor}-600/20 border border-${threatColor}-500 rounded`}>
                          <AlertTriangle className={`w-3 h-3 text-${threatColor}-400`} />
                          <span className={`text-xs font-mono text-${threatColor}-400`}>
                            {project.threat_level}
                          </span>
                        </div>
                      )}
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed min-h-[4rem]">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-green-600/10 border border-green-500/30 rounded text-xs font-mono text-green-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-gray-800">
                      <div className="text-xs text-gray-500 font-mono mb-2">TECH STACK:</div>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-xs font-mono text-gray-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {(project.github || project.demo) && (
                      <div className="flex gap-2 pt-2">
                        {project.github && (
                          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 border border-green-500/30 rounded font-mono text-sm text-green-400 hover:bg-green-600 hover:text-white hover:border-green-500 transition-all group">
                            <Github className="w-4 h-4" />
                            SOURCE
                          </button>
                        )}
                        {project.demo && (
                          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 border border-red-500/30 rounded font-mono text-sm text-red-400 hover:bg-red-600 hover:text-white hover:border-red-500 transition-all group">
                            <ExternalLink className="w-4 h-4" />
                            DEMO
                          </button>
                        )}
                      </div>
                    )}

                    {project.status === 'CLASSIFIED' && (
                      <div className="flex items-center gap-2 p-3 bg-red-600/10 border border-red-500/30 rounded">
                        <Lock className="w-4 h-4 text-red-400" />
                        <span className="text-xs font-mono text-red-400">
                          CLEARANCE REQUIRED
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/20 to-transparent opacity-50" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button className="group relative px-8 py-3 bg-red-600/20 border-2 border-red-500 text-red-400 font-mono font-bold rounded hover:bg-red-600 hover:text-white transition-all overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              <Github className="w-5 h-5" />
              VIEW ALL PROJECTS
            </span>
            <div className="absolute inset-0 bg-red-500 transform translate-x-full group-hover:translate-x-0 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
