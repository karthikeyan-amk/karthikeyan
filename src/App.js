import React from 'react';
import './index.css';

function App() {
  return (
    <div className='relative 100vh '>
      <nav className="bg-indigo-800 py-4 absolute w-full">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Karthikeyan A</h1>
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="text-white hover:text-indigo-200">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="text-white hover:text-indigo-200">
                Projects
              </a>
            </li>
            <li>
              <a href="#education" className="text-white hover:text-indigo-200">
                Education
              </a>
            </li>
            <li>
              <a href="#certifications" className="text-white hover:text-indigo-200">
                Certifications
              </a>
            </li>
            <li>
              <a href="#achievements" className="text-white hover:text-indigo-200">
                Achievements
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className='overflow-y-scroll h-[100vh] w-full '>
        <section id="about" className="py-8 pt-[80px] h-[100vh]">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p>
              I am a motivated individual pursuing my Bachelor's degree in Computer Science & Engineering. I am passionate about bringing happiness to others through my work and contributing to the success of any team I am a part of. I aspire to complete my dream project, which I envisioned during my SSLC studies, and that drove me to choose the field of Computer Engineering.
            </p>
          </div>
        </section>

        <section id="projects" className="py-8 bg-gray-100 pt-[80px] h-[calc(100vh-63px)]">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <ul className="list-disc pl-6">
              <li>Virtual Medical Friend: A message-based service that provides a walkthrough for people in need of medical care in the first few minutes of an injury.</li>
              <li>Hospital Management System: A system to reduce human error in the appointment process and make it computerized.</li>
              <li>KuttyURL: A URL shortening service (Front-end development).</li>
              <li>OurClass: A MERN stack project that handles tasks, announcements, and course materials.</li>
            </ul>
          </div>
        </section>

        <section id="education" className="py-8 pt-[80px] h-[calc(100vh-63px)]">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Education Background</h2>
            <ul className="list-disc pl-6">
              <li>B.E. Computer Science & Engineering - Sri Eshwar College of Engineering (CGPA: 8.1)</li>
              <li>HSC Maths-Computer Science - RGH HSS PEDAPPAMPATTI (94.8%)</li>
              <li>SSLC - RGH HSS PEDAPPAMPATTI (92.4%)</li>
            </ul>
          </div>
        </section>

        <section id="certifications" className="py-8 bg-gray-100 pt-[80px] h-[calc(100vh-63px)]">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Certifications</h2>
            <ul className="list-disc pl-6">
              <li>Mastering Data Structures & Algorithms using C and C++ (Nov 2022)</li>
              <li>Learn JAVA Programming - Beginner to Master (Dec 2022)</li>
            </ul>
          </div>
        </section>

        <section id="achievements" className="py-8 pt-[80px] h-[100vh]">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Achievements</h2>
            <ul className="list-disc pl-6">
              <li>Winner of the Smart Hack Challenge (Oct 2022)</li>
              <li>Second position in Sri Eshwar Coders' premier league (Jul 2022)</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
