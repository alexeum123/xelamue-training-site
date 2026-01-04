import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1700784795176-7ff886439d79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZml0bmVzcyUyMHRyYWluaW5nJTIwZGFya3xlbnwxfHx8fDE3Njc0OTQwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Premium Training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/95 via-[#0a0a0f]/85 to-[#0a0a0f]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 text-center">
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse"></div>
            <span className="text-sm tracking-wide text-[#00d4ff]">Elite Performance Training</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
            <span className="block text-white/95">Transform Your</span>
            <span className="block mt-2 bg-gradient-to-r from-white via-[#00d4ff] to-white bg-clip-text text-transparent">
              Potential
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            A private training experience designed for high-performing individuals who demand excellence.
            Results-driven. Data-backed. Transformative.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="#pricing"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#00d4ff] text-[#0a0a0f] rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,212,255,0.4)]"
            >
              <span className="relative z-10">Start Training</span>
              <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] to-[#00ff88] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#benefits"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white/90 rounded-lg hover:bg-white/5 transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            <div className="text-center space-y-1">
              <div className="text-3xl md:text-4xl text-white">500+</div>
              <div className="text-sm text-white/50 tracking-wide">Elite Athletes</div>
            </div>
            <div className="text-center space-y-1 border-x border-white/10">
              <div className="text-3xl md:text-4xl text-white">98%</div>
              <div className="text-sm text-white/50 tracking-wide">Success Rate</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-3xl md:text-4xl text-white">24/7</div>
              <div className="text-sm text-white/50 tracking-wide">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
