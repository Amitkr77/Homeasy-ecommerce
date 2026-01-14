"use client";

import React, { useState, useEffect } from "react";
import { Eye, EyeOff, Mail, Lock, Loader2, Home } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion"; // optional but recommended

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [shake, setShake] = useState(false);

  // Auto-focus email on mount
  useEffect(() => {
    const emailInput = document.querySelector('input[name="email"]');
    emailInput?.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
      setShake(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrors({
          general: data.message || "Invalid email or password",
        });
        setShake(true);
        setTimeout(() => setShake(false), 600);
        return;
      }

      // Success
      localStorage.setItem("token", data.token ?? "");
      window.location.href = "/";
    } catch (err) {
      setErrors({ general: "Something went wrong. Please try again." });
      setShake(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* ================= LEFT - FORM ================= */}
        <div className="flex flex-col justify-center px-6 py-12 lg:px-16 xl:px-24 bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl">
          <div className="mx-auto w-full max-w-md">
            {/* Logo / Home */}
            <Link
              href="/"
              className="mb-10 inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Home className="h-6 w-6" />
              <span className="font-semibold">Homeasy</span>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Welcome back
              </h1>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Sign in to control your smart home
              </p>

              {/* Error banner (general) */}
              {errors.general && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 rounded-lg bg-red-50 dark:bg-red-900/30 p-4 text-sm text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800/50"
                >
                  {errors.general}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email address
                  </label>
                  <div className="relative mt-1.5">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`block w-full rounded-lg border pl-11 pr-4 py-3 text-sm transition-all
                        ${
                          errors.email
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
                            : "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500/30"
                        }
                        bg-white/80 dark:bg-gray-800/70 
                        focus:outline-none focus:ring-4
                      `}
                      placeholder="name@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Password
                    </label>
                    <Link
                      href="/forgot-password"
                      className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <div className="relative mt-1.5">
                    <Lock className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className={`block w-full rounded-lg border pl-11 pr-11 py-3 text-sm transition-all
                        ${
                          errors.password
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
                            : "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500/30"
                        }
                        bg-white/80 dark:bg-gray-800/70 
                        focus:outline-none focus:ring-4
                      `}
                      placeholder="••••••••"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                      tabIndex={-1}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>

                  {errors.password && (
                    <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`
                    relative flex w-full items-center justify-center gap-2.5 rounded-lg 
                    bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg
                    hover:bg-blue-700 focus-visible:outline
                    focus-visible:outline-blue-500 focus-visible:outline-offset-2
                    disabled:opacity-60 disabled:cursor-not-allowed
                    transition-all duration-200
                    ${shake ? "animate-shake" : ""}
                  `}
                >
                  {isLoading && <Loader2 className="h-5 w-5 animate-spin" />}
                  {isLoading ? "Signing in..." : "Sign in"}
                </button>
              </form>

              <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  Create account
                </Link>
              </p>
            </motion.div>
          </div>
        </div>

        {/* ================= RIGHT - HERO IMAGE ================= */}
        <div className="relative hidden lg:block overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent z-10" />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYV1gQgpyK_nyBAD1tdIVP2fB4OMMJs2TNERBy25Qj4By4F7ES21B17UyYCmTS8uhYDzsk5AiopcfuA2bON6cPb4F8Yj-DBcWFJNWig_hNQxV4Eg_17gT6wRypGSVKav4zFjRt-LFgMkQCfIPLgXra6tmHAKYPvCmTz66JEp-ksTG3Ft3s_JX8b0frTS8Jlbx574JdmNgucp2CEHM_H7KsXpyaqh_aPMwfSVxLOomFtr3pi-XXo_e3sku9PGgan_FBuoSj4jlQ8Iv2"
            alt="Modern smart home living room"
            className="h-full w-full object-cover"
            loading="eager"
          />

          <div className="absolute bottom-0 left-0 right-0 z-20 p-10 text-white">
            <blockquote className="max-w-lg">
              <p className="text-2xl font-medium leading-relaxed">
                "Smart living isn't just about technology — it's about
                reclaiming your time and peace of mind."
              </p>
              <footer className="mt-4 text-sm opacity-90">
                — The Homeasy Vision
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          20%,
          60% {
            transform: translateX(-8px);
          }
          40%,
          80% {
            transform: translateX(8px);
          }
        }
        .animate-shake {
          animation: shake 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        }
      `}</style>
    </div>
  );
}
