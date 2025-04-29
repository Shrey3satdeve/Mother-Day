"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  }, []);

  const themes = {
    dark: "bg-gradient-to-b from-gray-900 via-purple-900 to-gray-800 text-white",
    light: "bg-gradient-to-b from-white via-gray-100 to-white text-gray-900",
    floral: "bg-[url('https://via.placeholder.com/1920x1080?text=Floral+Pattern')] bg-cover bg-center text-gray-800",
    pastel: "bg-gradient-to-b from-pink-100 via-purple-100 to-pink-200 text-gray-800",
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${themes[theme]}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-pink-400 mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Oops! The article you're looking for doesn't exist. Let's take you back to the celebration!
        </p>
        <Link href="/">
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-transform transform hover:scale-105 shadow-md">
            Back to Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
}