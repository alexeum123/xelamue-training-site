import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.05]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#00ff88] group-hover:scale-110 transition-transform duration-300"></div>
            <span className="text-xl text-white tracking-tight">Xelamue</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#benefits"
              className="text-white/70 hover:text-white transition-colors duration-200"
            >
              Benefits
            </a>
            <a
              href="#pricing"
              className="text-white/70 hover:text-white transition-colors duration-200"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#pricing"
              className="px-6 py-2.5 bg-[#00d4ff] text-[#0a0a0f] rounded-lg hover:bg-[#00ff88] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/[0.05] bg-[#0a0a0f]/95 backdrop-blur-xl">
            <div className="flex flex-col gap-4">
              <a
                href="#benefits"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/70 hover:text-white transition-colors py-2"
              >
                Benefits
              </a>
              <a
                href="#pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/70 hover:text-white transition-colors py-2"
              >
                Pricing
              </a>
              <a
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/70 hover:text-white transition-colors py-2"
              >
                About
              </a>
              <a
                href="#pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 px-6 py-3 bg-[#00d4ff] text-[#0a0a0f] rounded-lg hover:bg-[#00ff88] transition-colors text-center"
              >
                Join Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
