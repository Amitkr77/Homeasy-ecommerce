import {
  Globe2,
  Leaf,
  Lightbulb,
  Quote,
  Recycle,
  Rocket,
  ShieldCheckIcon,
  Users,
} from "lucide-react";
import React from "react";

export default function page() {
  return (
    <section>
      <main className="">
        {/* <!-- Hero Section: Immersive Editorial Start --> */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden px-6">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <div
              className="w-full h-full bg-contain bg-center scale-105"
              data-alt="A warm sunset illuminating a modern living room interior"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB8AdxIRKcyBmvmbdZJi0x4wuodqZAz4DyBFIHhlfjWGQ8nvpK-JMyU3ixhMtuBtR1la7ZzEqFBdQNXJnxY2E2uGVmnGj4UP-XuRtcz4Ae33g75r_LgVDuTO_IwF5wUE-uvQcdvzv5qdaW2eRAGOYDuLKyu77V9LZV33BbVwmkkqXycQTKu2dEMe1TxsW3-8J_4RP5FqypQegIpIvOFGyNko-d8hCBdwI-t5OTELkAXbpSQuV2j81mpAfeHJ6zfUsh0d_Dys8cKfnAY')",
              }}
            ></div>
          </div>
          <div className="relative z-20 text-center max-w-4xl">
            <span className="inline-block py-1 px-4 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest mb-6">
              Established 2015
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[1.1] text-balance">
              The Soul of the <br />
              <i className="font-normal italic">Smart Home</i>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed mb-10 text-balance">
              Beyond wires and code, we found a purpose. Discover how a single
              spark of frustration turned into a global vision for human-centric
              living.
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
              <span className="text-white/60 text-xs font-bold uppercase tracking-widest">
                Scroll to Explore
              </span>
            </div>
          </div>
        </section>
        {/* <!-- The Vision: Narrative Text --> */}
        <section className="py-24 lg:py-40 bg-background-light dark:bg-background-dark">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-4 sticky top-32">
                <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4 italic">
                  Our Narrative
                </h2>
                <div className="w-12 h-1 bg-accent-ochre"></div>
              </div>
              <div className="md:col-span-8 space-y-8">
                <p className="text-xl md:text-2xl font-display font-light leading-relaxed text-[#101618]/80 dark:text-gray-300">
                  It started in a garage, but not the kind you see in movies. It
                  was a cold, cluttered space where three friends realized that
                  technology was making our homes more complex, not simpler.
                </p>
                <p className="text-lg leading-relaxed text-[#5c7c8a] dark:text-gray-400">
                  The "Smart Home" of 2015 was a jigsaw puzzle of incompatible
                  apps and fragile connections. We believed that technology
                  should be like oxygen: vital, invisible, and life-sustaining.
                  We didn't want to build gadgets; we wanted to build harmony.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Timeline: The Journey --> */}
        <section className="py-24 bg-[#F8F5EF] dark:bg-[#1a1f21]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-20">
              <h3 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">
                Milestones
              </h3>
              <h2 className="text-4xl font-bold">The Evolution of Living</h2>
            </div>
            <div className="relative">
              {/* <!-- Central Vertical Line --> */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 h-full w-px bg-primary/20"></div>
              {/* <!-- Milestone 1 --> */}
              <div className="relative mb-24 flex flex-col md:flex-row items-start md:items-center">
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center size-10 bg-primary text-white rounded-full z-10 editorial-shadow">
                  <Lightbulb className="material-symbols-outlined text-xl" />
                </div>
                <div className="ml-20 md:ml-0 md:w-1/2 md:pr-16 md:text-right">
                  <span className="text-accent-ochre font-bold text-lg">
                    2015
                  </span>
                  <h4 className="text-2xl font-bold mt-1 mb-3">The Spark</h4>
                  <p className="text-[#5c7c8a] dark:text-gray-400">
                    The original problem identified. First prototype developed
                    in a small garage in Seattle, focusing on universal lighting
                    control.
                  </p>
                </div>
              </div>
              {/* <!-- Milestone 2 --> */}
              <div className="relative mb-24 flex flex-col md:flex-row-reverse items-start md:items-center">
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center size-10 bg-primary text-white rounded-full z-10 editorial-shadow">
                  <Rocket className="material-symbols-outlined text-xl" />
                </div>
                <div className="ml-20 md:ml-0 md:w-1/2 md:pl-16">
                  <span className="text-accent-ochre font-bold text-lg">
                    2018
                  </span>
                  <h4 className="text-2xl font-bold mt-1 mb-3">
                    Breaking Ground
                  </h4>
                  <p className="text-[#5c7c8a] dark:text-gray-400">
                    Secured series-A funding and launched our flagship "Hub
                    One." Won the Innovation in Tech award at CES.
                  </p>
                </div>
              </div>
              {/* <!-- Milestone 3 --> */}
              <div className="relative mb-24 flex flex-col md:flex-row items-start md:items-center">
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center size-10 bg-primary text-white rounded-full z-10 editorial-shadow">
                  <Users className="material-symbols-outlined text-xl" />
                </div>
                <div className="ml-20 md:ml-0 md:w-1/2 md:pr-16 md:text-right">
                  <span className="text-accent-ochre font-bold text-lg">
                    2021
                  </span>
                  <h4 className="text-2xl font-bold mt-1 mb-3">10,000 Homes</h4>
                  <p className="text-[#5c7c8a] dark:text-gray-400">
                    A milestone of trust. Our ecosystem expanded to security and
                    energy management, protecting ten thousand families
                    globally.
                  </p>
                </div>
              </div>
              {/* <!-- Milestone 4 --> */}
              <div className="relative flex flex-col md:flex-row-reverse items-start md:items-center">
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center size-10 bg-primary text-white rounded-full z-10 editorial-shadow">
                  <Globe2 className="material-symbols-outlined text-xl" />
                </div>
                <div className="ml-20 md:ml-0 md:w-1/2 md:pl-16">
                  <span className="text-accent-ochre font-bold text-lg">
                    Today
                  </span>
                  <h4 className="text-2xl font-bold mt-1 mb-3">
                    The Future of Living
                  </h4>
                  <p className="text-[#5c7c8a] dark:text-gray-400">
                    Pioneering AI-driven predictive automation and 100%
                    carbon-neutral hardware manufacturing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Founder Quote Section --> */}
        <section className="py-24 lg:py-32 bg-background-light dark:bg-background-dark">
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative editorial-shadow bg-white dark:bg-gray-800 rounded-2xl overflow-hidden flex flex-col md:flex-row items-stretch">
              <div className="w-full md:w-2/5 h-80 md:h-auto overflow-hidden">
                <img
                  alt="Founder of Homeasy smiling in a bright office"
                  className="w-full h-full object-cover"
                  data-alt="Founder of Homeasy in a candid smiling portrait"
                  src="./Vishwjeet_Narayanan.png"
                />
              </div>
              <div className="w-full md:w-3/5 p-8 md:p-16 flex flex-col justify-center">
                <Quote className="material-symbols-outlined text-accent-ochre text-5xl mb-6" />
                <h3 className="font-serif text-2xl md:text-3xl leading-snug italic mb-8 dark:text-gray-100">
                  "We don't want to build the smartest home on the block. We
                  want to build the most thoughtful one. One that knows when you
                  need rest, when you need music, and when you just need peace."
                </h3>
                <div>
                  <p className="font-bold text-lg">Vishwjeet_Narayanan</p>
                  <p className="text-primary font-medium text-sm tracking-widest uppercase">
                    Co-Founder &amp; CEO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Sustainability & Values --> */}
        <section className="py-24 bg-accent-sage/10 dark:bg-accent-sage/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2">
                <h2 className="text-4xl font-bold mb-6">
                  Built for the Next Century
                </h2>
                <p className="text-lg text-[#5c7c8a] dark:text-gray-400 mb-8 leading-relaxed">
                  Our commitment goes beyond convenience. We believe smart
                  living is sustainable living. By 2025, every Homeasy device
                  will be crafted from 80% recycled materials and powered by a
                  carbon-neutral supply chain.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Leaf className="material-symbols-outlined fill-green-500" />
                    <span className="font-medium">
                      Energy-first automation algorithms
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Recycle className="material-symbols-outlined" />
                    <span className="font-medium">
                      Circular product lifecycle management
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ShieldCheckIcon className="material-symbols-outlined" />
                    <span className="font-medium">
                      Uncompromising data privacy standards
                    </span>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden aspect-4/5">
                  <img
                    alt="Close up of a green plant sprout"
                    className="w-full h-full object-cover"
                    data-alt="Young green sprout growing in soil"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-yWUxi5m6IbK-fpHeCiFCWxSz9LlH6YRO96JPxg4x98GWZ9dXKTyrWhKe22u1zflnrdcqlmcL8td_CyHYfQC0do099jQrg4fxIgQoyz0AoV-0RW5uzh7UEse3ekqJjN6LbEGu0ni5ciY_Zvkr7Apv3bci_jivbcwXTmnBZYg6MF4GFJJBy6Gy5hF_Icr3QEFpYKQ934LYGPjSI2IvQJI_z74M-288aEo559kNwT6OUXR6W5M2pK6HPQK-WZE7Mz9ivlwf2mjxid2T"
                  />
                </div>
                <div className="rounded-xl overflow-hidden aspect-4/5 mt-8">
                  <img
                    alt="Modern solar panels on a rooftop"
                    className="w-full h-full object-cover"
                    data-alt="Sleek solar panels on a house roof"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPlj_2Kwn_O_5VaBpEWa0UUokJiuByhkmc6RZ0A_eUfu-T_bDMu37KrLkPJPjxy-GJkxRjPc_VcBEkAV8-4VZd8yosfh9UDRlKlbiHXGASzgbwr9w0yTnxNkGAtQSMTEECrY-fLcu67NjHuUPrNKW8xZbYAPO7D6ApJhwlKGFA1HGa7LlH8UsESis5fwTnHKf6BvByMFSDF19vYPVBB6Dfkw7dl9TOzxPmDOMaoauT8Catj98opEVNZfe5dJeJjCWhRjlD45KG84tG"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Team Gallery: The People --> */}
        <section className="py-24 bg-background-light dark:bg-background-dark overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-4">The Faces of Harmony</h2>
              <p className="text-[#5c7c8a] dark:text-gray-400">
                The engineers, designers, and dreamers making it happen.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="group relative aspect-square rounded-xl overflow-hidden editorial-shadow">
                <img
                  alt="Team member"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="Team members working together in studio"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2Gj4DqSFJkINZa1CYln3ouYfyHC3oa3HfQat4WcwfALqUZVYGbblUJRAAzhiKM5bB9Mdov3dObo-mtjxaeWoOUVZFj0X9g6TPIlIa4RIyDG7f5HTbRxLzkogRSgPH_aIoEmbVWOIxJr2QPbFiy5Up_I4w0cy4sRK_VFJRU84rY9rdc3vpMn0Es5_hMXhQcA5j2YEMcCsHAVuh-Feez69DGP3gHJaz_ZCxiMGT4lsIahGkShzuqigIkCusE32ffsyiGZ_Zus1fTngH"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-sm font-bold">
                    Engineering Team
                  </p>
                </div>
              </div>
              <div className="group relative aspect-square rounded-xl overflow-hidden editorial-shadow md:mt-12">
                <img
                  alt="Team member"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="Diverse design team in meeting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDygfUXsQPSQ9qH87-lJ_k7G57H4LyFx7Y3MvpyfpR9vI8q_xN3y124l2iMe7YT0gY91eavs0ZnzQxhfLd2_7E-NBkOQcLqk7qjQyKEa0pIbKm7GBA_ENNftDUf15W5yEMumEDsq2YabhTsiSFBmbNjTYq-fBDoqGlcu2KjuiNa6YM8KgwEz2En4HtTYmXybWemuBqDxLKCNetmY_jshEyhU56m2L6p4R-2HDYcuedkrGpmG6wpepxKgZKaJYfhKAIeytoX3ncyr4bA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-sm font-bold">Design Studio</p>
                </div>
              </div>
              <div className="group relative aspect-square rounded-xl overflow-hidden editorial-shadow">
                <img
                  alt="Team member"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="Project manager smiling in office"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI1M0YzqoZDxC3_dA5_gAAhDKpGHOzJG7u7ozMAep9p2bql-0iEtgxqGRrmdM9S7OjojwrWzuQHC0dn-NktPKfkeCKSX3JwvLfVDu3mnhZG4DXTsemJrViEb3vkES_qtO2KyxQygI1iGX69GnBxVZDqmBWm3DD7i6xjKMoSEn-1fVdALesiCuNopfSJJVpjzdUW05_Sfqsmnn6tVD-tZ5md62URkZeN5KjGfw4fbfnwiC8GEG1D8Stqhg5722n22Q_M0KGZIN2HWm_"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-sm font-bold">
                    Customer Success
                  </p>
                </div>
              </div>
              <div className="group relative aspect-square rounded-xl overflow-hidden editorial-shadow md:mt-12">
                <img
                  alt="Team member"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="Hardware engineer testing a device"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZw_6DoSPh0-3ttviojlkjnkvFHRJ3JPZ5a0YM4xF2-XpXjhO0lAdFw7_fjS7hb1gAiyDNuEy1M0wFcvGxdfzSiNzZOvfEGQOySwaaAs85iQbp6ynTQwiKVdD50lrRFP3pItPAJITDYX0_DsDe7Iic_71QJ_pBIMieZ9cLv95ukevTqrnyDgMpc6ur7IfMXYzfhN1PzQorjCRuYdBMDvVI1kvptmgAf02G4oTZsCfHfnTiUhhgd1twyrMGBkeg0ZzWkx9TeKxA0ttO"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-sm font-bold">R&amp;D Lab</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Final Call to Action --> */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  height="40"
                  id="grid"
                  patternunits="userSpaceOnUse"
                  width="40"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="white"
                    stroke-width="1"
                  ></path>
                </pattern>
              </defs>
              <rect fill="url(#grid)" height="100%" width="100%"></rect>
            </svg>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to write your own story?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Transform your living space into a sanctuary of ease. Join over
              50,000 households already living the Homeasy way.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-10 py-4 bg-white text-primary font-bold rounded-xl hover:bg-accent-ochre hover:text-white transition-all">
                Explore Our Solutions
              </button>
              <button className="w-full sm:w-auto px-10 py-4 border-2 border-white/30 hover:border-white text-white font-bold rounded-xl transition-all">
                Join the Team
              </button>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
