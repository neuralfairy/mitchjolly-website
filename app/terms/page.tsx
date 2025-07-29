import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - Mitchjolly Solutions | Service Agreement",
  description:
    "Read the terms of service for Mitchjolly Solutions iGCT cloud telephony platform and understand your rights and responsibilities.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">Last updated: January 1, 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using the iGCT service, you accept and agree to be bound by the terms and provision of
              this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
            <p className="text-gray-600 mb-4">
              iGCT is a cloud-based telephony service that enables voice communications over the internet.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-600 mb-4">
              You are responsible for maintaining the confidentiality of your account and for all activities that occur
              under your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Service Availability</h2>
            <p className="text-gray-600 mb-4">
              We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service availability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For questions about these Terms of Service, please contact us at legal@mitchjolly.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
