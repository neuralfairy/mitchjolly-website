import type { Metadata } from "next"
import { Users, Target, Globe, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "About Mitchjolly Solutions - Tucson-Based Cloud Telephony Provider",
  description:
    "Learn about Mitchjolly Solutions, a Tucson-based company providing global cloud telephony solutions with voice-first approach to enterprise communications.",
  keywords: "Mitchjolly Solutions, Tucson telephony, cloud communications, voice-first, enterprise solutions",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="cosmic-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Mitchjolly Solutions</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Pioneering voice-first global outreach from the heart of Tucson, Arizona
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Mitchjolly Solutions, we believe that voice communication is the foundation of meaningful business
                relationships. Our mission is to empower enterprise sales teams with cutting-edge cloud telephony
                solutions that break down geographical barriers and enable authentic connections worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Founded in Tucson, Arizona, we combine the innovation of Silicon Valley with the reliability and
                personal touch of the Southwest. Our iGCT platform represents years of development focused on one goal:
                making global communication as simple as a local phone call.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://salescentri.com/company/about-us/leadership-team"
                  className="cta-button text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Meet Our Leadership Team
                </a>
                <a
                  href="https://salescentri.com/company/team-advisors/career-openings"
                  className="cta-button text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Career Openings
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <Globe className="h-12 w-12 text-[#ff5dde] mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <Users className="h-12 w-12 text-[#0b439c] mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">10K+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <Target className="h-12 w-12 text-[#d48c41] mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime SLA</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <Award className="h-12 w-12 text-[#6d6521] mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="bg-[#ff5dde] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Global Connectivity</h3>
              <p className="text-gray-600">
                We believe distance should never be a barrier to meaningful business relationships. Our technology
                connects people across continents as easily as across the street.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="bg-[#0b439c] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Reliability First</h3>
              <p className="text-gray-600">
                Your business depends on consistent communication. We've built our infrastructure with redundancy and
                reliability as the top priorities.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="bg-[#d48c41] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Customer Success</h3>
              <p className="text-gray-600">
                Your success is our success. We're not just a vendor; we're your partner in building better
                communication strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tucson Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Proudly Based in Tucson</h2>
              <p className="text-lg text-gray-600 mb-6">
                Tucson, Arizona isn't just where we're located—it's part of who we are. The desert city's spirit of
                innovation, resilience, and community shapes our approach to business and technology.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From our headquarters in the Sonoran Desert, we serve clients across six continents. This unique
                perspective—local roots with global reach—informs everything we do.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We're committed to growing the tech ecosystem in Southern Arizona while helping businesses worldwide
                communicate more effectively.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#ff5dde] to-[#0b439c] p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Why Tucson?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Strategic location for global time zone coverage</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Access to top-tier talent from University of Arizona</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Lower operational costs without compromising quality</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Strong community of innovative tech companies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 cosmic-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Journey?</h2>
          <p className="text-xl mb-8">
            Whether you're looking to transform your sales communications or join our growing team, we'd love to hear
            from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://salescentri.com/get-started/book-demo"
              className="cta-button text-lg px-8 py-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Demo
            </a>
            <a
              href="https://salescentri.com/company/team-advisors/career-openings"
              className="cta-button text-lg px-8 py-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Careers
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
