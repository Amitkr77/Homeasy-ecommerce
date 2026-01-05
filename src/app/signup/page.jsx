"use client";

import React, { useState } from "react";
import { BookOpen, Mail, Lock, RotateCcw, Eye, EyeOff, Star, User, Phone, Check } from "lucide-react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    newsletter: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[^a-zA-Z\d]/.test(password)) strength += 1;
    return Math.min(strength, 5); // Cap at 5 for meter
  };

  const getStrengthColor = (strength) => {
    if (strength < 2) return "bg-red-500";
    if (strength < 4) return "bg-yellow-500";
    return "bg-green-500";
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!agreeTerms) newErrors.terms = "You must agree to the terms";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Account created:", formData);
    alert("Account created successfully!"); // Replace with redirect
    setLoading(false);
  };

  const passwordStrength = calculatePasswordStrength(formData.password);
  const strengthBars = Array.from({ length: 4 }, (_, i) => (
    <div
      key={i}
      className={`h-1 rounded-full transition-all duration-300 ${
        i < passwordStrength ? getStrengthColor(passwordStrength) : "bg-gray-200 dark:bg-gray-700"
      }`}
    />
  ));

  return (
    <section className="bg-gray-50 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100 antialiased min-h-screen">
      <div className="flex min-h-screen w-full flex-row overflow-hidden">
        {/* Left Side: Hero / Visual */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-gray-900 items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Modern smart home living room with cozy lighting and clean furniture"
              className="h-full w-full object-cover opacity-80 animate-fade-in"
              loading="lazy"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBw7kE5aptUuqsbf_oNQpJtTDMom7HyMtmexdN_qDo9PUcvMEREBeVCi5tCSl7aEWWpA5U8uMcNyOLZ4Ex1p5HYq2aKCu7UWYCvGMPQpIdAppO5aAYvOtjB1x7JJcHjmEOO4VSaLJNcPCJKTAXZc0EQTq6GqjPePfx8ApRFxcuewLjIXPegBmEbBSwOlhyiQjFp1wXN2CFfYgiJgXfkK2FqTID5jQ8IDyBw_JmJW4BLJwkTVSFoFRl0HzuJLjui8pzZcknTBG5M0gh"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>
          <div className="relative z-10 p-12 max-w-lg text-white animate-slide-up">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 backdrop-blur-sm border border-white/10">
              <BookOpen className="h-6 w-6 text-blue-400" />
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
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-300">
                  Trusted by 10k+ families
                </span>
              </div>
            </div>
            {/* Additional Feature: Quick Stats */}
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">99.9%</div>
                <div>Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">24/7</div>
                <div>Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">1M+</div>
                <div>Devices</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Sign Up Form */}
        <div className="flex w-full lg:w-1/2 flex-col bg-white dark:bg-gray-800 overflow-y-auto">
          <div className="flex h-full flex-col justify-center px-6 py-12 lg:px-20 xl:px-24">
            {/* Mobile Logo */}
            <div className="lg:hidden mb-8 flex items-center gap-2 justify-center">
              <div className="size-8 text-blue-600">
                <svg
                  className="h-full w-full"
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Homeasy</h2>
            </div>

            <div className="mb-8">
              <h1 className="text-3xl font-black leading-tight tracking-tight text-gray-900 dark:text-white mb-2">
                Create your account
              </h1>
              <p className="text-base text-gray-600 dark:text-gray-400">
                Start automating your home today. Join us now for a smarter life.
              </p>
            </div>

            {/* Social Sign Up */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button
                type="button"
                className="flex items-center justify-center gap-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-gray-100 transition-all hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="hidden sm:inline">Google</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-gray-100 transition-all hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    fill="#1877F2"
                  />
                </svg>
                <span className="hidden sm:inline">Facebook</span>
              </button>
            </div>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white dark:bg-gray-800 px-4 text-gray-500">Or sign up with email</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Email Field */}
              <label className="flex flex-col">
                <p className="text-gray-700 dark:text-gray-300 text-sm font-medium leading-normal pb-2">
                  Email Address <span className="text-red-500">*</span>
                </p>
                <div className="relative">
                  <input
                    className={`w-full h-12 px-4 pl-11 pr-4 rounded-lg border ${
                      errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                    name="email"
                    onChange={handleChange}
                    placeholder="name@example.com"
                    type="email"
                    value={formData.email}
                  />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </label>

              {/* Phone Field (New Feature) */}
              <label className="flex flex-col">
                <p className="text-gray-700 dark:text-gray-300 text-sm font-medium leading-normal pb-2">
                  Phone Number (Optional)
                </p>
                <div className="relative">
                  <input
                    className="w-full h-12 px-4 pl-11 pr-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    name="phone"
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    type="tel"
                    value={formData.phone}
                  />
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </label>

              {/* Password Field */}
              <label className="flex flex-col">
                <p className="text-gray-700 dark:text-gray-300 text-sm font-medium leading-normal pb-2">
                  Password <span className="text-red-500">*</span>
                </p>
                <div className="relative">
                  <input
                    className={`w-full h-12 px-4 pl-11 pr-11 rounded-lg border ${
                      errors.password ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                    name="password"
                    onChange={handleChange}
                    placeholder="Create a password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                  />
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {/* Strength Meter */}
                <div className="flex gap-1 mt-3">
                  {strengthBars}
                </div>
                <p className={`text-xs mt-2 ${passwordStrength >= 3 ? "text-green-600" : "text-gray-500"}`}>
                  {passwordStrength < 3 && "Weak"} {passwordStrength >= 3 && passwordStrength < 5 && "Good"}
                  {passwordStrength >= 5 && "Strong"} password
                </p>
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </label>

              {/* Confirm Password Field */}
              <label className="flex flex-col">
                <p className="text-gray-700 dark:text-gray-300 text-sm font-medium leading-normal pb-2">
                  Confirm Password <span className="text-red-500">*</span>
                </p>
                <div className="relative">
                  <input
                    className={`w-full h-12 px-4 pl-11 pr-4 rounded-lg border ${
                      errors.confirmPassword ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                    name="confirmPassword"
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    type="password"
                    value={formData.confirmPassword}
                  />
                  <RotateCcw className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
              </label>

              {/* Newsletter Checkbox (New Feature) */}
              <label className="flex items-center gap-3 pt-2">
                <input
                  className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 focus:ring-offset-white dark:focus:ring-offset-gray-800"
                  name="newsletter"
                  onChange={handleChange}
                  type="checkbox"
                  checked={formData.newsletter}
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Receive tips on smart home automation and exclusive offers.
                </span>
              </label>

              {/* Terms Checkbox */}
              <div className="pt-2">
                <label className="flex gap-x-3 items-start cursor-pointer group">
                  <input
                    className={`mt-1 h-5 w-5 rounded border-2 ${
                      errors.terms ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                    } bg-transparent text-blue-600 checked:bg-blue-600 checked:border-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 focus:outline-none transition-colors ${
                      !agreeTerms && errors.terms ? "focus:ring-red-500" : ""
                    }`}
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                  />
                  <p className="text-gray-700 dark:text-gray-300 text-sm font-normal leading-relaxed">
                    I agree to the{" "}
                    <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                      Privacy Policy
                    </a>
                    .<span className="text-red-500 ml-1">*</span>
                  </p>
                </label>
                {errors.terms && <p className="text-red-500 text-xs mt-1 ml-8">{errors.terms}</p>}
              </div>

              {/* Submit Button */}
              <button
                disabled={!agreeTerms || loading}
                className="flex w-full items-center justify-center gap-2 rounded-lg h-12 px-5 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white text-base font-bold tracking-wide transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-2"
                type="submit"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Creating...
                  </>
                ) : (
                  <span>Create Account</span>
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <a href="#" className="font-bold text-blue-600 hover:text-blue-800 hover:underline">
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-slide-up { animation: slide-up 0.8s ease-out; }
      `}</style>
    </section>
  );
}