"use client";
import React, { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await authClient.signUp.email({ email, password });
      router.push('/login');
    } catch (err) {
      console.error(err);
      alert(err?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-semibold mb-4">Create an account</h1>
        <form onSubmit={handleRegister} className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Password</span>
            <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" />
          </label>

          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-500">{loading ? 'Registering…' : 'Register'}</button>
        </form>

        <p className="mt-4 text-sm text-gray-600">Already have an account? <a href="/login" className="text-indigo-600 hover:underline">Login</a></p>
      </div>
    </div>
  );
}
