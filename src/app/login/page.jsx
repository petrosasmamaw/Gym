"use client";
import React, { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await authClient.signIn.email({ email, password });
      router.push('/');
    } catch (err) {
      console.error(err);
      alert(err?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-semibold mb-4">Sign in</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Password</span>
            <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" />
          </label>

          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-500">{loading ? 'Signing in…' : 'Sign in'}</button>
        </form>

        <p className="mt-4 text-sm text-gray-600">Don't have an account? <a href="/register" className="text-indigo-600 hover:underline">Register</a></p>
      </div>
    </div>
  );
}
