import type { Metadata } from "next"
import { Check, Star, Zap, TrendingUp, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "iGCT Pricing Plans - Transparent Cloud Telephony Pricing | Mitchjolly Solutions",
  description:
    "Choose from Starter, Professional, or Enterprise iGCT plans. Transparent pricing for cloud telephony solutions with no hidden fees.",
  keywords: "cloud telephony pricing, iGCT plans, enterprise telephony costs, SaaS pricing",
}

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams getting started with cloud telephony",
      features: [
        "Up to 5 users",
        "1,000 minutes included",
        "Basic call routing",
        "SMS messaging",
        "Email support",
        "Basic analytics",
        "Mobile app access",
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial",
      popular: false,
      icon: Zap,
      color: "#6d6521",
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing sales teams with advanced needs",
      features: [
        "Up to 25 users",
        "5,000 minutes included",
        "Advanced call routing",
        "VoiceBot integration",
        "Number masking",
        "Advanced analytics",
        "Priority support",
        "CRM integrations",
        "Call recording",
        "WhatsApp Bot",
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial",
      popular: true,
      icon: TrendingUp,
      color: "#ff5dde",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited users",
        "Custom minute packages",
        "Dedicated infrastructure",
        "Custom integrations",
        "Advanced security",
        "Dedicated support",
        "SLA guarantees",
        "Custom reporting",
        "API access",
        "White-label options",
      ],
      cta: "Get Custom Quote",
      ctaLink: "https://salescentri.com/pricing/enterprise-custom",
      popular: false,
      icon: Shield,
      color: "#0b439c",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="cosmic-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/10 rounded-full floating-animation"></div>
          <div
            className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/5 rounded-full floating-animation"
            style={{ animationDelay: "3s" }}
          ></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-white/5 rounded-full rotate-slow"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              <span className="text-shimmer">Simple, Transparent Pricing</span>
            </h1>
            <p
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Choose the perfect plan for your team. No hidden fees, no surprises.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <a
                href="https://salescentri.com/pricing/plans-overview"
                className="cta-button text-lg px-8 py-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Plans
              </a>
              <a
                href="https://salescentri.com/pricing"
                className="cta-button text-lg px-8 py-4 pulse-glow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg p-8 relative card-hover group animate-scale-up ${
                  plan.popular ? "ring-2 ring-[#ff5dde] transform scale-105" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
                    <div className="bg-[#ff5dde] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center pulse-glow">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="mb-4">
                    <plan.icon
                      className="h-12 w-12 mx-auto transition-all duration-500 group-hover:scale-125 group-hover:rotate-12"
                      style={{ color: plan.color }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#ff5dde]">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold transition-all duration-300 group-hover:scale-110 inline-block">
                      {plan.price}
                    </span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center animate-slide-in-left"
                      style={{ animationDelay: `${index * 0.2 + featureIndex * 0.05}s` }}
                    >
                      <Check className="h-5 w-5 text-green-500 mr-3 transition-all duration-300 group-hover:scale-110" />
                      <span className="transition-colors duration-300 group-hover:text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.ctaLink}
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-500 ${
                    plan.popular
                      ? "bg-[#ff5dde] text-white hover:bg-[#e54cc9] hover:scale-105 pulse-glow"
                      : "cta-button hover:scale-105"
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 cosmic-text-gradient">
              Compare All Features
            </h2>
            <p className="text-xl text-gray-600">See what's included in each plan</p>
          </div>

          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Features</th>
                    <th className="px-6 py-4 text-center font-semibold">Starter</th>
                    <th className="px-6 py-4 text-center font-semibold">Professional</th>
                    <th className="px-6 py-4 text-center font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: "Users", starter: "Up to 5", professional: "Up to 25", enterprise: "Unlimited" },
                    { feature: "Monthly Minutes", starter: "1,000", professional: "5,000", enterprise: "Custom" },
                    { feature: "VoiceBot", starter: "❌", professional: "✅", enterprise: "✅" },
                    { feature: "Advanced Analytics", starter: "❌", professional: "✅", enterprise: "✅" },
                    { feature: "API Access", starter: "❌", professional: "❌", enterprise: "✅" },
                    { feature: "Dedicated Support", starter: "❌", professional: "❌", enterprise: "✅" },
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className="animate-slide-in-left hover:bg-gray-50 transition-colors duration-300"
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                      <td className="px-6 py-4 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-center">{row.starter}</td>
                      <td className="px-6 py-4 text-center">{row.professional}</td>
                      <td className="px-6 py-4 text-center">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 cosmic-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/10 rounded-full floating-animation"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/5 rounded-full floating-animation"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">Ready to Get Started?</h2>
          <p className="text-xl mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Try iGCT risk-free for 14 days. No credit card required.
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
              href="https://salescentri.com/pricing/enterprise-custom"
              className="cta-button text-lg px-8 py-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Custom Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
