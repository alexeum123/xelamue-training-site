import { Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 px-6 md:px-12 bg-[#0a0a0f] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#00ff88]"></div>
              <span className="text-xl text-white tracking-tight">XELAMUE</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Elite training for elite performers. Transform your potential into reality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#benefits" className="text-white/50 hover:text-[#00d4ff] transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/50 hover:text-[#00d4ff] transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-[#00d4ff] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-[#00d4ff] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-white/50 hover:text-[#00d4ff] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-[#00d4ff] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-[#00d4ff] transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/30 hover:text-[#00d4ff] transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/30 hover:text-[#00d4ff] transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/30 hover:text-[#00d4ff] transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2026 XELAMUE Training. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Not intended for collecting PII or securing sensitive data.
          </p>
        </div>
      </div>
    </footer>
  );
}
