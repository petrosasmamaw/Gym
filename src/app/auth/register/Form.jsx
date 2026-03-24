"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = new FormData(e.currentTarget);
    const body = Object.fromEntries(form.entries());
    try {
      const resp = await fetch("/api/auth/sign-up/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });
      const data = await resp.json().catch(() => null);
      if (!resp.ok || data?.error) {
        setError(data?.error?.message || data?.message || "Registration failed");
        setLoading(false);
        return;
      }
      // refresh server components (Navbar) then navigate
      await router.refresh();
      router.push("/");
    } catch (err) {
      setError(err?.message || "Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative z-10">
      <div className="w-full max-w-md p-8 rounded-xl bg-white/10 dark:bg-black/30 backdrop-blur-sm shadow-2xl border border-white/10">
        <h1 className="text-2xl font-bold mb-4 text-white">Create account</h1>
        {error && <p className="text-red-400 mb-2">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-sm text-white/90">Name</span>
            <input name="name" type="text" required className="mt-1 block w-full rounded-md bg-white/5 text-white placeholder-gray-300 border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          </label>

          <label className="block">
            <span className="text-sm text-white/90">Email</span>
            <input name="email" type="email" required className="mt-1 block w-full rounded-md bg-white/5 text-white placeholder-gray-300 border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          </label>

          <label className="block">
            <span className="text-sm text-white/90">Password</span>
            <input name="password" type="password" required className="mt-1 block w-full rounded-md bg-white/5 text-white placeholder-gray-300 border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          </label>

          <button type="submit" disabled={loading} className="w-full py-2 rounded bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-lg">{loading ? 'Creating...' : 'Create account'}</button>
        </form>

        <div className="mt-6 text-center text-sm text-white/80">Or continue with</div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <form action="/api/auth/sign-in/social" method="post">
            <input type="hidden" name="provider" value="google" />
            <button type="submit" className="w-full py-2 rounded bg-white/10 text-white border border-white/20">Google</button>
          </form>
          <form action="/api/auth/sign-in/social" method="post">
            <input type="hidden" name="provider" value="github" />
            <button type="submit" className="w-full py-2 rounded bg-white/10 text-white border border-white/20">GitHub</button>
          </form>
        </div>
      </div>
    </div>
  );
}
