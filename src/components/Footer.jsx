// components/Footer.jsx
import { Heart, GraduationCap } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Kelvin
            </h3>
            <p className="text-sm text-gray-400 max-w-md">
              Instructional Design & Information Technology student passionate
              about building meaningful digital solutions.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap size={18} className="text-blue-400" />
              <span className="font-medium text-white">
                University of Dodoma
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Bachelor of Instructional Design with IT
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Kelvin. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Heart size={14} className="text-red-500 fill-current" />
            <span>React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
