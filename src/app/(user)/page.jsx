"use client";
import React from "react";
import {
  ArrowRight,
  AudioLinesIcon,
  Cctv,
  Lightbulb,
  Mail,
  Settings2,
  Speaker,
  Thermometer,
  Zap,
  CirclePlay,
  Leaf,
  Sun,
  Lock,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Cta from "@/components/Cta";
import Link from "next/link";

export default function page() {
  return (
    <section className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-display antialiased transition-colors duration-200">
      <main className="grow">
        {/* Hero Section */}
        <section className="relative px-4 py-8 md:px-10 md:py-12 lg:px-40 flex justify-center overflow-hidden">
          <div className="w-full max-w-7xl">
            <div className="@container">
              <div
                className="flex min-h-140 flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-2xl md:rounded-3xl items-center justify-center p-8 text-center relative overflow-hidden group "
                data-alt="Modern living room with smart lights turned on in blue and purple hues"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(17, 28, 33, 0.4) 0%, rgba(17, 28, 33, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCVQnvC5NqPv-eGeymAS0ASNcGSW6UDs20GQKGaYTB73F8NFqIkBdSK7yblvUCa7XpYj8BT-FOegZ8d1OpNB2-qOK-XuXHGIUiB9S2rOAstgI-lvrR-cZYnnqOjSyFFaqbIiTapgtGAQ6_q66X-DlK0KAMJxwApnP_gUjl7MbbdTL-Ul8-bUxdZcyvbWAfKykBRD156IEaLtAdMSaVsrkMnEE83HAdAIV6daav1mZnecwzmy-hMVAtNnv4hkx1g0ferBDbp2hgeIn0F")',
                }}
              >
                {/* Enhanced Overlay with Parallax Effect */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-700 ease-out"></div>

                {/* Subtle Particle Overlay for Ambient Glow (using CSS-only for performance) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-300 rounded-full blur-xl animate-ping delay-75"></div>
                  <div className="absolute top-20 right-20 w-3 h-3 bg-purple-400 rounded-full blur-2xl animate-pulse delay-150"></div>
                  <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-blue-500 rounded-full blur-lg animate-bounce delay-300"></div>
                </div>

                <div className="relative z-10 flex flex-col gap-8 max-w-2xl mx-auto px-4">
                  {/* Minimal Badge with Fade-In */}
                  <motion.span
                    className="inline-flex items-center py-1 px-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white text-xs font-medium uppercase tracking-widest w-fit mx-auto "
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                  >
                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>{" "}
                    Smart Living 2.0
                  </motion.span>

                  {/* Clean H1 with Subtle Gradient and Staggered Letters */}
                  <motion.h1
                    className="text-white text-4xl md:text-5xl lg:text-8xl font-light tracking-tight"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.7,
                          ease: "easeOut",
                          staggerChildren: 0.05,
                        },
                      },
                    }}
                  >
                    Your Home,
                    <br />
                    <motion.span
                      className="font-normal bg-linear-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                      variants={{
                        hidden: { opacity: 0, skewX: -10 },
                        visible: { opacity: 1, skewX: 0 },
                      }}
                    >
                      Reimagined.
                    </motion.span>
                  </motion.h1>

                  {/* Refined H2 with Increased Line Height for Breathing Room */}
                  <motion.p
                    className="text-gray-200 text-base md:text-lg font-normal leading-7 max-w-lg mx-auto"
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                  >
                    Experience intelligent living made simple. Control lighting,
                    security, and climate from one beautiful ecosystem.
                  </motion.p>
                </div>

                {/* Enhanced CTA Buttons with Improved Hover and Focus States */}
                <motion.div
                  className="relative z-10 flex flex-col sm:flex-row gap-3 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                >
                  <Link href="/products">
                    <motion.button
                      className="group relative flex items-center justify-center rounded-full h-11 px-6 bg-primary text-white text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-white/20"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center">
                        Shop Now
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      />
                    </motion.button>
                  </Link>

                  <motion.button
                    className="group flex items-center justify-center rounded-full h-11 px-6 bg-white/5 backdrop-blur-sm border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-white/20"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.span
                      className="flex items-center mr-2 text-lg transition-transform duration-300"
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 5 }}
                      aria-hidden="true"
                    >
                      <CirclePlay className="h-4 w-4" />
                    </motion.span>
                    Watch Demo
                  </motion.button>
                </motion.div>

                {/* Accessibility: Skip link for screen readers */}
                <a
                  href="#main-content"
                  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-1/2 focus:-translate-x-1/2 focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:text-black focus:z-50"
                >
                  Skip to main content
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories Header */}
        <section
          className="px-4 pt-10 md:px-10 lg:px-40 flex justify-center"
          id="products"
        >
          <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-end gap-4 border-b border-gray-200 dark:border-[#243b47] pb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-text-light dark:text-white mb-2">
                Explore Our Products
              </h2>
              <p className="text-text-muted-light dark:text-text-muted-dark text-base">
                Curated devices for every corner of your life.
              </p>
            </div>
            <Link
              className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all"
              href="/products"
            >
              View All Categories{" "}
              <ArrowRight className="material-symbols-outlined text-sm" />
            </Link>
          </div>
        </section>

        {/* Product Grid */}
        <section className="px-4 py-8 md:px-10 lg:px-40 flex justify-center">
          <div className="w-full max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="group cursor-pointer flex flex-col gap-3">
                <div className="overflow-hidden rounded-2xl relative aspect-4/5 shadow-sm">
                  <div
                    className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="Smart bulb changing colors in a modern lamp"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDl7ejN1SPHwkKjg24Fm_5rHVbJrWrGUao9qkD1NgjHJCNG7EyTuWURU_QgS_m29nxSHRjWD1atFwdcoz5puboc1Yhdtg5jn9DGtnLFySiFY97qv6MvphdQbm0qZCt22SqZxKEcdqy0vh0GCdvnDhLJtHtCMFO9eKI9QaWTI0x9vvE-8Q5MDa4sMjmDeLquoYxonX3HoUWz6pJ4s0YrTiM_ZaOLk_VxTV6wXF7YDQux6ZNAWFV3HWA1V0hP-FMJlB4pQMBfXto_B5Qx")',
                    }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Lightbulb className="material-symbols-outlined text-3xl mb-1" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-tight text-text-light dark:text-white group-hover:text-primary transition-colors">
                    Smart Lighting
                  </h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                    Set the mood instantly
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group cursor-pointer flex flex-col gap-3">
                <div className="overflow-hidden rounded-2xl relative aspect-4/5 shadow-sm">
                  <div
                    className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="Modern smart security camera mounted on a wall"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAEU0Hu5bFVZAG7_Kc3fjqePENcyqBovD1rFHzw4yMJX1PbryiATI4zFvVp82TItWmKBEePT2QyQ3RKPk0Ymrs_2XqEdYXGF-bcbec_HdRpcrYNaZALevC_rhxz5Rg9REZGGhUiaTEZq4x87xykXDfG7buGdr9trIqvYLeqM1G8I7NIpLQTVcFgRMTkXuvzbBhI1TynZFHKZWe3ua1pW2x4xsxVygwguNWqRbA4JkUJwEnyTJmARE9t9ldCK3-WLft141nWVvi_z11O")',
                    }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Cctv className="material-symbols-outlined text-3xl mb-1" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-tight text-text-light dark:text-white group-hover:text-primary transition-colors">
                    Security
                  </h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                    Protect what matters
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group cursor-pointer flex flex-col gap-3">
                <div className="overflow-hidden rounded-2xl relative aspect-4/5 shadow-sm">
                  <div
                    className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="Digital thermostat displaying temperature"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCIxhQhTj90CKipl4KRY3oWUv4EiTfvzXAkkQpEE7pH_4tOwQgDhvJAhHWs4NP94tzU57FHSCTOFV8xLO2LpGdB5pTfBbok7krKJcStX6Px7toG-iOo6x1xjtR47uClXANyFHq9wb5rXR36nC3sjW6nvTmTSGJ0RXLM1Y0Mc7eUXHVZ0cL_OXMcHF5GDfvoUQP9EPJL66SzxEYPGJ4Cs5VFexTJuotXVvuyTZ-MCYIvMJ-RMFwfAuEA33g0dm81x1WDbTzgBM9ePPkL")',
                    }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Thermometer className="material-symbols-outlined text-3xl mb-1" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-tight text-text-light dark:text-white group-hover:text-primary transition-colors">
                    Climate Control
                  </h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                    Perfect temperature
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="group cursor-pointer flex flex-col gap-3">
                <div className="overflow-hidden rounded-2xl relative aspect-4/5 shadow-sm">
                  <div
                    className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="Smart speaker on a wooden table"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCk2GFHHA7iMwEO0cn_3HQ_Wb3JKcfk_q_LtiSIpRFEhtQxb6s8rc-Mso3IyFAS1kPPSgak9oOsAWJkBcrqdJVbQj7qOSoqL-wMZDnEkQYCaVGsNYKJaoTyslR5dl_Ke3AhtBOY9qu0DzAXrNpsIoU4HE2Zub5l3N6dKqKI0lUpZfUf8ihVx8HIWK6WwaZ97887V0flM5jugqiR7Z9BtHxXJH4vN0dfjVsy43xwn65ilHMnx8FHodseqKsQHIEUlATp_YtXdAyX6jxt")',
                    }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Speaker className="material-symbols-outlined text-3xl mb-1" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-tight text-text-light dark:text-white group-hover:text-primary transition-colors">
                    Entertainment
                  </h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                    Immersive sound
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          className="px-4 py-16 md:px-10 lg:px-40 flex justify-center bg-white dark:bg-[#162127]"
          id="features"
        >
          <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="flex flex-col gap-8">
              <div>
                <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">
                  Why Choose Homeasy?
                </span>
                <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-text-light dark:text-white mb-4">
                  Innovation designed for
                  <span className="text-primary ml-2">comfort.</span>
                </h2>
                <p className="text-text-muted-light dark:text-text-muted-dark text-lg leading-relaxed">
                  We don't just sell devices; we sell a seamless lifestyle. Our
                  ecosystem is built to work together from the moment you plug
                  it in.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                {/* Feature Item */}
                <div className="flex gap-4 items-start">
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <AudioLinesIcon className="material-symbols-outlined text-primary text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-text-light dark:text-white mb-1">
                      Voice Control
                    </h4>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                      Compatible with Alexa, Google Assistant, and Siri. Just
                      say the word.
                    </p>
                  </div>
                </div>

                {/* Feature Item */}
                <div className="flex gap-4 items-start">
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Zap className="material-symbols-outlined text-primary text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-text-light dark:text-white mb-1">
                      Energy Savings
                    </h4>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                      Smart scheduling can reduce your energy bill by up to 25%
                      annually.
                    </p>
                  </div>
                </div>

                {/* Feature Item */}
                <div className="flex gap-4 items-start">
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Settings2 className="material-symbols-outlined text-primary text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-text-light dark:text-white mb-1">
                      Instant Setup
                    </h4>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                      No technician needed. Up and running in minutes with our
                      intuitive app.
                    </p>
                  </div>
                </div>
              </div>

              <button className="flex w-fit cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary dark:bg-white text-white dark:text-surface-dark text-base font-bold transition-transform hover:scale-105 mt-4">
                Learn More
              </button>
            </div>

            {/* Features Image */}
            <div className="relative">
              <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10 bg-surface-dark/5">
                <div
                  className="w-full h-full bg-cover bg-center"
                  data-alt="Person using a smartphone app to control smart home devices"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_Gpn1G-iH3vHKO-TwRgDVdOo7hadaW02-gm60GS4yLW4W6swMB8Z00Hyow1PvHeG8aI_z1PR9ssYXgE0o2fZky2-npgDShMERBlwtPfhi3JFgK3Kc4ONHncUwPZ27-zE96MR11jeNV5RLWz_C01fJ2X5Df8px0rCXk1J27QW5Lr6nSA3lcHhZp5BTYZXbxtq-MtRGh8DWJeUCegiPVehHVFF_OfgeIDZJxh3LKT4m8mYHoYi14qUBuS_l_-LjQZrykaBny2H83bey")',
                  }}
                ></div>

                {/* Overlay UI */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold">Living Room</span>
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs opacity-80">Temperature</span>
                    <span className="text-lg font-bold">72°F</span>
                  </div>
                </div>
              </div>

              <div className="absolute -top-10 -right-10 w-2/3 h-2/3 bg-linear-to-br from-primary to-cyan-400 rounded-full blur-[100px] opacity-20 z-0"></div>
            </div>
          </div>
        </section>

        <section className="py-10  border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-center text-sm font-semibold leading-8 text-slate-500 dark:text-slate-400 mb-8">
              INTEGRATES SEAMLESSLY WITH
            </p>
            <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 opacity-60 ">
              <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 flex justify-center items-center text-xl  gap-2 font-bold font-sans text-slate-800 dark:text-white">
                <img src="./icon/google-nest.png" alt="" />
                Nest
              </div>
              <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 flex justify-center items-center gap-2 text-xl font-bold font-sans text-slate-800 dark:text-white">
                <img src="./icon/homekit.png" alt="" />
                HomeKit
              </div>
              <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 flex justify-center items-center gap-2 text-xl font-bold font-sans text-slate-800 dark:text-white">
                <img src="./icon/alexa.png" alt="" /> Alexa
              </div>
              <div className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 flex justify-center items-center gap-2 text-xl font-bold font-sans text-slate-800 dark:text-white">
                <img src="./icon/light-blub.png" alt="" /> Hue
              </div>
              <div className=" col-span-2  max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 flex justify-center items-center gap-2 text-xl font-bold font-sans text-slate-800 dark:text-white">
                <img src="./icon/wifi-smart.png" alt="" /> SmartThings
              </div>
            </div>
          </div>
        </section>

        <div className=" bg-white py-16">
          <div className="max-w-7xl mx-auto relative rounded-xl bg-slate-800 shadow-2xl overflow-hidden aspect-video md:aspect-21/9 group border border-white/5">
            <img
              alt="App screenshot"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out"
              height="1442"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVQnvC5NqPv-eGeymAS0ASNcGSW6UDs20GQKGaYTB73F8NFqIkBdSK7yblvUCa7XpYj8BT-FOegZ8d1OpNB2-qOK-XuXHGIUiB9S2rOAstgI-lvrR-cZYnnqOjSyFFaqbIiTapgtGAQ6_q66X-DlK0KAMJxwApnP_gUjl7MbbdTL-Ul8-bUxdZcyvbWAfKykBRD156IEaLtAdMSaVsrkMnEE83HAdAIV6daav1mZnecwzmy-hMVAtNnv4hkx1g0ferBDbp2hgeIn0F"
              width="2432"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background-dark via-background-dark/20 to-transparent"></div>
            <div className="absolute top-8 left-8 hidden md:block animate-float-slow">
              <div className="glass-panel p-4 rounded-2xl flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  <Leaf className="material-symbols-outlined" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">
                    Energy Savings
                  </p>
                  <p className="text-white font-bold text-lg">
                    -24%{" "}
                    <span className="text-xs font-normal text-slate-400">
                      this month
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row gap-6 md:items-end justify-between">
              <div className="glass-panel p-6 rounded-2xl max-w-sm backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-yellow-500/20 rounded-lg text-yellow-400">
                    <Sun className="material-symbols-outlined" />
                  </div>
                  <div>
                    <span className="text-white font-bold block">
                      Morning Scene
                    </span>
                    <span className="text-slate-400 text-xs">
                      Active since 7:00 AM
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <span className="text-xs px-2 py-1 bg-white/10 rounded text-slate-300 border border-white/5">
                    Blinds 100%
                  </span>
                  <span className="text-xs px-2 py-1 bg-white/10 rounded text-slate-300 border border-white/5">
                    Temp 72°F
                  </span>
                  <span className="text-xs px-2 py-1 bg-white/10 rounded text-slate-300 border border-white/5">
                    Coffee ON
                  </span>
                </div>
              </div>
              <div className="hidden md:flex gap-4">
                <div className="glass-panel p-4 rounded-2xl flex flex-col items-center min-w-27.5 hover:bg-white/10 transition-colors cursor-pointer group/card">
                  <Lock className=" text-white mb-2 " />

                  <span className="text-white text-xs font-medium">
                    Front Door
                  </span>
                  <span className="text-emerald-400 text-[10px] mt-1">
                    Locked
                  </span>
                </div>
                <div className="glass-panel p-4 rounded-2xl flex flex-col items-center min-w-27.5 hover:bg-white/10 transition-colors cursor-pointer group/card">
                  <Thermometer className=" text-white mb-2 " />

                  <span className="text-white text-xs font-medium">
                    Living Room
                  </span>
                  <span className="text-orange-400 text-[10px] mt-1">72°F</span>
                </div>
                <div className="glass-panel p-4 rounded-2xl flex flex-col items-center min-w-27.5 hover:bg-white/10 transition-colors cursor-pointer group/card">
                  <Lightbulb className=" text-white mb-2" />

                  <span className="text-white text-xs font-medium">
                    Kitchen
                  </span>
                  <span className="text-yellow-400 text-[10px] mt-1">
                    On (80%)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials – Elevated Minimal Design */}

        <main className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 transition-colors duration-300">
          <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
            <div className="mb-16 lg:mb-24">
              <h2 className="serif-heading text-5xl lg:text-6xl font-semibold mb-6 text-slate-900 dark:text-white">
                Why choose <span className="text-primary">us</span>?
              </h2>
              <p className="text-lg lg:text-xl text-slate-500 dark:text-slate-400 max-w-2xl font-light">
                Everyday we work hard to make life of our clients better and
                happier
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div className="space-y-16 lg:space-y-20">
                <div className="flex gap-6 items-start group">
                  <div className="quote-mark text-primary -mt-4">“</div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-lg">
                      Emergency response time is one hour or less guaranteed. A
                      live person will answer your call, or you can enter a
                      service ticket yourself.
                    </p>
                    <h4 className="font-bold tracking-widest uppercase text-sm text-slate-900 dark:text-white">
                      Nina Larson
                    </h4>
                  </div>
                </div>
                <div className="flex gap-6 items-start group">
                  <div className="quote-mark text-primary -mt-4">“</div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-lg">
                      We take support one step further by tailoring our replies
                      to suit your knowledge, expectations and personality.
                    </p>
                    <h4 className="font-bold tracking-widest uppercase text-sm text-slate-900 dark:text-white">
                      Mike Perry
                    </h4>
                  </div>
                </div>
                <div className="flex gap-6 items-start group">
                  <div className="quote-mark text-primary -mt-4">“</div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-lg">
                      We begin each web development project by gaining a solid
                      understanding of who you are, what you do and why you do
                      it.
                    </p>
                    <h4 className="font-bold tracking-widest uppercase text-sm text-slate-900 dark:text-white">
                      Lana Hudson
                    </h4>
                  </div>
                </div>
                <div className="flex gap-6 items-start group">
                  <div className="quote-mark text-primary -mt-4">“</div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-lg">
                      We begin each web development project by gaining a solid
                      understanding of who you are, what you do and why you do
                      it.
                    </p>
                    <h4 className="font-bold tracking-widest uppercase text-sm text-slate-900 dark:text-white">
                      Lana Hudson
                    </h4>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="overflow-hidden rounded-lg shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                  <img
                    alt="Interior design with teal wall and circular wire art"
                    className="w-full h-auto object-cover aspect-4/5 lg:aspect-3/4"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG3DkmPWrDJDKGpz6MSTlRU1eGfY6E0x9-3OQoIu2z8S054sXD6qy4PFZI4PYQb_uFxQ63s6fCze2Tx2xW0S2KVI6ZULmxqyjkc5of3eBdo6DA7_94y4RO7dwlI18O5yRuKGDoJG634kaoqyJkMXxn9EvHm8fOQXUXybcUamTernrtDGB4I8MTCGYNJQgKa1F3JmWXBpNYQ255ekU7XR4yvvORgRketmO476GR-yt09B1Jv4KVpCuyFAei6YS-5u1Oz2uJrZV9CxBc"
                  />
                  <div className="absolute inset-0 bg-primary/5 mix-blend-multiply pointer-events-none"></div>
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white dark:bg-accent-dark p-6 shadow-xl rounded-lg hidden xl:block max-w-50">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
                    Our commitment
                  </p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    Delivering excellence since 2014
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Cta />
      </main>
    </section>
  );
}
