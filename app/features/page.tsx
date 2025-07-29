import type { Metadata } from "next"
import { Phone, MessageSquare, Shield, Globe, BarChart3, Users, Zap, Settings, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "iGCT Features - Advanced Cloud Telephony Capabilities | Mitchjolly Solutions",
  description:
    "Explore iGCT's powerful features: Global SIP trunking, VoiceBot, SMS, number masking, call routing & analytics for enterprise sales teams.",
  keywords: "SIP trunking, VoiceBot, SMS, call routing, call analytics, number masking, cloud telephony features",
}

export default function FeaturesPage() {
  const features = [
    {
      icon: Globe,
      title: "Global SIP Trunking",
      description:
        "Connect to customers worldwide with our robust SIP trunking infrastructure spanning 150+ countries.",
      color: "text-[#ff5dde]",
      bgColor: "bg-[#ff5dde]",
    },
    {
      icon: Phone,
      title: "VoiceBot Technology",
      description: "Automated voice responses and intelligent call handling to streamline your customer interactions.",
      color: "text-[#0b439c]",
      bgColor: "bg-[#0b439c]",
    },
    {
      icon: MessageSquare,
      title: "SMS & Messaging",
      description: "Integrated SMS campaigns and messaging capabilities for multi-channel communication.",
      color: "text-[#d48c41]",
      bgColor: "bg-[#d48c41]",
    },
    {
      icon: Shield,
      title: "Number Masking",
      description: "Protect privacy and maintain professionalism with dynamic number masking technology.",
      color: "text-[#6d6521]",
      bgColor: "bg-[#6d6521]",
    },
    {
      icon: Settings,
      title: "Smart Call Routing",
      description: "Intelligent routing based on location, time zones, and agent availability for optimal connections.",
      color: "text-[#ff5dde]",
      bgColor: "bg-[#ff5dde]",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time insights, performance metrics, and detailed reporting for data-driven decisions.",
      color: "text-[#0b439c]",
      bgColor: "bg-[#0b439c]",
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Comprehensive team management tools with role-based access and performance tracking.",
      color: "text-[#d48c41]",
      bgColor: "bg-[#d48c41]",
    },
    {
      icon: Zap,
      title: "API Integration",
      description: "Seamless integration with your existing CRM and business tools through our robust API.",
      color: "text-[#6d6521]",
      bgColor: "bg-[#6d6521]",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="cosmic-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full floating-animation"></div>
          <div
            className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full floating-animation"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              <span className="text-shimmer">iGCT Capabilities</span>
            </h1>
            <p
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Comprehensive cloud telephony features designed for enterprise sales teams
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg card-hover group relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-transparent to-gray-50 rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32"></div>
                <feature.icon
                  className={`h-12 w-12 ${feature.color} mb-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 relative z-10`}
                />
                <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-[#ff5dde] relative z-10">
                  {feature.title}
                </h3>
                <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-800 relative z-10">
                  {feature.description}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 relative z-10">
                  <ArrowRight className="h-5 w-5 text-[#ff5dde]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Advanced Tools Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 cosmic-text-gradient">
              Advanced Communication Tools
            </h2>
            <p className="text-xl text-gray-600">Take your sales communications to the next level</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: "Voice AI Agent",
                description: "Intelligent voice agents that handle customer inquiries and qualify leads automatically.",
                link: "https://salescentri.com/platforms/lead-management/voice-ai-agent",
                color: "#ff5dde",
                delay: "0s",
              },
              {
                icon: MessageSquare,
                title: "WhatsApp Bot",
                description: "Automated WhatsApp messaging for customer support and lead nurturing.",
                link: "https://salescentri.com/platforms/lead-management/whatsapp-bot",
                color: "#0b439c",
                delay: "0.2s",
              },
              {
                icon: Zap,
                title: "Cloud Dialer",
                description: "Automated cloud dialing system with predictive algorithms and call optimization.",
                link: "https://salescentri.com/platforms/lead-management/automated-cloud-dialer",
                color: "#d48c41",
                delay: "0.4s",
              },
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg text-center card-hover group animate-scale-up"
                style={{ animationDelay: tool.delay }}
              >
                <div
                  className="text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 pulse-glow"
                  style={{ backgroundColor: tool.color }}
                >
                  <tool.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-[#ff5dde]">
                  {tool.title}
                </h3>
                <p className="text-gray-600 mb-6 transition-all duration-300 group-hover:text-gray-800">
                  {tool.description}
                </p>
                <a
                  href={tool.link}
                  className="cta-button group-hover:scale-105 transition-transform duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 cosmic-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/10 rounded-full floating-animation"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/5 rounded-full floating-animation"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Start your free trial today and see how iGCT can transform your sales communications.
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
              href="https://salescentri.com/get-started/book-demo"
              className="cta-button text-lg px-8 py-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
