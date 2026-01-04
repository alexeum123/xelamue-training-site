import { Target, Brain, Zap, Trophy } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Precision Programming",
    description: "Custom-tailored training protocols built around your unique physiology and goals.",
  },
  {
    icon: Brain,
    title: "Data-Driven Methodology",
    description: "Real-time performance tracking and AI-powered insights to optimize every session.",
  },
  {
    icon: Zap,
    title: "Peak Performance",
    description: "Advanced recovery protocols and nutrition optimization for sustained excellence.",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "Join elite performers who've achieved extraordinary transformations.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-32 px-6 md:px-12 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block px-4 py-1 rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/5 text-[#00d4ff] text-sm tracking-wider">
            WHY CHOOSE US
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
            Built for Excellence
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Every detail engineered for maximum performance and sustainable growth
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] hover:border-[#00d4ff]/30 transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#00d4ff]/0 to-[#00d4ff]/0 group-hover:from-[#00d4ff]/5 group-hover:to-transparent transition-all duration-500"></div>
                
                <div className="relative space-y-4">
                  <div className="inline-flex p-3 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 group-hover:bg-[#00d4ff]/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#00d4ff]" />
                  </div>
                  <h3 className="text-xl text-white">{benefit.title}</h3>
                  <p className="text-white/50 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="mt-32 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>
    </section>
  );
}
