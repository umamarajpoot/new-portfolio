import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-800 to-gray-900 text-white px-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-start p-6 sm:p-8 space-y-10 md:space-y-0 md:space-x-10">
        {/* Connect with Me Section */}
        <div className="md:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-300 mb-5">
            Let’s Connect
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-400 mb-3">
            Connect with me:
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mb-5">
            Satisfied with me? Please contact me.
          </p>
          <div className="flex space-x-4 sm:space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-300 text-2xl sm:text-3xl hover:text-purple-500 transition"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-300 text-2xl sm:text-3xl hover:text-indigo-500 transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="mailto:someone@example.com"
              className="text-indigo-300 text-2xl sm:text-3xl hover:text-indigo-500 transition"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="md:w-1/2 bg-gradient-to-br from-purple-800 to-indigo-900 p-6 sm:p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-200 mb-5">
            Contact me, let's make magic together
          </h2>
          <form className="flex flex-col space-y-4 sm:space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 sm:p-4 bg-indigo-700 text-indigo-200 placeholder-indigo-400 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-500"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 sm:p-4 bg-indigo-700 text-indigo-200 placeholder-indigo-400 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-500"
              required
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 sm:p-4 bg-indigo-700 text-indigo-200 placeholder-indigo-400 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 sm:py-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
