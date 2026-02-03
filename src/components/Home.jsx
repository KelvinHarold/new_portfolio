// components/Home.jsx
import { Code, Database, Globe, ChevronRight } from 'lucide-react'

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          
          {/* WELCOME SECTION */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Hi! I'm{' '}
              <span className="text-blue-600">Kelvin Harold</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
              Welcome to my portfolio. I create digital solutions that bridge technology 
              with real-world needs through modern web development.
            </p>

            {/* SERVICES SUMMARY */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
              <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-blue-50 border border-blue-100 hover:shadow-md transition">
                <div className="p-3 rounded-lg bg-blue-100">
                  <Globe className="text-blue-600" size={28} />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Websites Development
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Responsive, modern websites with optimal UX
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-green-50 border border-green-100 hover:shadow-md transition">
                <div className="p-3 rounded-lg bg-green-100">
                  <Database className="text-green-600" size={28} />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Database Design
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Efficient, scalable database architecture
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-purple-50 border border-purple-100 hover:shadow-md transition">
                <div className="p-3 rounded-lg bg-purple-100">
                  <Code className="text-purple-600" size={28} />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    WebApp Development
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Full-stack interactive web applications
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center gap-4">
              <p className="text-gray-700 mb-2">
                Want to know more about me and my work?
              </p>
            
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Home