"use client";

import React, { useState } from "react";
import { Star, ChevronDown, Quote, Image as ImageIcon, ChevronUp } from "lucide-react";
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
    result: "25% increase in energy, optimized sleep patterns",
    progressImages: {
      vertical: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=600&fit=crop",
      horizontal: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=300&fit=crop"
    }
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
    result: "Personal best times, injury-free season",
    progressImages: {
      vertical: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=600&fit=crop"
    }
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
    result: "Lost 30lbs, gained lean muscle, improved focus",
    progressImages: {
      horizontal: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600&h=300&fit=crop"
    }
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
    result: "Top 10 world ranking, career-high earnings",
    progressImages: {
      vertical: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=600&fit=crop",
      horizontal: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=300&fit=crop"
    }
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
    result: "Championship title, 15-fight win streak",
    progressImages: {
      vertical: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300&h=600&fit=crop"
    }
  }
];

const categories = [
  { value: "all", label: "All Reviews" },
  { value: "executives", label: "Executives" },
  { value: "athletes", label: "Elite Athletes" },
];

export function Testimonials() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedTestimonials, setExpandedTestimonials] = useState<Set<number>>(new Set());
  const [imageOrientations, setImageOrientations] = useState<Record<number, 'vertical' | 'horizontal'>>({});
  
  const filteredTestimonials = selectedCategory === "all" 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === selectedCategory);

  const currentCategoryLabel = categories.find(cat => cat.value === selectedCategory)?.label || "All Reviews";

  // Helper function to check if testimonial has images
  const hasAnyImage = (testimonial: typeof testimonials[0]) => {
    return testimonial.progressImages && (testimonial.progressImages.vertical || testimonial.progressImages.horizontal);
  };

  // Helper function to check if testimonial has both orientations
  const hasBothOrientations = (testimonial: typeof testimonials[0]) => {
    return testimonial.progressImages && testimonial.progressImages.vertical && testimonial.progressImages.horizontal;
  };

  // Helper function to get default orientation
  const getDefaultOrientation = (testimonial: typeof testimonials[0]): 'vertical' | 'horizontal' => {
    if (!testimonial.progressImages) return 'vertical';
    if (testimonial.progressImages.vertical) return 'vertical';
    if (testimonial.progressImages.horizontal) return 'horizontal';
    return 'vertical';
  };

  const toggleTestimonialExpansion = (id: number) => {
    const testimonial = testimonials.find(t => t.id === id);
    if (!testimonial) return;

    const newExpanded = new Set(expandedTestimonials);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
      // Set default orientation based on what's available
      if (!imageOrientations[id]) {
        const defaultOrientation = getDefaultOrientation(testimonial);
        setImageOrientations(prev => ({ ...prev, [id]: defaultOrientation }));
      }
    }
    setExpandedTestimonials(newExpanded);
  };

  const changeImageOrientation = (id: number, orientation: 'vertical' | 'horizontal') => {
    setImageOrientations(prev => ({ ...prev, [id]: orientation }));
  };

  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-[#0a0a0f] to-[#18181b]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20 space-y-4">
          <div className="inline-block px-4 py-1 rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/5 text-[#00d4ff] text-xs lg:text-sm tracking-wider">
            CLIENT STORIES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight px-4">
            Proven Transformations
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base lg:text-lg px-4">
            Real results from elite performers who trusted us with their potential
          </p>
        </div>

        {/* Filter Dropdown */}
        <div className="flex justify-center mb-12 lg:mb-16 px-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="group inline-flex items-center gap-2 lg:gap-3 px-4 py-2 lg:px-6 lg:py-3 rounded-xl bg-gradient-to-r from-white/[0.08] to-white/[0.02] border border-white/[0.15] text-white hover:border-[#00d4ff]/30 transition-all duration-300 hover:bg-white/[0.12]">
                <span className="text-sm lg:text-base tracking-wide">{currentCategoryLabel}</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="center" 
              className="w-44 lg:w-48 bg-[#1a1a1f] border border-white/[0.15] rounded-xl p-2 mt-2"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredTestimonials.map((testimonial, index) => {
            const isExpanded = expandedTestimonials.has(testimonial.id);
            const currentOrientation = imageOrientations[testimonial.id] || getDefaultOrientation(testimonial);
            const hasImages = hasAnyImage(testimonial);
            const showBothOrientations = hasBothOrientations(testimonial);
            
            // Get the image to display
            const imageToShow = testimonial.progressImages && 
              testimonial.progressImages[currentOrientation] ? 
              testimonial.progressImages[currentOrientation] : 
              (testimonial.progressImages?.vertical || testimonial.progressImages?.horizontal);
            
            return (
              <div
                key={`${testimonial.id}-${selectedCategory}`}
                className="group relative"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Card */}
                <div className="relative h-full p-6 lg:p-8 rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/[0.08] hover:border-[#00d4ff]/30 transition-all duration-500 hover:scale-[1.02] backdrop-blur-xl">
                  
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#00d4ff]/0 to-[#00d4ff]/0 group-hover:from-[#00d4ff]/5 group-hover:to-transparent transition-all duration-500"></div>
                  
                  <div className="relative space-y-4 lg:space-y-6">
                    {/* Quote Icon and Image Toggle */}
                    <div className="flex justify-between items-start">
                      <Quote className="w-6 h-6 lg:w-8 lg:h-8 text-[#00d4ff]/60" />
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 text-[#00d4ff] fill-[#00d4ff]" />
                          ))}
                        </div>
                        {hasImages && (
                          <button
                            onClick={() => toggleTestimonialExpansion(testimonial.id)}
                            className="ml-2 p-1.5 lg:p-2 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20 hover:bg-[#00d4ff]/20 transition-colors duration-200"
                            title={isExpanded ? "Hide progress images" : "View progress images"}
                          >
                            {isExpanded ? (
                              <ChevronUp className="w-3 h-3 lg:w-4 lg:h-4 text-[#00d4ff]" />
                            ) : (
                              <ImageIcon className="w-3 h-3 lg:w-4 lg:h-4 text-[#00d4ff]" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-white/80 leading-relaxed text-base lg:text-lg italic">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Results Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20">
                      <div className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse"></div>
                      <span className="text-xs text-[#00d4ff] tracking-wide">{testimonial.result}</span>
                    </div>

                    {/* Progress Images Section */}
                    {hasImages && isExpanded && (
                      <div className="space-y-4 pt-4 border-t border-white/[0.08]">
                        {/* Image Orientation Selector - Only show if both orientations exist */}
                        {showBothOrientations && (
                          <div className="flex justify-center">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <button className="inline-flex items-center gap-2 px-3 py-2 lg:px-4 lg:py-2 rounded-lg bg-white/[0.05] border border-white/[0.10] text-white/80 hover:border-[#00d4ff]/30 transition-colors duration-200">
                                  <span className="text-xs lg:text-sm capitalize">{currentOrientation} View</span>
                                  <ChevronDown className="w-3 h-3" />
                                </button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent 
                                align="center" 
                                className="w-32 bg-[#1a1a1f] border border-white/[0.15] rounded-lg p-1"
                              >
                                <DropdownMenuItem
                                  onClick={() => changeImageOrientation(testimonial.id, 'vertical')}
                                  className="rounded-md px-2 py-1 text-sm text-white/80 hover:bg-[#00d4ff]/10 hover:text-[#00d4ff] transition-colors duration-200"
                                >
                                  📱 Vertical
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={() => changeImageOrientation(testimonial.id, 'horizontal')}
                                  className="rounded-md px-2 py-1 text-sm text-white/80 hover:bg-[#00d4ff]/10 hover:text-[#00d4ff] transition-colors duration-200"
                                >
                                  📲 Horizontal
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        )}

                        {/* Progress Image */}
                        {imageToShow && (
                          <div className="flex justify-center px-2">
                            <div className={`relative rounded-lg overflow-hidden border-2 border-[#00d4ff]/30 ${
                              currentOrientation === 'vertical' 
                                ? 'w-32 h-56 sm:w-40 sm:h-72 lg:w-48 lg:h-80' // Responsive iPhone portrait
                                : 'w-56 h-32 sm:w-72 sm:h-40 lg:w-80 lg:h-48' // Responsive iPhone landscape
                            }`}>
                              <img 
                                src={imageToShow}
                                alt={`${testimonial.name} progress - ${currentOrientation}`}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/20 via-transparent to-transparent"></div>
                              {/* iPhone-style notch simulation for vertical */}
                              {currentOrientation === 'vertical' && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 lg:w-20 lg:h-6 bg-black rounded-b-xl lg:rounded-b-2xl"></div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Profile */}
                    <div className="flex items-center gap-3 lg:gap-4 pt-4 border-t border-white/[0.08]">
                      <div className="relative">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover border-2 border-[#00d4ff]/30"
                        />
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 lg:w-4 lg:h-4 bg-[#00d4ff] rounded-full border-2 border-[#0a0a0f] flex items-center justify-center">
                          <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-white font-medium text-sm lg:text-base">{testimonial.name}</div>
                        <div className="text-white/50 text-xs lg:text-sm">{testimonial.role}</div>
                        <div className="text-[#00d4ff] text-xs tracking-wider">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mt-16 lg:mt-20 pt-12 lg:pt-16 border-t border-white/[0.08]">
          <div className="text-center space-y-1 lg:space-y-2">
            <div className="text-2xl md:text-3xl lg:text-4xl text-white tracking-tight">4.9/5</div>
            <div className="text-xs lg:text-sm text-white/50 tracking-wide">Average Rating</div>
          </div>
          <div className="text-center space-y-1 lg:space-y-2">
            <div className="text-2xl md:text-3xl lg:text-4xl text-white tracking-tight">500+</div>
            <div className="text-xs lg:text-sm text-white/50 tracking-wide">Success Stories</div>
          </div>
          <div className="text-center space-y-1 lg:space-y-2">
            <div className="text-2xl md:text-3xl lg:text-4xl text-white tracking-tight">98%</div>
            <div className="text-xs lg:text-sm text-white/50 tracking-wide">Client Retention</div>
          </div>
          <div className="text-center space-y-1 lg:space-y-2">
            <div className="text-2xl md:text-3xl lg:text-4xl text-white tracking-tight">3 Months</div>
            <div className="text-xs lg:text-sm text-white/50 tracking-wide">Avg. Goal Achievement</div>
          </div>
        </div>
      </div>
    </section>
  );
}
