import React from "react";
import ProfileImage from "./assets/Karthikeyan-photo.jpeg";
import data from "./data.json";
import linkedIn from "./assets/linkedin.svg";
import github from "./assets/github.svg";

export default function PersonalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 text-white py-16 shadow-xl">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:justify-between">
          <div className="transform hover:scale-105 transition duration-300">
            <h1 className="text-5xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
              Karthikeyan Anbarasu
            </h1>
            <p className="text-lg backdrop-blur-sm bg-white/10 rounded-lg p-3 mb-2">
              <span className="font-semibold">Email: </span>
              <a href="mailto:karthikeyananbarasu7@gmail.com" className="underline hover:text-blue-200 transition">
                karthikeyananbarasu7@gmail.com
              </a>
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/karthikeyanamk/" 
                className="hover:text-blue-300 transform hover:scale-110 transition inline-block">
                <img src={linkedIn} alt="LinkedIn" className="w-8 h-8" />
              </a>
              <a href="https://github.com/karthikeyan-amk" 
                className="hover:text-gray-300 transform hover:scale-110 transition inline-block">
                <img src={github} alt="GitHub" className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <img
              src={ProfileImage}
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover shadow-2xl border-4 border-white/30 hover:border-white transition duration-300 transform hover:scale-105"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Education Section */}
        <section className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300 mb-8">
          <h2 className="text-3xl font-semibold text-blue-600 mb-6 border-b-2 border-blue-200 pb-2">Education</h2>
          <div className="space-y-6">
            {data.education.map((edu, index) => (
              <div key={index} className="hover:bg-gray-50 p-4 rounded-lg transition">
                <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution} | {edu.duration}</p>
                <p className="text-blue-600 font-semibold">{edu.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internship Section */}
        <section className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300 mb-8">
          <h2 className="text-3xl font-semibold text-blue-600 mb-6 border-b-2 border-blue-200 pb-2">Internships</h2>
          <div className="space-y-6">
            {data.internships.map((internship, index) => (
              <div key={index} className="hover:bg-gray-50 p-4 rounded-lg transition">
                <h3 className="text-xl font-bold text-gray-800">{internship.company}</h3>
                <p className="text-gray-600">{internship.year}</p>
                <p className="text-gray-600">{internship.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300 mb-8">
          <h2 className="text-3xl font-semibold text-blue-600 mb-6 border-b-2 border-blue-200 pb-2">Projects</h2>
          <div className="space-y-6">
            {data.projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-blue-600">{project.year}</p>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300">
          <h2 className="text-3xl font-semibold text-blue-600 mb-6 border-b-2 border-blue-200 pb-2">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.skills.map((skill, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-blue-50 transition">
                <h3 className="font-bold text-blue-600">{skill.category}</h3>
                <p className="text-gray-600">{skill.details}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-400"></p>
          Thank you for visiting my profile!
          <p className="text-sm text-gray-400 mt-2">Disclaimer: This profile is to test the working of my domain name</p>
        </div>
      </footer>
    </div>
  );
}
