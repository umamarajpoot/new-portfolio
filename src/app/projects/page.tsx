import React from 'react';

// Project Data
const projects = [
  {
    title: 'Editable Resume',
    description: 'Create and edit resumes dynamically in real-time.',
    VercleLink: 'https://milestone-4-kka2mh7vx-umme-rajpoots-projects-7a51b58a.vercel.app/',
    repoLink: 'https://github.com/umamarajpoot/Hackathon-Milestone-.git',
    icon: '/Editable Resume Builder.jpeg',
  },
  {
    title: 'Static Resume',
    description: 'Generate a sleek, single-page static resume.',
    VercleLink: 'https://milestone-1-2-orpin.vercel.app/',
    repoLink: 'https://github.com/umamarajpoot/Hackathon-Milestone-.git',
    icon: '/Static Resume.jpeg',
  },
  {
    title: 'Shareable Resume Builder',
    description: 'Easily create and share resumes across multiple platforms.',
    VercleLink: 'https://milestone-5-mu-ten.vercel.app/',
    repoLink: 'https://github.com/umamarajpoot/Hackathon-Milestone-.git',
    icon: '/Shareable Resume Builder.jpeg',
  },
  {
    title: 'Dynamic Resume Builder',
    description: 'Build dynamic resumes with real-time updates.',
    VercleLink: 'https://milestone-3-gules-eight.vercel.app/',
    repoLink: 'https://github.com/umamarajpoot/Hackathon-Milestone-.git',
    icon: '/Dynamic Resume Builder.jpeg',
  },
  {
    title: 'Countdown Timer',
    description: 'Simple app to track countdowns efficiently.',
    VercleLink: 'https://countdown-timer-1n73.vercel.app/',
    repoLink: 'https://github.com/umamarajpoot/Hackathon-Milestone-.git',
    icon: '/Countdown Timer.jpeg',
  },
  {
    title: 'Simple Calculator',
    description: 'Perform basic arithmetic operations with a clean, user-friendly interface.',
    VercleLink: 'https://calculator-eta-blond-13.vercel.app/',
    repoLink: 'https://github.com/umamarajpoot/Hackathon-Milestone-.git',
    icon: '/Simple Calculater.jpeg',
  },
];

const FeaturedProjects: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
          Real-World Projects in Action:
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-10 text-center md:text-left">
          Showcasing my journey as a Web Developer, here are some of my featured projects that bring innovative ideas to life in real-world applications.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center items-center mb-4">
                <img
                  src={project.icon}
                  alt={project.title}
                  className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-indigo-400 mb-2 text-center">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base mb-4 text-center text-gray-300">
                {project.description}
              </p>
              <div className="flex justify-center gap-3 sm:gap-4">
                <a
                  href={project.VercleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm"
                >
                  View Live
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
