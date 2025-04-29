'use client';

import { motion } from 'framer-motion';
import { FaHeart, FaStar, FaRocket } from 'react-icons/fa';
import Bg from './components/bg'; // adjust if in a different folder

export default function Home() {
  return (
    <Bg>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-24"
      >
        <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 drop-shadow-lg">
          Mother's Day Tribute
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Celebrate the unconditional love of mothers through beautiful stories, moments, and shared memories.
        </p>
        <div className="mt-10 flex justify-center gap-6">
          <button className="px-8 py-4 rounded-full text-lg font-medium bg-pink-500 hover:bg-pink-600 transition shadow-xl">
            Get Started
          </button>
          <button className="px-8 py-4 rounded-full text-lg font-medium bg-purple-600 hover:bg-purple-700 transition shadow-xl">
            Learn More
          </button>
        </div>
      </motion.section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl text-center border border-white/20 transition"
          >
            <div className="text-pink-400 text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Quote */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="text-center max-w-3xl mx-auto mb-24"
      >
        <p className="text-2xl italic text-gray-300 drop-shadow-sm">
          “To the world you are a mother, but to your family you are the world.”
        </p>
        <div className="mt-4 text-pink-400 font-semibold">— Unknown</div>
      </motion.section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-10">
        © 2025 Mother's Day Tribute. Built with ❤️ by Shreyash.
      </footer>
    </Bg>
  );
}

const features = [
  {
    title: 'Beautiful Stories',
    description: 'Read heartwarming stories shared by people like you.',
    icon: <FaHeart />,
  },
  {
    title: 'Top Moments',
    description: 'Celebrate special memories and experiences.',
    icon: <FaStar />,
  },
  {
    title: 'Share Yours',
    description: 'Contribute your own stories and tributes easily.',
    icon: <FaRocket />,
  },
];
