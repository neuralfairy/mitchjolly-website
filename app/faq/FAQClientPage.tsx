"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

const faqData = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "What is iGCT and how does it work?",
        answer:
          "iGCT (Integrated Global Cloud Telephony) is our comprehensive cloud-based communication platform that enables businesses to make and receive calls globally through the internet. It works by routing your calls through our secure cloud infrastructure, eliminating the need for traditional phone lines while providing advanced features like call analytics, routing, and integration capabilities.",
      },
      {
        question: "How quickly can I get started with iGCT?",
        answer:
          "You can be up and running with iGCT in as little as 15 minutes. Simply sign up for your free trial, configure your settings through our intuitive dashboard, and start making calls. Our onboarding team is available to help with setup and integration if needed.",
      },
      {
        question: "Do I need special hardware or software?",
        answer:
          "No special hardware is required. iGCT works with any internet-connected device including computers, smartphones, and tablets. You can use our web application, mobile apps, or integrate with your existing business tools through our API.",
      },
    ],
  },
  {
    category: "Features & Capabilities",
    questions: [
      {
        question: "What countries does iGCT support?",
        answer:
          "iGCT supports calling to and from over 150 countries worldwide. Our global SIP trunking network ensures high-quality connections with local presence in major markets. Contact our team for specific country availability and local number options.",
      },
      {
        question: "Can I integrate iGCT with my existing CRM?",
        answer:
          "Yes, iGCT offers robust integration capabilities with popular CRM systems including Salesforce, HubSpot, Pipedrive, and many others. Our API allows for custom integrations, and our team can help with setup and configuration.",
      },
      {
        question: "What analytics and reporting features are available?",
        answer:
          "iGCT provides comprehensive analytics including call volume, duration, success rates, geographic distribution, agent performance metrics, and ROI tracking. Professional and Enterprise plans include advanced reporting with custom dashboards and automated reports.",
      },
    ],
  },
  {
    category: "Compliance & Security",
    questions: [
      {
        question: "Is iGCT compliant with international regulations?",
        answer:
          "Yes, iGCT is designed to meet international compliance standards including GDPR, HIPAA, SOC 2, and various telecommunications regulations. We maintain certifications and regularly audit our systems to ensure ongoing compliance across all supported regions.",
      },
      {
        question: "How secure are my calls and data?",
        answer:
          "Security is our top priority. All calls are encrypted end-to-end using industry-standard protocols. Our infrastructure is ISO 27001 certified, and we employ multiple layers of security including network firewalls, intrusion detection, and regular security audits.",
      },
      {
        question: "Where is my data stored and who has access?",
        answer:
          "Your data is stored in secure, geographically distributed data centers with strict access controls. Only authorized personnel have access to systems, and all access is logged and monitored. You maintain full ownership of your data and can request deletion at any time.",
      },
    ],
  },
  {
    category: "Pricing & Plans",
    questions: [
      {
        question: "What's included in the free trial?",
        answer:
          "Our 14-day free trial includes full access to Professional plan features with 100 minutes of calling credit. No credit card is required to start, and you can upgrade or cancel at any time during the trial period.",
      },
      {
        question: "Are there any setup fees or hidden costs?",
        answer:
          "No, there are no setup fees or hidden costs. Our pricing is transparent with all features clearly outlined for each plan. You only pay for what you use, and we provide detailed billing with no surprises.",
      },
      {
        question: "Can I change my plan at any time?",
        answer:
          "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated. Our team can help you choose the right plan based on your usage patterns and requirements.",
      },
    ],
  },
  {
    category: "Technical Support",
    questions: [
      {
        question: "What support options are available?",
        answer:
          "We offer multiple support channels including live chat, email support, phone support (for Professional and Enterprise plans), and a comprehensive knowledge base. Enterprise customers receive dedicated support with guaranteed response times.",
      },
      {
        question: "What are your support hours?",
        answer:
          "Live chat and email support are available 24/7. Phone support is available during business hours for Professional plans and 24/7 for Enterprise customers. Our knowledge base and documentation are always accessible.",
      },
      {
        question: "Do you provide training and onboarding?",
        answer:
          "Yes, we provide comprehensive onboarding for all new customers including setup assistance, training sessions, and ongoing support. Enterprise customers receive dedicated onboarding specialists and custom training programs.",
      },
    ],
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-900">{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="cosmic-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Find answers to common questions about iGCT cloud telephony
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#ff5dde]">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((item, itemIndex) => (
                  <FAQItem key={itemIndex} question={item.question} answer={item.answer} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8">Our support team is here to help you get the most out of iGCT.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://salescentri.com/contact/support-request/live-chat"
              className="cta-button text-lg px-8 py-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Live Chat
            </a>
            <a
              href="https://salescentri.com/get-started/contact"
              className="cta-button text-lg px-8 py-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.flatMap((category) =>
              category.questions.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            ),
          }),
        }}
      />
    </div>
  )
}
