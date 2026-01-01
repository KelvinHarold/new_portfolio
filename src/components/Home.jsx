// components/Home.jsx
import { GraduationCap, MapPin, ExternalLink, Github, Linkedin } from 'lucide-react'

const Home = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block mb-4 text-sm font-semibold tracking-wide text-blue-600 uppercase">
              Portfolio Introduction
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Hi, I’m{' '}
              <span className="text-blue-600">Kelvin</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
              I am a student at the <strong>University of Dodoma (UDOM)</strong>,
              pursuing a degree in{' '}
              <span className="text-blue-600 font-medium">
                Instructional Design with Information Technology
              </span>.
              My focus is on building digital solutions that connect education and technology.
            </p>

            {/* INFO CARDS */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-blue-600 mt-1" size={22} />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Education
                  </h3>
                  <p className="text-gray-600 text-sm">
                    University of Dodoma (UDOM)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-green-600 mt-1" size={22} />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Field of Study
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Instructional Design with IT
                  </p>
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-100 transition"
              >
                <Github size={18} />
                GitHub
                <ExternalLink size={14} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                <Linkedin size={18} />
                LinkedIn
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl">
                <img
                   src="/image.jpeg" 
                  alt="Kelvin"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home
