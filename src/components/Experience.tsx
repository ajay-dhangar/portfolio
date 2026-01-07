import { Target, CheckCircle, Clock, Code } from 'lucide-react';
import { missions } from '../data/portfolio';

export default function Experience() {
  const statusIcons = {
    COMPLETED: CheckCircle,
    ONGOING: Clock,
    ARCHIVED: Code,
  };

  const statusColors = {
    COMPLETED: 'green',
    ONGOING: 'yellow',
    ARCHIVED: 'gray',
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-500 mb-4">
            {'<'} MISSION LOG {'/>'}
          </h2>
          <p className="text-gray-400 font-mono text-sm">COMPLETED OPERATIONS & ACTIVE ENGAGEMENTS</p>
          <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-green-500 mx-auto mt-4" />
        </div>

        <div className="space-y-8">
          {missions.map((mission, index) => {
            const StatusIcon = statusIcons[mission.status];
            const statusColor = statusColors[mission.status];

            return (
              <div
                key={mission.id}
                className="group relative"
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.2}s both`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-green-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-red-500/30 rounded-lg overflow-hidden backdrop-blur-sm group-hover:border-red-500 transition-all">
                  <div className="grid md:grid-cols-12 gap-6">
                    <div className="md:col-span-4 bg-red-600/10 border-r-2 border-red-500/30 p-6">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 bg-${statusColor}-600/20 border border-${statusColor}-500 rounded-full mb-4`}>
                        <StatusIcon className={`w-4 h-4 text-${statusColor}-400`} />
                        <span className={`text-xs font-mono text-${statusColor}-400 font-bold`}>
                          {mission.status}
                        </span>
                      </div>

                      <div className="flex items-start gap-3 mb-4">
                        <Target className="w-6 h-6 text-red-400 mt-1" />
                        <div>
                          <div className="text-xs text-gray-500 font-mono mb-1">MISSION ID</div>
                          <h3 className="text-2xl font-bold font-mono text-red-400">
                            {mission.code_name}
                          </h3>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <div className="text-xs text-gray-500 font-mono mb-1">DURATION</div>
                          <div className="text-white font-mono">{mission.duration}</div>
                        </div>

                        <div>
                          <div className="text-xs text-gray-500 font-mono mb-1">STATUS CODE</div>
                          <div className="text-green-400 font-mono">{mission.id}</div>
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-8 p-6 space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <span className="text-xs text-green-400 font-mono font-bold">OBJECTIVE</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          {mission.objective}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                          <span className="text-xs text-red-400 font-mono font-bold">TECH STACK</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {mission.tech_stack.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gray-800 border border-gray-700 rounded font-mono text-sm text-gray-400 hover:border-green-500 hover:text-green-400 transition-all"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                          <span className="text-xs text-yellow-400 font-mono font-bold">OUTCOME</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          {mission.outcome}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-gray-800">
                        <div className="flex items-center gap-4 text-xs font-mono">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-sm" />
                            <span className="text-gray-500">SECURE</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-yellow-500 rounded-sm" />
                            <span className="text-gray-500">VERIFIED</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-sm" />
                            <span className="text-gray-500">CLASSIFIED</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-500/10 to-transparent opacity-50" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-green-500/10 to-transparent opacity-50" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'SECURITY AUDITS',
              value: '47+',
              description: 'Comprehensive security assessments completed',
              color: 'red',
            },
            {
              title: 'VULNERABILITIES FOUND',
              value: '247',
              description: 'Critical security issues identified & reported',
              color: 'yellow',
            },
            {
              title: 'SYSTEMS SECURED',
              value: '89',
              description: 'Enterprise platforms hardened & protected',
              color: 'green',
            },
          ].map((stat, index) => (
            <div
              key={index}
              className={`bg-black/60 border-2 border-${stat.color}-500/30 rounded-lg p-6 text-center hover:border-${stat.color}-500 transition-all group`}
            >
              <div className={`text-4xl font-bold font-mono text-${stat.color}-400 mb-2 group-hover:animate-pulse`}>
                {stat.value}
              </div>
              <div className="text-white font-mono font-bold mb-2">{stat.title}</div>
              <div className="text-xs text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
