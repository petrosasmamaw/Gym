"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function NavbarClient({ session }) {
  const [open, setOpen] = useState(false);

  async function handleSignOut(e) {
    e?.preventDefault();
    try {
      const resp = await fetch("/api/auth/sign-out", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({}),
      });
      if (!resp.ok) throw new Error("Sign out failed");
      // reload to update server-rendered session
      window.location.href = "/";
    } catch (err) {
      console.error(err);
      alert("Sign out failed");
    }
  }

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
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600">Home</Link>
            <Link href="/gym" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 font-medium">Gym</Link>
            <Link href="#classes" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600">Classes</Link>
            <Link href="/trainers" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600">Trainers</Link>
            <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600">Contact</Link>
          </div>

          <div className="flex items-center gap-4">

            <div className="hidden sm:flex items-center gap-3">
              {!session?.user ? (
                <>
                  <Link href="/auth/login" className="px-4 py-2 rounded-full bg-white/20 text-white/90 hover:bg-white/30">Sign in</Link>
                  <Link href="/auth/register" className="px-4 py-2 rounded-full bg-white text-emerald-700 font-semibold">Register</Link>
                </>
              ) : (
                <>
                  <span className="text-white/90 px-3">{session.user?.name || session.user?.email}</span>
                  <button onClick={handleSignOut} className="px-4 py-2 rounded-full bg-white/20 text-white/90 hover:bg-white/30">Sign out</button>
                </>
              )}
            </div>

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
            <Link href="/" className="block text-gray-700 dark:text-gray-200 py-2">Home</Link>
            <Link href="/gym" className="block text-gray-700 dark:text-gray-200 py-2">Gym</Link>
            <Link href="#classes" className="block text-gray-700 dark:text-gray-200 py-2">Classes</Link>
            <Link href="/trainers" className="block text-gray-700 dark:text-gray-200 py-2">Trainers</Link>
            <Link href="#contact" className="block text-gray-700 dark:text-gray-200 py-2">Contact</Link>
            {!session?.user ? (
              <>
                <Link href="/auth/login" className="block text-gray-700 dark:text-gray-200 py-2">Sign in</Link>
                <Link href="/auth/register" className="block text-indigo-600 font-medium py-2">Register</Link>
              </>
            ) : (
              <button onClick={handleSignOut} className="w-full text-left text-gray-700 dark:text-gray-200 py-2">Sign out</button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
