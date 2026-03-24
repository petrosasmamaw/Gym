"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
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
      const resp = await fetch("/api/auth/sign-in/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });
      const data = await resp.json().catch(() => null);
      if (!resp.ok || data?.error) {
        setError(data?.error?.message || data?.message || "Incorrect email or password");
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
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 rounded-xl bg-white/20 dark:bg-slate-800/40 backdrop-blur-md shadow-md border border-white/10">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">Sign in</h1>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-sm text-gray-700">Email</span>
            <input name="email" type="email" required className="mt-1 block w-full rounded-md border px-3 py-2" />
          </label>

          <label className="block">
            <span className="text-sm text-gray-700">Password</span>
            <input name="password" type="password" required className="mt-1 block w-full rounded-md border px-3 py-2" />
          </label>

          <button type="submit" disabled={loading} className="w-full py-2 rounded bg-indigo-600 text-white">{loading ? 'Signing in...' : 'Sign in'}</button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">Or continue with</div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <form action="/api/auth/sign-in/social" method="post">
            <input type="hidden" name="provider" value="google" />
            <button type="submit" className="w-full py-2 rounded bg-white border">Google</button>
          </form>
          <form action="/api/auth/sign-in/social" method="post">
            <input type="hidden" name="provider" value="github" />
            <button type="submit" className="w-full py-2 rounded bg-white border">GitHub</button>
          </form>
        </div>
      </div>
    </div>
  );
}
