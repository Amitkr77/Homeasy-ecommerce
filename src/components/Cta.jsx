import { CalendarCheck, ShieldCheck } from "lucide-react";
import React from "react";

export default function Cta() {
  return (
    <section
      className="relative isolate overflow-hidden bg-primary py-16 sm:py-24 lg:py-32"
      id="support"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-2 items-center">
          <div className="max-w-xl lg:max-w-lg">
            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white ring-1 ring-inset ring-white/20 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2"></span>{" "}
              Limited Time Offer
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to upgrade your living?
            </h2>
            <p className="mt-4 text-lg leading-8 text-blue-100">
              Join thousands of happy homeowners who have transformed their
              daily lives with Homeasy. Start with a starter kit or build your
              custom solution today.
            </p>
            <div className="mt-8 flex max-w-md gap-x-4">
              <label className="sr-only" htmlFor="email-address">
                Email address
              </label>
              <input
                autoComplete="email"
                className="min-w-0 flex-auto rounded-xl border-0 bg-white/10 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 placeholder:text-blue-200 backdrop-blur-sm"
                id="email-address"
                name="email"
                placeholder="Enter your email"
                required=""
                type="email"
              />
              <button
                className="flex-none rounded-xl bg-white px-6 py-3 text-sm font-bold text-primary shadow-lg hover:bg-blue-50 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                type="submit"
              >
                Get Started
              </button>
            </div>
            <p className="mt-4 text-xs text-blue-200">
              No credit card required for trial.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
              <div className="flex flex-col items-start group">
                <div className="rounded-xl bg-white/10 p-3 ring-1 ring-white/20 group-hover:bg-white/20 transition-colors">
                  {/* <span className="material-symbols-outlined text-white h-6 w-6">
                    calendar_month
                  </span> */}
                  <CalendarCheck className="h-6 w-6 text-white" />
                </div>
                <dt className="mt-4 font-bold text-white text-lg">
                  30-Day Trial
                </dt>
                <dd className="mt-2 text-sm leading-6 text-blue-100">
                  Try Homeasy risk-free in your own home. If you don't love it,
                  return it for a full refund.
                </dd>
              </div>
              <div className="flex flex-col items-start group">
                <div className="rounded-xl bg-white/10 p-3 ring-1 ring-white/20 group-hover:bg-white/20 transition-colors">
                  {/* <span className="material-symbols-outlined text-white h-6 w-6">
                    verified_user
                  </span> */}
                  <ShieldCheck className="h-6 w-6 text-white" />
                </div>
                <dt className="mt-4 font-bold text-white text-lg">
                  2-Year Warranty
                </dt>
                <dd className="mt-2 text-sm leading-6 text-blue-100">
                  All our hardware is backed by a comprehensive warranty and
                  24/7 technical support.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            width: "72.1875rem",
            height: "42.375rem",
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1155/678  bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        ></div>
      </div>
    </section>
  );
}
