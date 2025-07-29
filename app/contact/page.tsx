import type { Metadata } from "next"
import { Phone, Mail, MapPin, MessageCircle, Calendar, Ticket } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Mitchjolly Solutions - Get in Touch | Cloud Telephony Support",
  description:
    "Contact Mitchjolly Solutions for cloud telephony support. Book meetings, live chat, submit tickets. Located in Tucson, AZ.",
  keywords: "contact Mitchjolly, cloud telephony support, Tucson AZ, customer service, technical support",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="cosmic-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              We're here to help you succeed with iGCT. Reach out to our team in Tucson, AZ.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <Calendar className="h-12 w-12 text-[#ff5dde] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Book a Meeting</h3>
              <p className="text-gray-600 mb-6">Schedule a personalized demo or consultation with our team.</p>
              <a
                href="https://salescentri.com/get-started/calendly"
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Now
              </a>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <MessageCircle className="h-12 w-12 text-[#0b439c] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Live Chat</h3>
              <p className="text-gray-600 mb-6">Get instant support from our customer success team.</p>
              <a
                href="https://salescentri.com/contact/support-request/live-chat"
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Chat
              </a>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <Ticket className="h-12 w-12 text-[#d48c41] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Submit Ticket</h3>
              <p className="text-gray-600 mb-6">Submit a detailed support request for technical issues.</p>
              <a
                href="https://salescentri.com/contact/support-request/submit-ticket"
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Submit Ticket
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6" action="https://salescentri.com/get-started/contact" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5dde] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5dde] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5dde] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5dde] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5dde] focus:border-transparent"
                  >
                    <option value="">Select a topic</option>
                    <option value="demo">Request Demo</option>
                    <option value="pricing">Pricing Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5dde] focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full cta-button py-4 text-lg font-semibold">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-[#ff5dde] mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Location</h3>
                    <p className="text-gray-600">Tucson, Arizona</p>
                    <p className="text-gray-600">United States</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-[#0b439c] mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone Support</h3>
                    <p className="text-gray-600">Available 24/7 for Enterprise customers</p>
                    <p className="text-gray-600">Business hours for all other plans</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-[#d48c41] mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Support</h3>
                    <p className="text-gray-600">support@mitchjolly.com</p>
                    <p className="text-gray-600">Response within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-br from-[#ff5dde] to-[#0b439c] rounded-lg text-white">
                <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="mb-6">
                  Our support team is standing by to assist you with any questions or technical issues.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://salescentri.com/contact/support-request/live-chat"
                    className="block w-full bg-white text-black text-center py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start Live Chat
                  </a>
                  <a
                    href="https://salescentri.com/contact/support-request/submit-ticket"
                    className="block w-full bg-white text-black text-center py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Submit Support Ticket
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Communications?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Don't wait - start your free trial today and experience the power of iGCT.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://salescentri.com/get-started/free-trial"
              className="cta-button text-lg px-8 py-4"
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
