import React from "react";

export default function page() {
  return (
    <section className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased selection:bg-primary/30 selection:text-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* <!-- Sticky Sidebar / Table of Contents --> */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 px-3">
                Contents
              </h3>
              <nav className="space-y-1">
                <a
                  className="block rounded-lg bg-primary/10 px-3 py-2 text-sm font-medium text-primary transition-colors"
                  href="#introduction"
                >
                  Introduction
                </a>
                <a
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
                  href="#collection"
                >
                  Information We Collect
                </a>
                <a
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
                  href="#usage"
                >
                  How We Use Your Data
                </a>
                <a
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
                  href="#sharing"
                >
                  Data Sharing &amp; Disclosure
                </a>
                <a
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
                  href="#security"
                >
                  Security Measures
                </a>
                <a
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
                  href="#rights"
                >
                  Your Rights
                </a>
                <a
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
                  href="#contact"
                >
                  Contact Us
                </a>
              </nav>
            </div>
          </aside>
          {/* <!-- Main Content Area --> */}
          <main className="flex-1 min-w-0">
            {/* <!-- Page Heading --> */}
            <div className="mb-10 flex flex-col gap-6 border-b border-slate-200 dark:border-slate-800 pb-10 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-col gap-3">
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                  Privacy Policy
                </h1>
                <p className="text-base text-slate-500 dark:text-slate-400">
                  Last Updated: October 24, 2023
                </p>
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 transition-colors">
                <span className="material-symbols-outlined text-xl">
                  download
                </span>
                <span>Download PDF</span>
              </button>
            </div>
            {/* <!-- Introduction --> */}
            <section className="scroll-mt-24 mb-16" id="introduction">
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                At Homeasy, your privacy is at the core of our product design.
                This Privacy Policy outlines how we collect, use, disclose, and
                protect your information when you use our smart home devices,
                mobile application, and website (collectively, the "Services").
                By using our Services, you consent to the data practices
                described in this policy.
              </p>
            </section>
            {/* <!-- Information We Collect --> */}
            <section
              className="scroll-mt-24 mb-16 border-t border-slate-200 dark:border-slate-800 pt-10"
              id="collection"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">database</span>
                </span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  1. Information We Collect
                </h2>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    Personal Information
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    When you create an account, purchase a product, or contact
                    support, we may collect:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300 marker:text-primary">
                    <li>
                      Identity Data: Name, username, or similar identifier.
                    </li>
                    <li>
                      Contact Data: Billing address, delivery address, email
                      address, and telephone numbers.
                    </li>
                    <li>
                      Payment Data: Payment card details (processed securely by
                      our payment providers).
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    Device &amp; Usage Data
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    Our smart devices automatically collect data to function
                    correctly:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300 marker:text-primary">
                    <li>
                      Device Information: Model, serial number, IP address, and
                      firmware version.
                    </li>
                    <li>
                      Usage Logs: Time of activation, feature usage, and
                      automation rules triggered.
                    </li>
                    <li>
                      Environmental Data: If applicable (e.g., thermostat
                      temperature readings, motion sensor activity).
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            {/* <!-- How We Use Data --> */}
            <section
              className="scroll-mt-24 mb-16 border-t border-slate-200 dark:border-slate-800 pt-10"
              id="usage"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">
                    settings_accessibility
                  </span>
                </span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  2. How We Use Your Data
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                We use the collected data primarily to provide and improve our
                smart home services. Specific uses include:
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-6 border border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                    Service Delivery
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    To create and manage your account, process transactions, and
                    enable remote control of your devices.
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-6 border border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                    Automation Improvement
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Analyzing usage patterns to suggest better automation
                    routines and improve energy efficiency.
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-6 border border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                    Customer Support
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Diagnosing device issues remotely and providing effective
                    troubleshooting.
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-6 border border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                    Security
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Detecting and preventing fraud, unauthorized access, and
                    other illegal activities.
                  </p>
                </div>
              </div>
            </section>
            {/* <!-- Data Sharing --> */}
            <section
              className="scroll-mt-24 mb-16 border-t border-slate-200 dark:border-slate-800 pt-10"
              id="sharing"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">share</span>
                </span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  3. Data Sharing &amp; Disclosure
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We do not sell your personal data. We may share your information
                only in the following circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-3 text-slate-600 dark:text-slate-300 marker:text-primary">
                <li>
                  <strong>Service Providers:</strong> We share data with
                  third-party vendors who help us operate our business (e.g.,
                  cloud hosting, payment processing, email delivery). These
                  providers are contractually obligated to protect your data.
                </li>
                <li>
                  <strong>Integrations:</strong> If you connect Homeasy to
                  third-party services (like Amazon Alexa or Google Assistant),
                  we will share necessary device data to enable voice control
                  and integration features.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose
                  information if required by law, court order, or governmental
                  regulation.
                </li>
              </ul>
            </section>
            {/* <!-- Security --> */}
            <section
              className="scroll-mt-24 mb-16 border-t border-slate-200 dark:border-slate-800 pt-10"
              id="security"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">shield_lock</span>
                </span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  4. Security Measures
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We implement robust industry-standard security measures to
                protect your data, including:
              </p>
              <ul className="grid gap-4 sm:grid-cols-2">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-green-500 mt-1">
                    check_circle
                  </span>
                  <span className="text-slate-600 dark:text-slate-300 text-sm">
                    End-to-end encryption for video feeds
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-green-500 mt-1">
                    check_circle
                  </span>
                  <span className="text-slate-600 dark:text-slate-300 text-sm">
                    TLS/SSL encryption for data in transit
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-green-500 mt-1">
                    check_circle
                  </span>
                  <span className="text-slate-600 dark:text-slate-300 text-sm">
                    Regular security audits and penetration testing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-green-500 mt-1">
                    check_circle
                  </span>
                  <span className="text-slate-600 dark:text-slate-300 text-sm">
                    Multi-factor authentication (MFA) support
                  </span>
                </li>
              </ul>
            </section>
            {/* <!-- Your Rights --> */}
            <section
              className="scroll-mt-24 mb-16 border-t border-slate-200 dark:border-slate-800 pt-10"
              id="rights"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">gavel</span>
                </span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  5. Your Rights
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>
              <div className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="bg-slate-50 dark:bg-slate-800 px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center cursor-pointer">
                  <span className="font-bold text-slate-900 dark:text-white">
                    Access &amp; Portability
                  </span>
                  <span className="material-symbols-outlined text-slate-400">
                    arrow_forward
                  </span>
                </div>
                <div className="bg-white dark:bg-background-dark px-6 py-4 border-b border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    You can request a copy of the personal data we hold about
                    you in a structured, commonly used format.
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center cursor-pointer">
                  <span className="font-bold text-slate-900 dark:text-white">
                    Deletion (Right to be Forgotten)
                  </span>
                  <span className="material-symbols-outlined text-slate-400">
                    arrow_forward
                  </span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 px-6 py-4 flex justify-between items-center cursor-pointer">
                  <span className="font-bold text-slate-900 dark:text-white">
                    Opt-out of Marketing
                  </span>
                  <span className="material-symbols-outlined text-slate-400">
                    arrow_forward
                  </span>
                </div>
              </div>
            </section>
            {/* <!-- Contact Us Callout --> */}
            <section
              className="scroll-mt-24 border-t border-slate-200 dark:border-slate-800 pt-10"
              id="contact"
            >
              <div className="rounded-2xl bg-primary/5 border border-primary/20 p-8 sm:p-10">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                      <span className="material-symbols-outlined text-3xl">
                        mail
                      </span>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                      Contact Us
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      If you have any questions, concerns, or requests regarding
                      this Privacy Policy or how we handle your data, please
                      reach out to our dedicated Privacy Team.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <a
                        className="inline-flex items-center gap-2 font-bold text-primary hover:text-sky-600 transition-colors"
                        href="mailto:privacy@homeasy.com"
                      >
                        <span className="material-symbols-outlined">send</span>
                        privacy@homeasy.com
                      </a>
                      <span className="hidden sm:inline text-slate-300">|</span>
                      <span className="text-slate-600 dark:text-slate-400">
                        123 Innovation Dr, Tech City, CA 94000
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      
    </section>
  );
}
