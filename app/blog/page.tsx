import type { Metadata } from "next"
import { Calendar, ArrowRight, Download, FileText, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Cloud Telephony Blog - VoIP Insights & Best Practices | Mitchjolly Solutions",
  description:
    "Expert insights on VoIP, global outreach, call automation, and cloud telephony best practices. Stay updated with the latest industry trends.",
  keywords: "VoIP blog, cloud telephony insights, call automation, global outreach, telephony best practices",
}

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Future of Global Sales Communications in 2024",
      excerpt:
        "Explore emerging trends in cloud telephony and how they're reshaping international business communications.",
      date: "January 15, 2024",
      category: "Industry Trends",
      readTime: "5 min read",
    },
    {
      title: "Maximizing ROI with Cloud-Based Call Centers",
      excerpt:
        "Learn how modern businesses are reducing costs while improving customer experience through cloud telephony.",
      date: "January 12, 2024",
      category: "Business Strategy",
      readTime: "7 min read",
    },
    {
      title: "VoIP Security Best Practices for Enterprise Teams",
      excerpt: "Essential security measures every organization should implement to protect their voice communications.",
      date: "January 10, 2024",
      category: "Security",
      readTime: "6 min read",
    },
    {
      title: "Integrating AI Voice Agents into Your Sales Process",
      excerpt:
        "Step-by-step guide to implementing AI-powered voice agents for lead qualification and customer support.",
      date: "January 8, 2024",
      category: "AI & Automation",
      readTime: "8 min read",
    },
    {
      title: "Global Compliance in Cloud Telephony: What You Need to Know",
      excerpt: "Navigate international regulations and compliance requirements for cloud-based communications.",
      date: "January 5, 2024",
      category: "Compliance",
      readTime: "10 min read",
    },
    {
      title: "Building Resilient Communication Infrastructure",
      excerpt: "How to design fault-tolerant telephony systems that ensure business continuity.",
      date: "January 3, 2024",
      category: "Infrastructure",
      readTime: "6 min read",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="cosmic-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cloud Telephony Insights</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Expert insights on VoIP, global outreach, and call automation
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {blogPosts.map((post, index) => (
                  <article
                    key={index}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="p-8">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <span className="bg-[#ff5dde] text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                        <span>{post.readTime}</span>
                      </div>

                      <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-[#ff5dde] transition-colors">
                        <a href="https://salescentri.com/blog" target="_blank" rel="noopener noreferrer">
                          {post.title}
                        </a>
                      </h2>

                      <p className="text-gray-600 mb-6">{post.excerpt}</p>

                      <a
                        href="https://salescentri.com/blog"
                        className="inline-flex items-center text-[#ff5dde] hover:text-[#e54cc9] font-semibold transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-[#ff5dde] text-white rounded-lg hover:bg-[#e54cc9] transition-colors">
                    1
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                    2
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                    3
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                    Next
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Resources */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Resources</h3>
                <div className="space-y-4">
                  <a
                    href="https://salescentri.com/resources/whitepapers-ebooks"
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="h-6 w-6 text-[#ff5dde] mr-3" />
                    <div>
                      <div className="font-semibold">Download Guide</div>
                      <div className="text-sm text-gray-600">Free whitepapers & ebooks</div>
                    </div>
                  </a>

                  <a
                    href="https://salescentri.com/resources/case-studies"
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="h-6 w-6 text-[#0b439c] mr-3" />
                    <div>
                      <div className="font-semibold">Case Studies</div>
                      <div className="text-sm text-gray-600">Success stories & results</div>
                    </div>
                  </a>

                  <a
                    href="https://salescentri.com/blog/product-updates"
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TrendingUp className="h-6 w-6 text-[#d48c41] mr-3" />
                    <div>
                      <div className="font-semibold">Product Updates</div>
                      <div className="text-sm text-gray-600">Latest features & improvements</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
                <div className="space-y-2">
                  {[
                    "Industry Trends",
                    "Business Strategy",
                    "Security",
                    "AI & Automation",
                    "Compliance",
                    "Infrastructure",
                    "Best Practices",
                    "Product Updates",
                  ].map((category, index) => (
                    <a
                      key={index}
                      href="https://salescentri.com/blog"
                      className="block py-2 px-3 text-gray-700 hover:text-[#ff5dde] hover:bg-gray-50 rounded transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-[#ff5dde] to-[#0b439c] rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                <p className="mb-6">Get the latest insights delivered to your inbox.</p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-black py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
