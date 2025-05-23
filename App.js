import { useState } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const sections = {
    home: (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
        <h1 className="text-5xl font-bold">Vinayak Das</h1>
        <p className="text-xl mt-4">Mechanical Engineer | Product Designer</p>
        <p className="text-md mt-2 text-gray-500">Focused on manufacturable design, prototyping, and cost-optimized solutions</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded" onClick={() => setActiveSection('projects')}>View My Work</button>
      </motion.div>
    ),
    projects: (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-10 px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">Projects</h2>
        <div className="grid gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-bold">Aerial Work Platform Redesign</h3>
            <p className="text-gray-600">Reduced part count by 30% and cost by $100/unit. Eliminated welds for easier assembly.</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-bold">Hydraulic Power Unit Optimization</h3>
            <p className="text-gray-600">Delivered $70K/year savings by redesigning and managing BOM + ECO updates.</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-bold">Motorcycle Prototype Tools</h3>
            <p className="text-gray-600">Improved first-pass yield from 80% to 90% by optimizing tooling and CNC programs.</p>
          </div>
        </div>
      </motion.div>
    ),
    contact: (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
        <h2 className="text-3xl font-semibold">Contact Me</h2>
        <p className="text-gray-600 mt-4">vinayakda1@gmail.com</p>
        <p className="text-gray-600">LinkedIn: linkedin.com/in/vinayak-das</p>
      </motion.div>
    ),
  };

  return (
    <div className="min-h-screen px-4 sm:px-10 bg-gray-50 text-gray-900">
      <nav className="flex justify-center gap-6 py-6 text-sm font-semibold text-gray-700">
        {Object.keys(sections).map((key) => (
          <button
            key={key}
            className={\`hover:text-blue-600 \${activeSection === key ? 'text-blue-600' : ''}\`}
            onClick={() => setActiveSection(key)}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </nav>
      <main>{sections[activeSection]}</main>
    </div>
  );
}
