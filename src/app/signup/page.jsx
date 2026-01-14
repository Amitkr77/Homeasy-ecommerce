"use client";

import React, { useState, useEffect } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Loader2,
  Star,
  Home,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [shake, setShake] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  useEffect(() => {
    const nameInput = document.querySelector('input[name="fullName"]');
    nameInput?.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
      setShake(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!agreeTerms) {
      newErrors.terms =
        "You must agree to the Terms of Service and Privacy Policy";
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
      const payload = {
        name: formData.fullName.trim(),
        ...(formData.email && { email: formData.email.trim() }),
        password: formData.password,
      };

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrors({
          general:
            data.message || "Failed to create account. Please try again.",
        });
        setShake(true);
        return;
      }

      // Success - usually redirect to login or auto-login
      localStorage.setItem("signup-token", data.token ?? "");
      window.location.href = "/";
    } catch (err) {
      setErrors({ general: "Something went wrong. Please try again later." });
      setShake(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* ================= LEFT - FORM ================= */}
        <div
          className="relative hidden lg:block overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2940')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent z-10" />
          {/* <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2940"
            alt="Modern smart home interior with automation"
            className="h-full w-full object-cover"
            loading="eager"
          /> */}

          <div className="flex h-full flex-col justify-center px-16 py-24 relative z-20 text-white">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 backdrop-blur-sm border border-white/10">
              <Home className="h-6 w-6 text-blue-400" />
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight mb-4">
              Control your home from anywhere.
            </h1>
            <p className="text-lg text-gray-300 font-normal leading-relaxed mb-8">
              Join thousands of users who have simplified their lives with
              Homeasy's intelligent automation. Secure, seamless, and smart.
            </p>
            <div className="flex gap-6 mb-8">
              <div className="flex -space-x-2">
                {[
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDSLPDJ2FrTtYBJwBAipmiXMlfdO_1JidNkMlyLLoud_20o1Js_pKFYTJ0FqKTbQP5jiMTuuHBHmAC6Rfoddn-XoUXFTolZ-auPQOjo1SuX9YyW_MVS__xdfjBRDviiJdERkNk5_rAI1wJ9CNnei0fYYGzprg0tX-AzhssNvs3SHUspDdxC6hAEXQ4nqmL1wTuaixwHsxpvj4hxga3wnCIGWeAmvq6joudk1hmzk4d_B3lZD7US3szV5JF7-3B1BswvBR_bN1EFgG55",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAyGsGz9Icdt5-N-NdbBnik8e4nFj6EZG6p9vCQNK0lVj3NYtI4FrBJdYpYwnvoKhh7TpJSvVcVId4n3mbH3XUNDQcmjjMj-tP9PiKxgYOqGJVRngZql7VZpKFskXY95DidoG34UHySlLG3UMNmQq34nOwV4_2nABS5EefB26JPUlmUYtNc0qjcwoQMfRcooiX3uztl_kv2mEUzPDMUEdFe_X5eImt3vJzH3c2PX_jLEqljvmgHLF7bOwo5-6stqmqOsVTgUQG64gE7",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBVrKO6mZL4J2tTWo956PFwdUXs0pOM5m81Y0LLX06nT2DfoTaeP6oAX7zR_JlyVPTr4zHgF0CT1T9df2F9UiDcT0v2bMzlIDVMwl2x5ErfLugljtwEWVG1sS6ZPuSZ0nyEcRAe3HJRyPwOQcGq6aHJAwgJhy3QB2Qpv2Io8fpjv9a9OdqMod-4zRkeryv52o8hFVKeMB_2Ca1vn7WM-r5FFGRjOw-I-JdZwE_1_BrZNFgcNjEp0zEpiJCW48savoabWosszNBAxEyG",
                ].map((src, i) => (
                  <img
                    key={i}
                    alt="User avatar"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white/80"
                    src={src}
                  />
                ))}
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-300">
                  Trusted by 10k+ families
                </span>
              </div>
            </div>
            {/* Additional Feature: Quick Stats */}
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center bg-black/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div>Uptime</div>
              </div>
              <div className="text-center bg-black/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div>Support</div>
              </div>
              <div className="text-center bg-black/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">1M+</div>
                <div>Devices</div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT - HERO IMAGE ================= */}

        <div className="flex flex-col justify-center px-6 py-12 lg:px-16 xl:px-24 bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl">
          <div className="mx-auto w-full max-w-md">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 dark:text-gray-300 text-blue-600 dark:hover:text-blue-400 transition-colors"
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
                Create your account
              </h1>
              <p className="mt-3 text-gray-400 dark:text-gray-400">
                Join Homeasy and start controlling your smart home
              </p>

              {errors.general && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 rounded-lg bg-red-50 dark:bg-red-900/30 p-4 text-sm text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800/50"
                >
                  {errors.general}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Full Name *
                  </label>
                  <div className="relative mt-1.5">
                    <User className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`block w-full rounded-lg border pl-11 pr-4 py-3 text-sm transition-all
                        ${
                          errors.fullName
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
                            : "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500/30"
                        }
                        bg-white/80 dark:bg-gray-800/70   focus:outline-none focus:ring-4`}
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email - Optional */}
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
                      value={formData.email}
                      onChange={handleChange}
                      className={`block w-full rounded-lg border pl-11 pr-4 py-3 text-sm transition-all
                        ${
                          errors.email
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
                            : "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500/30"
                        }
                        bg-white/80 dark:bg-gray-800/70   focus:outline-none focus:ring-4`}
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
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Password *
                  </label>
                  <div className="relative mt-1.5">
                    <Lock className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className={`block w-full rounded-lg border pl-11 pr-11 py-3 text-sm transition-all
                        ${
                          errors.password
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
                            : "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500/30"
                        }
                        bg-white/80 dark:bg-gray-800/70   focus:outline-none focus:ring-4`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
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

                {/* Confirm Password */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Confirm Password *
                  </label>
                  <div className="relative mt-1.5">
                    <Lock className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`block w-full rounded-lg border pl-11 pr-11 py-3 text-sm transition-all
                        ${
                          errors.confirmPassword
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
                            : "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500/30"
                        }
                        bg-white/80 dark:bg-gray-800/70   focus:outline-none focus:ring-4`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start">
                  <input
                    id="terms"
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => {
                      setAgreeTerms(e.target.checked);
                      if (errors.terms)
                        setErrors((prev) => ({ ...prev, terms: "" }));
                    }}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                  />
                  <label
                    htmlFor="terms"
                    className="ml-3 text-sm text-gray-600 dark:text-gray-400"
                  >
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="text-blue-600 hover:text-blue-500 dark:text-blue-400 hover:underline"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-blue-600 hover:text-blue-500 dark:text-blue-400 hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {errors.terms && (
                  <p className="text-xs text-red-600 dark:text-red-400">
                    {errors.terms}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading || !agreeTerms}
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
                  {isLoading ? "Creating account..." : "Create account"}
                </button>
              </form>

              <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
