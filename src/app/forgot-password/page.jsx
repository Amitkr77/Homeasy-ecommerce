import React from "react";

export default function page() {
  return (
    <main className="flex-1 flex items-center justify-center p-4">
      <div className="w-full max-w-120 bg-surface-light dark:bg-surface-dark rounded-2xl shadow-xl dark:shadow-none border border-border-light dark:border-border-dark overflow-hidden">
        {/* <!-- Hero Image / Illustration for the Card --> */}
        <div className="h-32 w-full bg-linear-to-r from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center relative overflow-hidden">
          <img
            alt="Minimalist abstract blue lock security concept"
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
            data-alt="Abstract smart home security lock concept"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtfFEPQ549qimdFElGXyu4P2FCseGngriilwWsHtGgaETcHc9_vU93WlC_VWWz9zxo_LqBmvJJKD13e-pKlgyA7wu4aZr7iRUDxfaotFWIKn2HwqCabMqm8-ImxeFnJRUjDIa9b036TPOQNZNGffl4uLRDYHlY_FvKqulm_Zb5bM_z-tpmdFv77NciUpaEFVoQtij5EwARs_yCuzrxfqlmc7PUyBMI6xYKlr_jDWGaQK961tZhElqR3dLgS_lsdmHV2It1Q2K7Msqs"
          />
          <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center shadow-sm z-10 text-primary">
            <span className="material-symbols-outlined text-4xl">lock_reset</span>
          </div>
        </div>
        {/* <!-- Form Content --> */}
        <div className="px-8 pb-10 pt-6">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark mb-2">
              Forgot Password?
            </h1>
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-base leading-relaxed">
              No worries, we'll send you reset instructions. Please enter the
              email associated with your account.
            </p>
          </div>
          <form className="flex flex-col gap-5">
            {/* <!-- Email Input --> */}
            <div className="space-y-2">
              <label
                className="block text-sm font-semibold text-text-main-light dark:text-text-main-dark"
                for="email"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-secondary-light dark:text-text-secondary-dark">
                  <span className="material-symbols-outlined text-[20px]">
                    mail
                  </span>
                </div>
                <input
                  className="w-full pl-10 pr-4 py-3 bg-background-light dark:bg-slate-800 border border-border-light dark:border-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-text-main-light dark:text-text-main-dark placeholder-text-secondary-light dark:placeholder-slate-500 font-medium"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  required=""
                  type="email"
                />
              </div>
            </div>
            {/* <!-- Submit Button --> */}
            <button
              className="group w-full py-3 px-4 bg-primary hover:bg-sky-500 text-white rounded-lg font-bold text-base shadow-lg shadow-blue-500/20 transition-all duration-200 flex items-center justify-center gap-2"
              type="button"
            >
              <span>Send Reset Link</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </form>
          {/* <!-- Back to Login Link --> */}
          <div className="mt-8 text-center pt-6 border-t border-border-light dark:border-border-dark">
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
              Remember your password?
              <a
                className="text-primary font-bold hover:underline ml-1 inline-flex items-center gap-0.5"
                href="#"
              >
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
