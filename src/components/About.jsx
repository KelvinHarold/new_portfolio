// components/About.jsx
import { GraduationCap, MapPin, Briefcase, Award, Users, Rocket } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get to know more about my background, education, and what drives my passion for technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LEFT COLUMN - Personal Info */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Personal Details
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-50">
                    <GraduationCap className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Education</h4>
                    <p className="text-gray-600">
                      Bachelor's in Instructional Design with Information Technology
                    </p>
                    <p className="text-blue-600 font-medium">
                      University of Dodoma (UDOM)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-green-50">
                    <MapPin className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Location</h4>
                    <p className="text-gray-600">
                      Based in Dodoma, Tanzania
                    </p>
                    <p className="text-gray-500 text-sm">
                      Available for remote work and collaborations
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-purple-50">
                    <Briefcase className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Current Focus</h4>
                    <p className="text-gray-600">
                      Full-Stack Web Development & Database Systems
                    </p>
                    <p className="text-gray-500 text-sm">
                      Specializing in modern JavaScript frameworks and cloud technologies
                    </p>
                  </div>
                </div>
              </div>
            </div>

         
          </div>

        
        </div>
      </div>
    </section>
  )
}

export default About