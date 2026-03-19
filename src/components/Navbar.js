"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">G</div>
              <span className="font-semibold text-lg text-gray-900 dark:text-white">GymUI</span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600">Home</a>
            <a href="/gym" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 font-medium">Gym</a>
            <a href="#classes" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600">Classes</a>
            <a href="/trainers" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600">Trainers</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="/join" className="hidden md:inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-500">Join</a>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="px-4 pt-4 pb-4 space-y-2">
            <a href="/" className="block text-gray-700 dark:text-gray-200 py-2">Home</a>
            <a href="/gym" className="block text-gray-700 dark:text-gray-200 py-2">Gym</a>
            <a href="#classes" className="block text-gray-700 dark:text-gray-200 py-2">Classes</a>
            <a href="/trainers" className="block text-gray-700 dark:text-gray-200 py-2">Trainers</a>
            <a href="#contact" className="block text-gray-700 dark:text-gray-200 py-2">Contact</a>
            <a href="/join" className="block text-indigo-600 font-medium py-2">Join</a>
          </div>
        </div>
      )}
    </nav>
  );
}
