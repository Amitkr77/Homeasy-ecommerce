import React from "react";
import { HouseWifi, Globe, Facebook, Share2 } from "lucide-react";


export default function Footer() {
  return (
    <footer className="bg-white dark:bg-text-light border-t border-gray-200 dark:border-[#243b47] px-4 py-12 md:px-10 lg:px-40 flex justify-center">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo + Description */}
          <div className="col-span-3 md:col-span-2 flex flex-col gap-4 place-items-center md:place-items-start">
            <div className="flex items-center gap-2 text-text-light dark:text-white">
              <div className="size-8 text-primary flex items-center justify-center">
                <HouseWifi className="material-symbols-outlined text-3xl" />
              </div>
              <h2 className="text-lg font-bold">Homeasy</h2>
            </div>

            <p className="text-sm text-text-muted-light dark:text-text-muted-dark pr-4">
              Making smart homes simple, accessible, and beautiful for everyone.
            </p>

            <div className="flex gap-4 mt-2">
              <a
                className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                href="#"
              >
                {/* <i className="material-symbols-outlined">public</i> */}
                <Globe className="material-symbols-outlined" />
              </a>
              <a
                className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                href="#"
              >
                <Facebook className="material-symbols-outlined " />
                {/* <i className="material-symbols-outlined">rss_feed</i> */}
              </a>
              <a
                className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                href="#"
              >
                {/* <i className="material-symbols-outlined">share</i>
                 */}
                <Share2 className="material-symbols-outlined " />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-text-light dark:text-white">
              Shop
            </h3>
            <div className="flex flex-col gap-2">
              <a
                className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                href="#"
              >
                Lighting
              </a>
              <a
                className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                href="#"
              >
                Climate
              </a>
              <a
                className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                href="#"
              >
                Security
              </a>
              <a
                className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                href="#"
              >
                Bundles
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-text-light dark:text-white">
              Support
            </h3>
            <div className="flex flex-col gap-2">
              <a
                className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                href="#"
              >
                Help Center
              </a>
              <a
                className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                href="#"
              >
                Installation
              </a>
              <a
                className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                href="#"
              >
                Warranty
              </a>
              <a
                className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                href="#"
              >
                Returns
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-text-light dark:text-white">
              Company
            </h3>
            <div className="flex flex-col gap-2">
              <a
                className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                href="#"
              >
                About Us
              </a>
              <a
                className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                href="#"
              >
                Careers
              </a>
              <a
                className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                href="#"
              >
                Press
              </a>
              <a
                className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
                href="#"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 dark:border-[#2a3b45] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted-light dark:text-text-muted-dark">
            © 2025 Homeasy Automation Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              className="text-xs text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-xs text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors"
              href="#"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
