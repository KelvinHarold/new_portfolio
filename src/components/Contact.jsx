// components/Contact.jsx
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram, Music } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent successfully!')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Me
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Reach out for collaboration, internships, or academic projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT INFO */}
          <div className="lg:col-span-1 space-y-8">
            {/* CONTACT INFO CARD */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-gray-900 text-xl mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4 items-center">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-800 font-medium">kelvinkifunda077@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Phone className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-800 font-medium">+255 749 022 773</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <MapPin className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-800 font-medium">University of Dodoma, Tanzania</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SOCIAL MEDIA SECTION */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-gray-900 text-xl mb-6">
                Connect With Me
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Follow me on social media for updates, projects, and insights.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.linkedin.com/in/kelvin-kifunda-20a886290/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-blue-100 bg-blue-50 hover:bg-blue-100 transition group"
                >
                  <div className="p-2 bg-blue-600 rounded-lg group-hover:scale-110 transition">
                    <Linkedin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">LinkedIn</p>
                    <p className="text-xs text-gray-500">Professional</p>
                  </div>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-gray-100 bg-gray-50 hover:bg-gray-100 transition group"
                >
                  <div className="p-2 bg-gray-900 rounded-lg group-hover:scale-110 transition">
                    <Github className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">GitHub</p>
                    <p className="text-xs text-gray-500">Projects</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-pink-100 bg-pink-50 hover:bg-pink-100 transition group"
                >
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg group-hover:scale-110 transition">
                    <Instagram className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Instagram</p>
                    <p className="text-xs text-gray-500">Updates</p>
                  </div>
                </a>

                <a
                    href="https://www.tiktok.com/@pin_codes"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-gray-800 bg-gray-900 hover:bg-black transition group"
                >
                  <div className="p-2 rounded-lg group-hover:scale-110 transition">
                    <Music className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white">TikTok</p>
                    <p className="text-xs text-gray-300">Content</p>
                  </div>
                </a>
              </div>

              <p className="text-gray-500 text-xs mt-6 text-center">
                Available for collaborations and networking
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-gray-200 rounded-2xl p-8 space-y-8 shadow-sm"
            >
              <div>
                <h3 className="font-semibold text-gray-900 text-xl mb-2">
                  Send a Message
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900
                               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900
                               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="What is this regarding?"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                  placeholder="Write your detailed message here..."
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white
                           rounded-lg hover:from-blue-700 hover:to-blue-800 transition transform hover:-translate-y-0.5 shadow-md"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
