// components/Projects.jsx
import { ExternalLink, Github, Globe, Server, FolderGit2, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Pharmacy Online System',
      description:
        'A full-stack e-commerce system for booking medicines online and being delivered upon order confirmation.',
      tech: ['blades', 'Laravel', 'MySQL', 'Tailwind CSS'],
      category: 'Full Stack',
      github: 'https://github.com',
      live: 'https://bfsuma.kesug.com',
      icon: <Globe size={20} />,
    },
    {
      id: 2,
      title: 'Discpline Tracker',
      description:
        'Self system for tracking discipline upon suggested time for performing  daily tasks.',
      tech: ['Laravel', 'React', 'MySQL',],
      category: 'Fullstack',
      github: 'https://github.com',
      live: 'https://timetable.kesug.com',
      icon: <FolderGit2 size={20} />,
    },
    {
      id: 3,
      title: 'Portfolio Website Template',
      description:
        'A responsive Portfolio showcasting different works and projects built with modern web technologies.',
      tech: ['React', 'Tailwind CSS', 'Vite'],
      category: 'Frontend',
      github: 'https://github.com',
      live: 'https://kelvinportfolio-mu.vercel.app/',
      icon: <Globe size={20} />,
    },
    {
      id: 4,
      title: 'Agrovets Stock management System',
      description:
        'System to manage stocks, sales, and customer orders for agricultural veterinary supplies.',
      tech: [ 'Laravel', 'MySQL', 'React'],
      category: 'Fullstack',
      github: 'https://github.com',
      live: null,
      icon: <Server size={20} />,
    },
    {
      id: 5,
      title: 'Cleaning Services Booking-System',
      description:
        'A secure RESTful API with authentication, rate limiting, and clear documentation for educational use.',
      tech: [ 'Laravel', 'MySQL', 'React'],
      category: 'Fullstack',
      github: 'https://github.com',
      live: null,
      icon: <Server size={20} />,
    },
    {
      id: 6,
      title: 'Football Hall Report Management System',
      description:
        'System to manage football hall reports, bookings.',
      tech: [ 'Laravel', 'MySQL', 'React'],
      category: 'Fullstack',
      github: 'https://github.com',
      live: null,
      icon: <Server size={20} />,
    },
    {
      id: 7,
      title: 'U-Connect E-Commerce Platform',
      description:
        'System to manage e-commerce platform for various products.',
      tech: [ 'Laravel', 'MySQL', 'React'],
      category: 'Fullstack',
      github: 'https://github.com',
      live: null,
      icon: <Server size={20} />,
    },
  ]

  const projectsPerPage = 4
  const [currentPage, setCurrentPage] = useState(1)

  // Calculate pagination
  const totalPages = Math.ceil(projects.length / projectsPerPage)
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject)

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* SECTION HEADER */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Selected Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of projects that demonstrate my skills in software
            development, system design, and educational technology.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition"
            >
              {/* TOP */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                    {project.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-500">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* ACTIONS */}
              <div className="flex items-center gap-6 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
                >
                  <Github size={16} />
                  Source Code
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION NAVIGATION */}
        <div className="flex items-center justify-center gap-2">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition ${
              currentPage === 1
                ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
            }`}
          >
            <ChevronLeft size={16} />
            Previous
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-1">
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1
              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition ${
                    currentPage === pageNumber
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {pageNumber}
                </button>
              )
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition ${
              currentPage === totalPages
                ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
            }`}
          >
            Next
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Page Info */}
        <div className="text-center mt-4 text-gray-500 text-sm">
          Showing {indexOfFirstProject + 1}-{Math.min(indexOfLastProject, projects.length)} of {projects.length} projects
        </div>
      </div>
    </section>
  )
}

export default Projects