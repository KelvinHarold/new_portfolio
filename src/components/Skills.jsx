// components/Skills.jsx
import { Code, Database, Cpu, Palette, Settings, FileCode } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code size={20} />,
      skills: ['HTML & CSS', 'JavaScript (ES6+)', 'React', 'Tailwind CSS'],
    },
    {
      title: 'Backend Development',
      icon: <Cpu size={20} />,
      skills: ['PHP', 'Java', 'Laravel', 'Spring Boot'],
    },
    {
      title: 'Databases & Servers',
      icon: <Database size={20} />,
      skills: ['MySQL', 'Database Design', 'Apache', 'Nginx'],
    },
    {
      title: 'Design & Analysis',
      icon: <Palette size={20} />,
      skills: [
        'UI / UX Principles',
        'System Analysis & Design',
        'Frontend Layout Design',
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: <Settings size={20} />,
      skills: ['Git & GitHub', 'VS Code', 'API Development', 'Postman'],
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A summary of my technical competencies developed through academic
            training and practical software projects.
          </p>
        </div>

        {/* SKILL GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-700 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ACADEMIC FOCUS */}
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <FileCode size={22} className="text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">
              Academic Focus
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-3">
                Instructional Design
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Educational Technology Integration</li>
                <li>Curriculum & Learning Content Design</li>
                <li>Learning Management Systems (LMS)</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-3">
                Information Technology
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Full-Stack Web Development</li>
                <li>Database Management Systems</li>
                <li>API Design & Integration</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills
