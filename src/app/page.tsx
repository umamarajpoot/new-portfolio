import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="hero min-h-screen flex flex-col items-center justify-center px-6 bg-gray-900 text-white">
      {/* Image Content */}
      <div className="flex justify-center mb-6">
        <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
          <Image
            src="/girl.png"
            alt="Umama"
            className="rounded-full object-cover w-full h-full border-4 sm:border-6 md:border-8 border-indigo-500 shadow-xl"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="hero-content text-center px-4 sm:px-8 md:px-12 lg:px-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Hello, I'm <span className="text-indigo-500">Umama</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6">
          Crafting seamless web experiences with stunning designs and intelligent solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg"
          >
            Contact me
          </a>
          <a
            href="/projects"
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg"
          >
            Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
