import {
  BadgeCheckIcon,
  Leaf,
  Lightbulb,
  Linkedin,
  PaintbrushVertical,
  Rocket,
  Trophy,
  Mail,
} from "lucide-react";
import React from "react";

export default function page() {
  return (
    <section className="bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark overflow-x-hidden antialiased font-display">
      <main className="flex flex-col w-full">
        {/* <!-- Hero Section --> */}
        <section className="relative w-full py-16 md:py-24 px-6">
          <div className="max-w-[960px] mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1 flex flex-col gap-6 text-left">
                <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-text-main-light dark:text-text-main-dark">
                  Creating the Home of Tomorrow, Today.
                </h1>
                <p className="text-lg text-text-sec-light dark:text-text-sec-dark leading-relaxed">
                  At Homeasy, we believe technology should serve you, not the
                  other way around. Our journey began with a simple idea:
                  simplify life through intelligent automation.
                </p>
                <div className="flex flex-wrap gap-4 mt-2">
                  <button className="bg-primary hover:bg-primary/90 text-white h-12 px-6 rounded-lg text-base font-bold transition-all">
                    Our Story
                  </button>
                  <button className="bg-border-light/30 dark:bg-border-dark/30 hover:bg-border-light/50 dark:hover:bg-border-dark/50 text-text-main-light dark:text-text-main-dark h-12 px-6 rounded-lg text-base font-bold transition-all">
                    Join the Team
                  </button>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_eZpjl-9Tkqt9vZWVqEi-utQJ4H0uowDqOnW0AW9N6-Zq8hIuRTZy4w5vIO-hbd4cibQ2pBhxMDZaKXfr0CupjI_QzAJhRAfGuX6mLN6v_6r-dZ2n72RM4Y_QBmDeMLHAJbM4z6Ki1fDV85yutOGycDxXNDIUOKxSomfiq7SjaQxbfeIYltNozUdSHAWBGaGUpml1pzDmXm61u7rRG0LlqvC7bsLonjRIIptypAVIYZxLGG7BFkkb2bC2zKCkFOGgC0Uzi96oBTuy')",
                  }}
                  className="w-full aspect-square md:aspect-[4/3] bg-cover bg-center rounded-2xl shadow-xl dark:shadow-none"
                  data-alt="Modern bright living room with minimalist furniture and smart home devices"
                ></div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Stats Section --> */}
        <section className="w-full px-6 py-12 bg-white dark:bg-card-dark border-y border-border-light dark:border-border-dark">
          <div className="max-w-[960px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2 p-6 rounded-xl bg-background-light dark:bg-background-dark/50 border border-border-light dark:border-border-dark/50 hover:border-primary/50 transition-colors">
                <p className="text-text-sec-light dark:text-text-sec-dark font-medium">
                  Years of Innovation
                </p>
                <p className="text-4xl font-black text-text-main-light dark:text-text-main-dark">
                  5
                </p>
              </div>
              <div className="flex flex-col gap-2 p-6 rounded-xl bg-background-light dark:bg-background-dark/50 border border-border-light dark:border-border-dark/50 hover:border-primary/50 transition-colors">
                <p className="text-text-sec-light dark:text-text-sec-dark font-medium">
                  Active Devices
                </p>
                <p className="text-4xl font-black text-text-main-light dark:text-text-main-dark">
                  1M+
                </p>
              </div>
              <div className="flex flex-col gap-2 p-6 rounded-xl bg-background-light dark:bg-background-dark/50 border border-border-light dark:border-border-dark/50 hover:border-primary/50 transition-colors">
                <p className="text-text-sec-light dark:text-text-sec-dark font-medium">
                  Countries Served
                </p>
                <p className="text-4xl font-black text-text-main-light dark:text-text-main-dark">
                  50+
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Mission & Values --> */}
        <section className="w-full px-6 py-20">
          <div className="max-w-[960px] mx-auto flex flex-col gap-12">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-text-main-light dark:text-text-main-dark">
                Our Mission &amp; Values
              </h2>
              <p className="text-lg text-text-sec-light dark:text-text-sec-dark max-w-2xl">
                We are driven by a commitment to quality, privacy, and
                user-centric design in everything we build.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* <!-- Value 1 --> */}
              <div className="flex flex-col gap-4 p-6 rounded-xl bg-white dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Lightbulb className="material-symbols-outlined text-3xl" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">
                    Intelligent Living
                  </h3>
                  <p className="text-sm text-text-sec-light dark:text-text-sec-dark leading-relaxed">
                    Homes that learn from your habits to save energy and
                    increase comfort automatically.
                  </p>
                </div>
              </div>
              {/* <!-- Value 2 --> */}
              <div className="flex flex-col gap-4 p-6 rounded-xl bg-white dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <BadgeCheckIcon className="material-symbols-outlined text-3xl" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">
                    Uncompromised Security
                  </h3>
                  <p className="text-sm text-text-sec-light dark:text-text-sec-dark leading-relaxed">
                    Bank-grade encryption for all your data and device
                    communications ensuring privacy.
                  </p>
                </div>
              </div>
              {/* <!-- Value 3 --> */}
              <div className="flex flex-col gap-4 p-6 rounded-xl bg-white dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Leaf className="material-symbols-outlined text-3xl" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">
                    Sustainable Tech
                  </h3>
                  <p className="text-sm text-text-sec-light dark:text-text-sec-dark leading-relaxed">
                    Eco-friendly manufacturing and energy-saving algorithms
                    built-in from the start.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Timeline Section --> */}
        <section className="w-full px-6 py-20 bg-white dark:bg-card-dark">
          <div className="max-w-[800px] mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-text-main-light dark:text-text-main-dark">
                Our Journey
              </h2>
            </div>
            <div className="grid grid-cols-[60px_1fr] gap-x-6 md:gap-x-10">
              {/* <!-- Step 1 --> */}
              <div className="flex flex-col items-center pt-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary border-2 border-primary z-10 bg-white dark:bg-card-dark">
                  <PaintbrushVertical className="material-symbols-outlined" />
                </div>
                <div className="w-0.5 bg-border-light dark:bg-border-dark h-full min-h-[80px]"></div>
              </div>
              <div className="pb-12 pt-3">
                <div className="flex flex-col gap-1">
                  <span className="text-primary font-bold text-sm uppercase tracking-wider">
                    2018
                  </span>
                  <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">
                    Founded in a Garage
                  </h3>
                  <p className="text-text-sec-light dark:text-text-sec-dark mt-2">
                    Two engineers frustrated with complex home hubs decided to
                    build something better.
                  </p>
                </div>
              </div>
              {/* <!-- Step 2 --> */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 bg-border-light dark:bg-border-dark h-full min-h-[20px]"></div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary border-2 border-primary z-10 bg-white dark:bg-card-dark my-2">
                  <Rocket className="material-symbols-outlined" />
                </div>
                <div className="w-0.5 bg-border-light dark:bg-border-dark h-full min-h-[80px]"></div>
              </div>
              <div className="py-12">
                <div className="flex flex-col gap-1">
                  <span className="text-primary font-bold text-sm uppercase tracking-wider">
                    2020
                  </span>
                  <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">
                    First Smart Hub Launch
                  </h3>
                  <p className="text-text-sec-light dark:text-text-sec-dark mt-2">
                    The Homeasy One launched to critical acclaim, simplifying
                    connection for 100+ brands.
                  </p>
                </div>
              </div>
              {/* <!-- Step 3 --> */}
              <div className="flex flex-col items-center pb-2">
                <div className="w-0.5 bg-border-light dark:bg-border-dark h-full min-h-[80px]"></div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full  text-primary border-2 border-primary z-10 bg-white dark:bg-card-dark">
                  <Trophy className="material-symbols-outlined" />
                </div>
              </div>
              <div className="pt-12 pb-2">
                <div className="flex flex-col gap-1">
                  <span className="text-primary font-bold text-sm uppercase tracking-wider">
                    2023
                  </span>
                  <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">
                    Awarded Best Tech
                  </h3>
                  <p className="text-text-sec-light dark:text-text-sec-dark mt-2">
                    Recognized globally for innovation in AI-driven home
                    automation and energy savings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Meet the Team --> */}
        <section className="w-full px-6 py-20">
          <div className="max-w-[960px] mx-auto">
            <div className="mb-12 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold text-text-main-light dark:text-text-main-dark mb-4">
                Meet the Visionaries
              </h2>
              <p className="text-text-sec-light dark:text-text-sec-dark max-w-2xl">
                Our diverse team of experts is united by a passion for making
                life easier.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* <!-- Member 1 --> */}
              <div className="group flex flex-col gap-4">
                <div className="overflow-hidden rounded-xl bg-gray-200 aspect-[3/4] relative">
                  <img
                    alt="Sarah Jenkins, CEO"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-alt="Portrait of Sarah Jenkins, a professional woman in business attire smiling"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtdcz11uprPEl0QVMG_6slX-e_JKoUD56G2ewoZtHBpxbLM3NNUNq4c9O5joTUFUblXcjerbEpBuuIMiin96MpprViCq8M7Rvp13yMaNX_NkzSNlha-atTL85zi2EVT2vMJUYkkA2iaLAUlFn0XK33MIWv9lJvWl5LHT5UrIyXWgXySDSvfECEtnJUWXwqLLwoavRg0NPn1jzB0mb9bn9zdivcNymwOOqh_mcVm0Umqdb5MkYfJMSNcUDmQRHzx7G9-k-eKABK8rZm"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex gap-2 text-white">
                      <Linkedin className="material-symbols-outlined cursor-pointer hover:text-primary" />

                      <Mail className="material-symbols-outlined cursor-pointer hover:text-primary" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">
                    Sarah Jenkins
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    Co-Founder &amp; CEO
                  </p>
                </div>
              </div>
              {/* <!-- Member 2 --> */}
              <div className="group flex flex-col gap-4">
                <div className="overflow-hidden rounded-xl bg-gray-200 aspect-[3/4] relative">
                  <img
                    alt="David Chen, CTO"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-alt="Portrait of David Chen, a professional man in a suit smiling confidently"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUs7xe0DprMPxsTYZwXa3cnFcCWqWurgViWdCCTHo2w0siiMBIwNZNETZn0lHTAUt5A0ns9u5rYMR-VeO_Pxajb3AjeoD11eDLA5U5J6-Y7alo7RTnhCELXA9jiCOY-lrSVRrXaroDQF36usGpphSEjs9r6pkOivMvnB8HtyabcjWcG06iBleRB-bw6PARdat02PhMMfdFvl5ouWNk_ku0hZ3Si3RhzFMWG5lt_0VdbyJTGZqHm2Rxv46XURq8dAizfUiXOOk4ES1Z"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex gap-2 text-white">
                      <Linkedin className="material-symbols-outlined cursor-pointer hover:text-primary" />

                      <Mail className="material-symbols-outlined cursor-pointer hover:text-primary" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">
                    David Chen
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    Co-Founder &amp; CTO
                  </p>
                </div>
              </div>
              {/* <!-- Member 3 --> */}
              <div className="group flex flex-col gap-4">
                <div className="overflow-hidden rounded-xl bg-gray-200 aspect-[3/4] relative">
                  <img
                    alt="Elena Rodriguez, Head of Design"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-alt="Portrait of Elena Rodriguez, a creative professional smiling warmly"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzd0NWTQHOUIcwlFAoiiFnTQblReBKk9O-_cG-vhaEAJR0kxvImKUiP0RX8rR0Wr-oKNh7H_pcjNsRs2xNbRWiW7lIOBbOe0BqFAWR37A6TfD67bozNXgwbekwb4IkHMD8Y9lySoNj468k0JnNp0dFyojWB9dUrjqMcTn1Cgz_FaBOCe7yXIxu-UStTM7ovTkC4Oe6hzF4B_CGBKBC1yjUGhjL4QXVW4nEy1_2SXhnygl_vMnd4AQeb0v7KCp7D5PuS4wN5g6GGWeS"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex gap-2 text-white">
                      <Linkedin className="material-symbols-outlined cursor-pointer hover:text-primary" />

                      <Mail className="material-symbols-outlined cursor-pointer hover:text-primary" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">
                    Elena Rodriguez
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    Head of Design
                  </p>
                </div>
              </div>
              {/* <!-- Member 4 --> */}
              <div className="group flex flex-col gap-4">
                <div className="overflow-hidden rounded-xl bg-gray-200 aspect-[3/4] relative">
                  <img
                    alt="Marcus Johnson, Lead Engineer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-alt="Portrait of Marcus Johnson, a professional man smiling in a casual office setting"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3ubDQPotiRiKLz2RfqRcJdQYFGTySpcAxfWiOE2QkQVSfxnSwpf0qMiBlSGkbTuJ1gGXGRDv-0JNofrz7HhtvzuRjhymRde4Bk9O7OzN9yW-NU8FtYwEcbt15ICFshJAnYVObH2K4T4nqnH0r7m5kRE4N27H_sDlc1YwnBVYPbCJbsQgqCUMobgaTb_rD20ub-zXasMzwidObWgjdV2Fw7ek4Xa2UNjHCi__iIWMVAP3SGxU4AEMd_VnH8cMLzLIPLtVN6c9S5I29"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex gap-2 text-white">
                      <Linkedin className="material-symbols-outlined cursor-pointer hover:text-primary" />

                      <Mail className="material-symbols-outlined cursor-pointer hover:text-primary" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark">
                    Marcus Johnson
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    Lead Engineer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
