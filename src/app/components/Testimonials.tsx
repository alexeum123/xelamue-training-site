"use client";

import { useState } from "react";
import { Star, ChevronDown, Quote } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const testimonials = [
  {
    id: 1,
    name: "Marcus Chen",
    role: "Tech Entrepreneur",
    category: "executives",
    company: "TechFlow Inc.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The precision and personalization exceeded every expectation. In 12 weeks, I achieved results that eluded me for years. This isn't just training—it's transformation.",
    result: "25% increase in energy, optimized sleep patterns"
  },
  {
    id: 2,
    name: "Sarah Rodriguez",
    role: "Olympic Swimmer",
    category: "athletes",
    company: "Team USA",
    image: "https://images.unsplash.com/photo-1494790108755-2616c6106900?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Working with this team elevated my performance to new heights. The data-driven approach and recovery protocols were game-changing for my Olympic preparation.",
    result: "Personal best times, injury-free season"
  },
  {
    id: 3,
    name: "James Mitchell",
    role: "Investment Banker",
    category: "executives",
    company: "Goldman Sachs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Despite 80-hour work weeks, I've never felt stronger or more focused. The efficiency of each session is remarkable—maximum results in minimal time.",
    result: "Lost 30lbs, gained lean muscle, improved focus"
  },
  {
    id: 4,
    name: "Elena Vasquez",
    role: "Professional Tennis Player",
    category: "athletes",
    company: "WTA Tour",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The mental and physical conditioning here is unmatched. Every aspect is optimized for peak performance—from nutrition to recovery to mindset training.",
    result: "Top 10 world ranking, career-high earnings"
  },
  {
    id: 5,
    name: "David Thompson",
    role: "Startup Founder",
    category: "executives",
    company: "InnovateLabs",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The holistic approach transformed not just my physique, but my entire lifestyle. Better sleep, clearer thinking, and boundless energy to tackle any challenge.",
    result: "Improved productivity, better work-life balance"
  },
  {
    id: 6,
    name: "Alex Martinez",
    role: "MMA Fighter",
    category: "athletes",
    company: "UFC",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "This program pushed me beyond limits I didn't know existed. The scientific approach to strength, conditioning, and recovery gave me the edge I needed.",
    result: "Championship title, 15-fight win streak"
  }
];

const categories = [
  { value: "all", label: "All Reviews" },
  { value: "executives", label: "Executives" },
  { value: "athletes", label: "Elite Athletes" },
];

export function Testimonials() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const filteredTestimonials = selectedCategory === "all" 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === selectedCategory);

  const currentCategoryLabel = categories.find(cat => cat.value === selectedCategory)?.label || "All Reviews";

  return (
    <section className="py-32 px-6 md:px-12 bg-gradient-to-b from-[#0a0a0f] to-[#18181b]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block px-4 py-1 rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/5 text-[#00d4ff] text-sm tracking-wider">
            CLIENT STORIES
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
            Proven Transformations
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Real results from elite performers who trusted us with their potential
          </p>
        </div>

        {/* Filter Dropdown */}
        <div className="flex justify-center mb-16">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-white/[0.08] to-white/[0.02] border border-white/[0.15] text-white hover:border-[#00d4ff]/30 transition-all duration-300 hover:bg-white/[0.12]">
                <span className="text-sm tracking-wide">{currentCategoryLabel}</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="center" 
              className="w-48 bg-[#1a1a1f] border border-white/[0.15] rounded-xl p-2 mt-2"
            >
              {categories.map((category) => (
                <DropdownMenuItem
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className="rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-[#00d4ff]/10 hover:text-[#00d4ff] focus:bg-[#00d4ff]/10 focus:text-[#00d4ff] transition-colors duration-200"
                >
                  {category.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${selectedCategory}`}
              className="group relative"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/[0.08] hover:border-[#00d4ff]/30 transition-all duration-500 hover:scale-[1.02] backdrop-blur-xl">
                
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#00d4ff]/0 to-[#00d4ff]/0 group-hover:from-[#00d4ff]/5 group-hover:to-transparent transition-all duration-500"></div>
                
                <div className="relative space-y-6">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start">
                    <Quote className="w-8 h-8 text-[#00d4ff]/60" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#00d4ff] fill-[#00d4ff]" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-white/80 leading-relaxed text-lg italic">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Results Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20">
                    <div className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse"></div>
                    <span className="text-xs text-[#00d4ff] tracking-wide">{testimonial.result}</span>
                  </div>

                  {/* Profile */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/[0.08]">
                    <div className="relative">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#00d4ff]/30"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#00d4ff] rounded-full border-2 border-[#0a0a0f] flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-white font-medium">{testimonial.name}</div>
                      <div className="text-white/50 text-sm">{testimonial.role}</div>
                      <div className="text-[#00d4ff] text-xs tracking-wider">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-white/[0.08]">
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl text-white tracking-tight">4.9/5</div>
            <div className="text-sm text-white/50 tracking-wide">Average Rating</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl text-white tracking-tight">500+</div>
            <div className="text-sm text-white/50 tracking-wide">Success Stories</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl text-white tracking-tight">98%</div>
            <div className="text-sm text-white/50 tracking-wide">Client Retention</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl text-white tracking-tight">3 Months</div>
            <div className="text-sm text-white/50 tracking-wide">Avg. Goal Achievement</div>
          </div>
        </div>
      </div>
    </section>
  );
}
