import React from 'react';
import { SiFigma, SiTypescript, SiTailwindcss, SiJavascript, SiNextdotjs } from 'react-icons/si'; // Importing icons

// Skill Data
const skills = [
  {
    title: 'Figma',
    icon: <SiFigma size={40} />,
    bgColor: 'bg-indigo-500',
  },
  {
    title: 'TypeScript',
    icon: <SiTypescript size={40} />,
    bgColor: 'bg-indigo-500',
  },
  {
    title: 'Tailwind CSS',
    icon: <SiTailwindcss size={40} />,
    bgColor: 'bg-indigo-500',
  },
  {
    title: 'JavaScript',
    icon: <SiJavascript size={40} />,
    bgColor: 'bg-indigo-500',
  },
  {
    title: 'Next.js',
    icon: <SiNextdotjs size={40} />,
    bgColor: 'bg-indigo-500',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 sm:px-10 md:px-16 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-indigo-500 font-bold mb-6">
          About me:
        </h2>
        <p className="text-base sm:text-lg lg:text-xl mb-6">
          Hi, I’m Umama Rajpoot — a passionate Fullstack Web Developer, UI Designer, and Mobile Developer currently honing my expertise in Metaverse AI 3.0 at Goverhouse. 
          I specialize in building immersive, next-generation digital experiences, blending advanced web development with cutting-edge UI design to shape the future of interactive technology.
        </p>
        <p className="text-base sm:text-lg lg:text-xl mb-10">
          Here are the major skills I have:
        </p>

        {/* Experience Section */}
        <div className="flex flex-col sm:flex-row items-center mb-12">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-indigo-500 mr-0 sm:mr-4 mb-4 sm:mb-0">
            1+
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-center sm:text-left">
            Years of experience. Specialized in building apps, while ensuring a seamless web experience for end users.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-4 sm:p-6 ${skill.bgColor} text-white rounded-lg shadow-lg`}
            >
              <div className="flex justify-center items-center mb-4">
                {skill.icon} {/* React Icon dynamically rendered */}
              </div>
              <h4 className="text-sm sm:text-base lg:text-xl font-bold text-center">
                {skill.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
