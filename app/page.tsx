"use client"

import { useEffect, useRef } from "react"
import { Globe, Shield, Zap, TrendingUp, Star, CheckCircle, ArrowRight } from "lucide-react"

export default function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Enhanced intersection observer for multiple animation types
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(
      ".scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale-up",
    )
    elements.forEach((el) => observerRef.current?.observe(el))

    // Stagger animation delays
    const staggerElements = document.querySelectorAll(".stagger-animation")
    staggerElements.forEach((el, index) => {
      ;(el as HTMLElement).style.setProperty("--stagger-delay", `${index * 0.2}s`)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section ref={heroRef} className="cosmic-gradient text-white py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full floating-animation"></div>
          <div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full floating-animation"
            style={{ animationDelay: "2s" }}
          ></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full rotate-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              <span className="block">Global Cloud Telephony</span>
              <span className="block text-shimmer">That Scales With You</span>
            </h1>
            <p
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              iGCT by Mitchjolly connects you worldwide through reliable, cloud-powered voice.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <a
                href="https://salescentri.com/get-started/free-trial"
                className="cta-button text-lg px-8 py-4 pulse-glow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Free Trial
              </a>
              <a
                href="https://salescentri.com/get-started/book-demo"
                className="cta-button text-lg px-8 py-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Demo
              </a>
            </div>
            <div className="mt-8 animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
              <a
                href="https://salescentri.com/solutions/use-case-navigator/recommendations"
                className="inline-flex items-center text-white hover:text-[#faf41b] transition-all duration-300 text-lg font-semibold group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TrendingUp className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                Try Our ROI Calculator
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Overview */}
      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 cosmic-text-gradient">Why Choose iGCT?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade cloud telephony solutions designed for global sales teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Reach",
                description: "Connect with customers worldwide through our global SIP trunking network",
                color: "text-[#ff5dde]",
                delay: "0s",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "ISO-certified security with end-to-end encryption for all communications",
                color: "text-[#0b439c]",
                delay: "0.2s",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Sub-second call routing with 99.9% uptime guarantee",
                color: "text-[#d48c41]",
                delay: "0.4s",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg card-hover scroll-scale-up stagger-animation group"
                style={{ animationDelay: feature.delay }}
              >
                <feature.icon
                  className={`h-12 w-12 ${feature.color} mx-auto mb-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12`}
                />
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-[#ff5dde]">
                  {feature.title}
                </h3>
                <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-800">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Sales Teams
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-slide-left">
              <h3 className="text-2xl font-bold mb-6">Advanced Communication Tools</h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "VoiceBot & SMS:",
                    description: "Automated voice responses and SMS campaigns",
                  },
                  {
                    title: "Number Masking:",
                    description: "Protect privacy with dynamic number masking",
                  },
                  {
                    title: "Call Analytics:",
                    description: "Real-time insights and performance metrics",
                  },
                  {
                    title: "Smart Routing:",
                    description: "Intelligent call routing based on location and availability",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start group animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 transition-all duration-300 group-hover:scale-110" />
                    <div>
                      <strong className="transition-colors duration-300 group-hover:text-[#ff5dde]">
                        {item.title}
                      </strong>{" "}
                      {item.description}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-4">
                {[
                  {
                    href: "https://salescentri.com/platforms/lead-management/voice-ai-agent",
                    text: "Explore Voice AI Agent",
                  },
                  { href: "https://salescentri.com/platforms/lead-management/whatsapp-bot", text: "Try WhatsApp Bot" },
                  {
                    href: "https://salescentri.com/platforms/lead-management/automated-cloud-dialer",
                    text: "Cloud Dialer Demo",
                  },
                ].map((button, index) => (
                  <a
                    key={index}
                    href={button.href}
                    className="block w-full sm:w-auto cta-button text-center animate-slide-in-left"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {button.text}
                  </a>
                ))}
              </div>
            </div>

            <div className="scroll-slide-right">
              <div className="bg-gradient-to-br from-[#ff5dde] to-[#0b439c] p-8 rounded-lg text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 floating-animation"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Ready to Scale?</h3>
                <p className="mb-6 relative z-10">
                  Join thousands of sales teams already using iGCT to boost their global outreach.
                </p>
                <div className="flex items-center space-x-4 mb-6 relative z-10">
                  {[
                    { value: "99.9%", label: "Uptime" },
                    { value: "150+", label: "Countries" },
                    { value: "24/7", label: "Support" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div
                        className="text-3xl font-bold transition-all duration-300 group-hover:scale-110 bounce-subtle"
                        style={{ animationDelay: `${index * 0.5}s` }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <a
                  href="https://salescentri.com/get-started/book-demo"
                  className="cta-button w-full text-center block relative z-10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Your Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Sales Leaders Worldwide</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "iGCT transformed our global sales operations. The call quality is exceptional and the analytics help us optimize our outreach.",
                author: "Sarah Johnson",
                role: "VP Sales, TechCorp",
              },
              {
                text: "The ROI was immediate. We reduced our communication costs by 40% while improving our global reach.",
                author: "Michael Chen",
                role: "Director, Global Sales",
              },
              {
                text: "Outstanding support and reliability. Our team can focus on selling instead of worrying about technical issues.",
                author: "Emily Rodriguez",
                role: "Sales Manager, StartupXYZ",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg card-hover scroll-scale-up stagger-animation group"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current transition-all duration-300 group-hover:scale-110"
                      style={{ transitionDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 transition-colors duration-300 group-hover:text-gray-800">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold transition-colors duration-300 group-hover:text-[#ff5dde]">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 cosmic-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full floating-animation"></div>
          <div
            className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full floating-animation"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            Ready to Transform Your Sales Communications?
          </h2>
          <p className="text-xl mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Join thousands of companies already using iGCT to scale their global outreach.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="https://salescentri.com/get-started/free-trial"
              className="cta-button text-lg px-8 py-4 pulse-glow"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Free Trial
            </a>
            <a
              href="https://salescentri.com/pricing"
              className="cta-button text-lg px-8 py-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
