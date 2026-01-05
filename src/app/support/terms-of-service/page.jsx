import React from "react";

export default function page() {
  return (
    <section className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-200">
      {/* <!-- Breadcrumbs --> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <nav className="flex text-sm text-slate-500 dark:text-slate-400">
          <a className="hover:text-primary transition-colors" href="#">
            Home
          </a>
          <span className="mx-2 text-slate-300 dark:text-slate-600">/</span>
          <a className="hover:text-primary transition-colors" href="#">
            Support
          </a>
          <span className="mx-2 text-slate-300 dark:text-slate-600">/</span>
          <span className="font-medium text-slate-900 dark:text-white">
            Terms of Service
          </span>
        </nav>
      </div>
      {/* <!-- Main Content Grid --> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* <!-- Sidebar Navigation (Sticky) --> */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-8">
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
                  On this page
                </h3>
                <nav className="flex flex-col gap-3">
                  <a
                    className="text-sm font-medium text-primary border-l-2 border-primary pl-3"
                    href="#intro"
                  >
                    Introduction
                  </a>
                  <a
                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary pl-3.5 border-l-2 border-transparent transition-colors"
                    href="#account"
                  >
                    1. Account &amp; Responsibilities
                  </a>
                  <a
                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary pl-3.5 border-l-2 border-transparent transition-colors"
                    href="#usage"
                  >
                    2. Acceptable Use Policy
                  </a>
                  <a
                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary pl-3.5 border-l-2 border-transparent transition-colors"
                    href="#ip"
                  >
                    3. Intellectual Property
                  </a>
                  <a
                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary pl-3.5 border-l-2 border-transparent transition-colors"
                    href="#payment"
                  >
                    4. Payment Terms
                  </a>
                  <a
                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary pl-3.5 border-l-2 border-transparent transition-colors"
                    href="#liability"
                  >
                    5. Liability &amp; Disclaimers
                  </a>
                  <a
                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary pl-3.5 border-l-2 border-transparent transition-colors"
                    href="#termination"
                  >
                    6. Termination
                  </a>
                </nav>
              </div>
              <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-6 border border-primary/10 dark:border-primary/20">
                <div className="flex items-center gap-3 mb-3 text-primary">
                  <span className="material-symbols-outlined">description</span>
                  <span className="font-bold text-sm">Download PDF</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Keep a copy of these terms for your records.
                </p>
                <button className="w-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:border-primary hover:text-primary dark:hover:border-primary text-sm font-bold py-2.5 rounded-lg transition-all shadow-sm">
                  Download
                </button>
              </div>
            </div>
          </aside>
          {/* <!-- Main Document Content --> */}
          <main className="lg:col-span-9 max-w-4xl">
            {/* <!-- Page Header --> */}
            <div className="mb-10 border-b border-slate-200 dark:border-slate-800 pb-8">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Terms of Service
                </h1>
                <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-sm font-medium text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                  Version 2.4
                </span>
              </div>
              <p className="text-lg text-slate-500 dark:text-slate-400">
                Last Updated: October 24, 2023
              </p>
            </div>
            {/* <!-- Intro Section --> */}
            <section className="mb-12" id="intro">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  Welcome to Homeasy. By accessing or using our website, mobile
                  applications, and smart home automation services
                  (collectively, the "Services"), you agree to be bound by these
                  Terms of Service. Please read them carefully. If you do not
                  agree to these terms, you may not use our Services.
                </p>
                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 mt-4">
                  Homeasy provides a platform for managing smart home devices.
                  We prioritize your privacy and the security of your home.
                  These terms outline our relationship with you and the rules
                  governing the use of our platform.
                </p>
              </div>
            </section>
            {/* <!-- Accordion Sections --> */}
            <div className="space-y-4">
              {/* <!-- Section 1 --> */}
              <details
                className="group bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden transition-all duration-300 open:shadow-md dark:open:shadow-none open:border-primary/30 dark:open:border-primary/50"
                id="account"
                open=""
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                      1
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      User Account &amp; Responsibilities
                    </h3>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform duration-300">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed space-y-4 border-t border-slate-100 dark:border-slate-800/50">
                  <p>
                    You must be at least 18 years old to create an account. You
                    are responsible for maintaining the confidentiality of your
                    account credentials and for all activities that occur under
                    your account.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                    <li>
                      You agree to provide accurate, current, and complete
                      information during the registration process.
                    </li>
                    <li>
                      You are solely responsible for securing your home network
                      and devices connected to Homeasy.
                    </li>
                    <li>
                      You must notify us immediately of any unauthorized use of
                      your account or any other breach of security.
                    </li>
                  </ul>
                </div>
              </details>
              {/* <!-- Section 2 --> */}
              <details
                className="group bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden transition-all duration-300 open:shadow-md dark:open:shadow-none open:border-primary/30 dark:open:border-primary/50"
                id="usage"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                      2
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Acceptable Use Policy
                    </h3>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform duration-300">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed space-y-4 border-t border-slate-100 dark:border-slate-800/50">
                  <p>
                    You agree not to misuse the Homeasy Services. Specifically,
                    you agree that you will not:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                    <li>
                      Use the Service for any illegal purpose or in violation of
                      any local, state, national, or international law.
                    </li>
                    <li>
                      Attempt to reverse engineer, decompile, disassemble, or
                      otherwise attempt to derive the source code of the
                      software.
                    </li>
                    <li>
                      Interfere with or disrupt the operation of the Service or
                      the servers or networks used to make the Service
                      available.
                    </li>
                    <li>
                      Transmit any viruses, worms, defects, Trojan horses, or
                      other items of a destructive nature.
                    </li>
                  </ul>
                </div>
              </details>
              {/* <!-- Section 3 --> */}
              <details
                className="group bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden transition-all duration-300 open:shadow-md dark:open:shadow-none open:border-primary/30 dark:open:border-primary/50"
                id="ip"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                      3
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Intellectual Property Rights
                    </h3>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform duration-300">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed space-y-4 border-t border-slate-100 dark:border-slate-800/50">
                  <p>
                    The Service and its original content (excluding Content
                    provided by users), features, and functionality are and will
                    remain the exclusive property of Homeasy and its licensors.
                    The Service is protected by copyright, trademark, and other
                    laws of both the United States and foreign countries. Our
                    trademarks and trade dress may not be used in connection
                    with any product or service without the prior written
                    consent of Homeasy.
                  </p>
                </div>
              </details>
              {/* <!-- Section 4 --> */}
              <details
                className="group bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden transition-all duration-300 open:shadow-md dark:open:shadow-none open:border-primary/30 dark:open:border-primary/50"
                id="payment"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                      4
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Payment &amp; Subscription Terms
                    </h3>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform duration-300">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed space-y-4 border-t border-slate-100 dark:border-slate-800/50">
                  <p>
                    Certain aspects of the Service may be provided for a fee or
                    other charge. If you elect to use paid aspects of the
                    Service, you agree to the pricing and payment terms as we
                    may update them from time to time.
                  </p>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg text-sm border border-slate-100 dark:border-slate-700">
                    <strong className="text-slate-900 dark:text-white block mb-2">
                      Refund Policy
                    </strong>
                    <p>
                      Subscriptions are non-refundable except as required by
                      law. You may cancel your subscription at any time, but you
                      will not receive a refund for any remaining period of a
                      subscription.
                    </p>
                  </div>
                </div>
              </details>
              {/* <!-- Section 5 --> */}
              <details
                className="group bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden transition-all duration-300 open:shadow-md dark:open:shadow-none open:border-primary/30 dark:open:border-primary/50"
                id="liability"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                      5
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Limitation of Liability
                    </h3>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform duration-300">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed space-y-4 border-t border-slate-100 dark:border-slate-800/50">
                  <p className="uppercase text-xs font-bold text-slate-400 tracking-wider">
                    Disclaimer
                  </p>
                  <p>
                    In no event shall Homeasy, nor its directors, employees,
                    partners, agents, suppliers, or affiliates, be liable for
                    any indirect, incidental, special, consequential or punitive
                    damages, including without limitation, loss of profits,
                    data, use, goodwill, or other intangible losses, resulting
                    from:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      Your access to or use of or inability to access or use the
                      Service;
                    </li>
                    <li>
                      Any conduct or content of any third party on the Service;
                    </li>
                    <li>Any content obtained from the Service; and</li>
                    <li>
                      Unauthorized access, use or alteration of your
                      transmissions or content.
                    </li>
                  </ol>
                </div>
              </details>
              {/* <!-- Section 6 --> */}
              <details
                className="group bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden transition-all duration-300 open:shadow-md dark:open:shadow-none open:border-primary/30 dark:open:border-primary/50"
                id="termination"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                      6
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Account Termination
                    </h3>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform duration-300">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed space-y-4 border-t border-slate-100 dark:border-slate-800/50">
                  <p>
                    We may terminate or suspend your account immediately,
                    without prior notice or liability, for any reason
                    whatsoever, including without limitation if you breach the
                    Terms. Upon termination, your right to use the Service will
                    immediately cease.
                  </p>
                  <p>
                    If you wish to terminate your account, you may simply
                    discontinue using the Service or delete your account from
                    your profile settings.
                  </p>
                </div>
              </details>
            </div>
            {/* <!-- Bottom Contact Area --> */}
            <div className="mt-12 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-xl p-8 text-center shadow-sm">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Have questions about our legal terms?
              </h4>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Our legal team is available to help clarify any aspect of our
                service agreement.
              </p>
              <div className="flex justify-center gap-4">
                <button className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-2.5 px-6 rounded-lg hover:opacity-90 transition-opacity">
                  <span className="material-symbols-outlined text-[20px]">
                    mail
                  </span>
                  Contact Legal Team
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
