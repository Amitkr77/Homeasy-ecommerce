"use client";

import React, { useState } from "react";
import { Home, Eye, EyeOff, Mail, Lock, Loader2 } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Logged in:", formData);
    alert("Logged in successfully!"); // Replace with redirect
    setLoading(false);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100 antialiased min-h-screen">
      <div className="flex min-h-screen w-full flex-row overflow-hidden">
        {/* Left Side: Login Form */}
        <div className="flex w-full flex-col justify-between p-8 lg:w-1/2 lg:p-12 xl:p-16">
          {/* Header / Logo */}
          <header className="flex items-center gap-3">
            <div className="flex items-center justify-center rounded-lg bg-blue-500/10 p-2 text-blue-600">
              <Home className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-bold tracking-tight">Homeasy</h2>
          </header>

          {/* Main Form Content */}
          <div className="mx-auto flex w-full max-w-md flex-col justify-center py-10">
            {/* Page Heading */}
            <div className="mb-8 flex flex-col gap-2">
              <h1 className="text-3xl font-black leading-tight tracking-[-0.033em] text-gray-900 dark:text-white sm:text-4xl">
                Welcome back
              </h1>
              <p className="text-base font-normal leading-normal text-gray-600 dark:text-gray-400">
                Enter your details to continue controlling your smart home.
              </p>
            </div>

            {/* Social Login Buttons */}
            <div className="mb-6 grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex h-12 items-center justify-center gap-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 text-sm font-semibold text-gray-900 dark:text-gray-100 transition-all hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span>Google</span>
              </button>
              <button
                type="button"
                className="flex h-12 items-center justify-center gap-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 text-sm font-semibold text-gray-900 dark:text-gray-100 transition-all hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor" />
                </svg>
                <span>Facebook</span>
              </button>
            </div>

            <div className="relative mb-6 flex items-center justify-center">
              <span className="absolute bg-white dark:bg-gray-800 px-2 text-xs font-medium uppercase text-gray-500">Or</span>
              <div className="h-px w-full bg-gray-300 dark:bg-gray-600"></div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Email Field */}
              <label className="flex flex-col">
                <p className="pb-2 text-sm font-medium leading-normal text-gray-700 dark:text-gray-300">
                  Email Address
                </p>
                <div className="relative">
                  <input
                    className={`h-12 w-full rounded-lg border px-4 pl-11 pr-4 text-sm ${
                      errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 transition-all`}
                    name="email"
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    type="email"
                    value={formData.email}
                  />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </label>

              {/* Password Field */}
              <label className="flex flex-col">
                <div className="flex items-center justify-between pb-2">
                  <p className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300">
                    Password
                  </p>
                </div>
                <div className="relative">
                  <input
                    className={`h-12 w-full rounded-lg border px-4 pl-11 pr-11 text-sm ${
                      errors.password ? "border-red-500 focus:ring-red-500" : "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 transition-all`}
                    name="password"
                    onChange={handleChange}
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                  />
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </label>

              <div className="flex justify-end">
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline transition-colors">
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                disabled={loading}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm font-bold text-white shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                type="submit"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Log In"
                )}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Don't have an account?{" "}
                <Link href="/signup" className="font-bold text-blue-600 hover:text-blue-700 hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>

          {/* Footer */}
          <footer className="text-xs text-center text-gray-500 dark:text-gray-400 pb-4">
            © 2025 Homeasy Inc. All rights reserved.
          </footer>
        </div>

        {/* Right Side: Hero Image */}
        <div className="hidden w-1/2 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 lg:block">
          <div className="relative h-full w-full overflow-hidden">
            <div className="absolute inset-0 bg-white/20 dark:bg-black/20 mix-blend-multiply" />
            <img
              alt="Modern living room with smart devices and minimalist furniture"
              className="h-full w-full object-cover"
              loading="lazy"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYV1gQgpyK_nyBAD1tdIVP2fB4OMMJs2TNERBy25Qj4By4F7ES21B17UyYCmTS8uhYDzsk5AiopcfuA2bON6cPb4F8Yj-DBcWFJNWig_hNQxV4Eg_17gT6wRypGSVKav4zFjRt-LFgMkQCfIPLgXra6tmHAKYPvCmTz66JEp-ksTG3Ft3s_JX8b0frTS8Jlbx574JdmNgucp2CEHM_H7KsXpyaqh_aPMwfSVxLOomFtr3pi-XXo_e3sku9PGgan_FBuoSj4jlQ8Iv2"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-8 text-white">
              <blockquote className="max-w-md">
                <p className="mb-4 text-xl font-semibold leading-snug">
                  "Smart living isn't just about technology, it's about
                  reclaiming your time and peace of mind."
                </p>
                <cite className="text-sm font-medium not-italic opacity-90">
                  — The Homeasy Vision
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-slide-up { animation: slide-up 0.6s ease-out; }
      `}</style>
    </section>
  );
}