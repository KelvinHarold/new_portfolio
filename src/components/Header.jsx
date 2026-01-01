// components/Header.jsx
import { useState } from 'react'
import { Menu, X, User, FolderKanban, Code, Mail } from 'lucide-react'

const Header = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home', icon: <User size={16} /> },
    { id: 'projects', label: 'Projects', icon: <FolderKanban size={16} /> },
    { id: 'skills', label: 'Skills', icon: <Code size={16} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={16} /> },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">

          {/* BRAND + PROFILE */}
          <div className="flex items-center gap-3">
            {/* PROFILE IMAGE */}
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
              <img
                src="/image.jpeg"   // 👉 replace with your image path
                alt="Kelvin Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* NAME & TITLE */}
            <div className="leading-tight">
              <h1 className="text-sm font-semibold text-gray-900">
                Kelvin
              </h1>
              <p className="text-xs text-gray-500">
                Instructional Design & IT
              </p>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition
                  ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 pt-2">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id)
                    setIsMenuOpen(false)
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition
                    ${
                      activeSection === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }
                  `}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
