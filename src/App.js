import { useState } from 'react';
import { motion } from 'framer-motion';
import ImageSlider from './components/ImageSlider';
import DarkModeToggle from './components/DarkModeToggle';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const sections = {
    home: (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col items-center justify-center text-center py-20 space-y-6"
      >
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-tr from-blue-100 to-white" />
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl sm:text-6xl font-bold"
        >
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Vinayak Das</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg text-gray-700 dark:text-gray-300 max-w-xl"
        >
          Mechanical Design Engineer focused on manufacturable, cost-optimized, and production-ready engineering solutions.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          onClick={() => setActiveSection('projects')}
        >
          View My Work
        </motion.button>

        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,192L1440,96L1440,320L0,320Z" />
        </svg>
      </motion.div>
    ),

    projects: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-10 px-4"
      >
        <h2 className="text-3xl font-semibold text-center mb-6 dark:text-white">Projects</h2>
        <ImageSlider />
      </motion.div>
    ),

    contact: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center py-20"
      >
        <h2 className="text-3xl font-semibold dark:text-white">Contact Me</h2>
        <p className="text-gray-600 mt-4 dark:text-gray-400">vinayakda1@gmail.com</p>
        <p className="text-gray-600 dark:text-gray-400">LinkedIn: linkedin.com/in/vinayak-das</p>
        <a
          href="/resume.pdf"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          download
        >
          Download Resume
        </a>
      </motion.div>
    ),
  };

  return (
    <div className="min-h-screen px-4 sm:px-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <nav className="flex justify-between items-center gap-6 py-6 text-sm font-semibold">
        <div className="flex gap-6">
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              className={`hover:text-blue-600 dark:hover:text-blue-400 ${
                activeSection === key ? 'text-blue-600 dark:text-blue-400' : ''
              }`}
              onClick={() => setActiveSection(key)}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>
        <DarkModeToggle />
      </nav>
      <main>{sections[activeSection]}</main>
    </div>
  );
}
