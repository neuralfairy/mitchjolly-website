import Link from "next/link"
import { Phone, MapPin, ArrowRight, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full floating-animation"></div>
        <div
          className="absolute bottom-10 left-10 w-20 h-20 bg-white/10 rounded-full floating-animation"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 animate-slide-in-left">
            <div className="flex items-center space-x-2 mb-4 group">
              <Phone className="h-8 w-8 text-[#ff5dde] transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
              <span className="text-xl font-bold transition-colors duration-300 group-hover:text-[#ff5dde]">
                Mitchjolly Solutions
              </span>
            </div>
            <p className="text-gray-300 mb-4 transition-colors duration-300 hover:text-white">
              Global cloud telephony provider offering scalable voice and calling solutions for enterprise sales teams.
            </p>
            <div className="flex items-center space-x-2 text-gray-300 group">
              <MapPin className="h-4 w-4 transition-all duration-300 group-hover:scale-110" />
              <span className="transition-colors duration-300 group-hover:text-white">Tucson, AZ</span>
            </div>
          </div>

          <div className="animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-semibold mb-4 cosmic-text-gradient">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/features", label: "Features" },
                { href: "/pricing", label: "Pricing" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
                { href: "/faq", label: "FAQ" },
              ].map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#ff5dde] transition-all duration-300 flex items-center group animate-fade-in-up"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-slide-in-left" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-lg font-semibold mb-4 cosmic-text-gradient">Resources</h3>
            <ul className="space-y-2">
              {[
                { href: "https://salescentri.com/resources/case-studies", label: "Case Studies" },
                { href: "https://salescentri.com/resources/whitepapers-ebooks", label: "Download Guide" },
                { href: "https://salescentri.com/docs/api-reference", label: "API Reference" },
                { href: "https://salescentri.com/docs/user-guide", label: "User Guide" },
              ].map((link, index) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#ff5dde] transition-all duration-300 flex items-center group animate-fade-in-up"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 group-hover:translate-x-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 animate-fade-in-up" style={{ animationDelay: "1s" }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link
                href="/privacy"
                className="text-gray-300 hover:text-[#ff5dde] transition-all duration-300 hover:scale-105"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-300 hover:text-[#ff5dde] transition-all duration-300 hover:scale-105"
              >
                Terms of Service
              </Link>
            </div>
            <div className="text-gray-300 text-sm">
              <a
                href="https://salescentri.com?utm_source=mitchjolly.com&utm_medium=footer&utm_campaign=partner_network"
                className="hover:text-[#ff5dde] transition-all duration-300 hover:scale-105 inline-flex items-center group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Powered by Sales Intelligence Platform</span>
                <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </a>
            </div>
          </div>
          <div className="text-center text-gray-400 text-sm mt-4 animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
            © 2024 Mitchjolly Solutions. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
