// components/Contact.jsx
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react'
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
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Me
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reach out for collaboration, internships, or academic projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {/* LEFT INFO */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Contact Information
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <Mail className="text-blue-600" size={18} />
                  <span className="text-gray-700">kelvin@udom.ac.tz</span>
                </div>
                <div className="flex gap-3">
                  <Phone className="text-blue-600" size={18} />
                  <span className="text-gray-700">+255 XXX XXX XXX</span>
                </div>
                <div className="flex gap-3">
                  <MapPin className="text-blue-600" size={18} />
                  <span className="text-gray-700">
                    University of Dodoma, Tanzania
                  </span>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <Linkedin className="text-gray-600 hover:text-blue-600" />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <Github className="text-gray-600 hover:text-blue-600" />
                </a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="md:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-gray-200 rounded-xl p-8 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-900
                               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-900
                               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-900
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Subject"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-900
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                  placeholder="Write your message..."
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white
                           rounded-md hover:bg-blue-700 transition"
              >
                <Send size={16} />
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
