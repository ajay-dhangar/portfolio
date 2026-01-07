import { useState } from 'react';
import { Code, Shield, Wrench, ChevronRight } from 'lucide-react';
import { skills } from '../data/portfolio';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categoryIcons = {
    Programming: Code,
    'Cyber Security': Shield,
    'Tools & Arsenal': Wrench,
  };

  return (
    <section className="relative py-24 overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-20" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-400 mb-4">
            {'<'} SKILLS MATRIX {'/>'}
          </h2>
          <p className="text-gray-400 font-mono text-sm">EXPERTISE LEVEL VISUALIZATION</p>
          <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-red-500 mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => {
            const Icon = categoryIcons[category.category as keyof typeof categoryIcons];
            return (
              <div
                key={categoryIndex}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-green-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-red-500/30 rounded-lg overflow-hidden backdrop-blur-sm group-hover:border-red-500 transition-all">
                  <div className="bg-red-600/20 border-b-2 border-red-500/30 px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-red-400" />
                      <h3 className="text-xl font-bold font-mono text-red-400">
                        {category.category.toUpperCase()}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    {category.items.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="relative"
                        onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-green-500" />
                            <span className="text-gray-300 font-mono text-sm font-semibold">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-green-400 font-mono text-sm font-bold">
                            {skill.level}%
                          </span>
                        </div>

                        <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden border border-green-500/20">
                          <div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full transition-all duration-1000"
                            style={{
                              width: `${skill.level}%`,
                              animation: 'pulse 2s ease-in-out infinite',
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                        </div>

                        {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                          <div className="mt-2 p-3 bg-black/80 border border-green-500/30 rounded text-xs text-green-400 font-mono animate-fadeIn">
                            <span className="text-red-400">&gt;&gt;</span> {skill.description}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-transparent rounded-bl-full opacity-50" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-500/10 to-transparent rounded-tr-full opacity-50" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'MASTERED', count: 8, color: 'green' },
            { label: 'ADVANCED', count: 7, color: 'yellow' },
            { label: 'PROFICIENT', count: 5, color: 'orange' },
            { label: 'LEARNING', count: 3, color: 'red' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-black/60 border-2 border-gray-700 rounded-lg p-4 text-center hover:border-green-500 transition-all group"
            >
              <div className={`text-3xl font-bold font-mono text-${stat.color}-400 group-hover:animate-pulse`}>
                {stat.count}
              </div>
              <div className="text-xs text-gray-500 font-mono mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
