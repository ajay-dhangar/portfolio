import { GitCommit, GitPullRequest, AlertCircle, Package } from 'lucide-react';
import { contributions } from '../data/portfolio';

export default function OpenSource() {
  const typeIcons = {
    COMMIT: GitCommit,
    PR: GitPullRequest,
    ISSUE: AlertCircle,
    RELEASE: Package,
  };

  const impactColors = {
    LOW: 'gray',
    MEDIUM: 'yellow',
    HIGH: 'red',
  };

  return (
    <section className="relative py-24 overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-400 mb-4">
            {'<'} OPEN SOURCE INTEL {'/>'}
          </h2>
          <p className="text-gray-400 font-mono text-sm">CONTRIBUTION TIMELINE & IMPACT ANALYSIS</p>
          <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-red-500 mx-auto mt-4" />
        </div>

        <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'COMMITS', value: '1,842', icon: GitCommit, color: 'green' },
            { label: 'PULL REQUESTS', value: '234', icon: GitPullRequest, color: 'blue' },
            { label: 'ISSUES', value: '89', icon: AlertCircle, color: 'yellow' },
            { label: 'REPOSITORIES', value: '67', icon: Package, color: 'red' },
          ].map((stat, index) => (
            <div
              key={index}
              className={`bg-black/60 border-2 border-${stat.color}-500/30 rounded-lg p-4 text-center hover:border-${stat.color}-500 transition-all group`}
            >
              <stat.icon className={`w-6 h-6 text-${stat.color}-400 mb-2 mx-auto group-hover:animate-pulse`} />
              <div className={`text-2xl font-bold font-mono text-${stat.color}-400`}>{stat.value}</div>
              <div className="text-xs text-gray-500 font-mono mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-green-500 to-red-500" />

          <div className="space-y-8">
            {contributions.map((contrib, index) => {
              const Icon = typeIcons[contrib.type];
              const impactColor = impactColors[contrib.impact];
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={contrib.id}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8`}
                >
                  <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="group relative inline-block max-w-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-red-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-green-500/30 rounded-lg p-6 backdrop-blur-sm group-hover:border-green-500 transition-all">
                        <div className="flex items-center gap-2 mb-3">
                          <Icon className="w-5 h-5 text-green-400" />
                          <span className="text-green-400 font-mono text-sm font-bold">
                            {contrib.type}
                          </span>
                          <span className={`ml-auto px-2 py-1 bg-${impactColor}-600/20 border border-${impactColor}-500 rounded text-xs font-mono text-${impactColor}-400`}>
                            {contrib.impact}
                          </span>
                        </div>

                        <h3 className="text-white font-mono font-bold mb-2">
                          {contrib.repo}
                        </h3>

                        <p className="text-gray-400 text-sm mb-3">
                          {contrib.description}
                        </p>

                        <div className="text-xs text-gray-500 font-mono">
                          {new Date(contrib.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-4 md:left-1/2 w-4 h-4 -ml-2 bg-green-500 border-4 border-black rounded-full z-10 group-hover:animate-pulse" />

                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-gray-900 to-black border-2 border-green-500/30 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div>
              <h3 className="text-2xl font-bold font-mono text-green-400 mb-4">
                CONTRIBUTION HEATMAP
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Active contribution pattern across major open-source projects. Green zones indicate high-activity periods.
              </p>
              <div className="flex gap-2 text-xs font-mono text-gray-500">
                <span>Less</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className="w-3 h-3 rounded-sm"
                      style={{
                        backgroundColor: `rgba(34, 197, 94, ${level * 0.2})`,
                      }}
                    />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-1">
              {Array.from({ length: 365 }).map((_, index) => {
                const activity = Math.random();
                return (
                  <div
                    key={index}
                    className="w-3 h-3 rounded-sm hover:scale-150 transition-transform cursor-pointer"
                    style={{
                      backgroundColor:
                        activity > 0.8
                          ? 'rgb(34, 197, 94)'
                          : activity > 0.6
                          ? 'rgb(74, 222, 128)'
                          : activity > 0.4
                          ? 'rgb(134, 239, 172)'
                          : activity > 0.2
                          ? 'rgb(187, 247, 208)'
                          : 'rgb(31, 41, 55)',
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
