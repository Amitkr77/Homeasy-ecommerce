import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div
      style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
      className="relative flex h-auto min-h-screen w-full flex-col bg-slate-50 group/design-root overflow-x-hidden"
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7eff3] px-10 py-3">
          <div className="flex items-center gap-4 text-[#0e171b]">
            <div className="size-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#0e171b] text-lg font-bold leading-tight tracking-[-0.015em]">
              Homeasy
            </h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a
                className="text-[#0e171b] text-sm font-medium leading-normal"
                href="#"
              >
                Products
              </a>
              <a
                className="text-[#0e171b] text-sm font-medium leading-normal"
                href="#"
              >
                Solutions
              </a>
              <a
                className="text-[#0e171b] text-sm font-medium leading-normal"
                href="#"
              >
                Resources
              </a>
              <a
                className="text-[#0e171b] text-sm font-medium leading-normal"
                href="#"
              >
                Support
              </a>
            </div>
            <div className="flex gap-2">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7eff3] text-[#0e171b] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Buy</span>
              </button>
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#e7eff3] text-[#0e171b] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <div
                  className="text-[#0e171b]"
                  data-icon="Globe"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"></path>
                  </svg>
                </div>
              </button>
            </div>
            <div
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA0Oj5Q8kpYAp3Ak9EvF1w0CHuvG35NU1OIQWxvayAgL0Z39bm15TW07QqqN_beNOQAvRbe8PC4nWJYBjqdR8Rx2aAlh6iB0p3E8iDhGznlTUWKbvMV-TDW0fmrZOJeTOFOwJgMehFIWMIlSLvv1pH7fO2VYIi5mojCQMdSx6PyujDU1ladEOgnpt8N55paGVtUzB39TsUas24H1TI9BMMyy-HJpqkqaNMqQ9BADMzds36VO_XGqVA5HgzrNpdHFwCWdDDxciFK5LDG")',
              }}
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            ></div>
          </div>
        </header> */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#0e171b] tracking-light text-[32px] font-bold leading-tight min-w-72">
                Support
              </p>
            </div>
            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                  <div
                    className="text-[#4e7f97] flex border-none bg-[#e7eff3] items-center justify-center pl-4 rounded-l-lg border-r-0"
                    data-icon="MagnifyingGlass"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                    </svg>
                  </div>
                  <input
                    placeholder="Search for answers"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e171b] focus:outline-0 focus:ring-0 border-none bg-[#e7eff3] focus:border-none h-full placeholder:text-[#4e7f97] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    value=""
                  />
                </div>
              </label>
            </div>
            <h2 className="text-[#0e171b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Popular topics
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-1 gap-3 rounded-lg border border-[#d0dfe7] bg-slate-50 p-4 items-center">
                <div
                  className="text-[#0e171b]"
                  data-icon="House"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
                  </svg>
                </div>
                <h2 className="text-[#0e171b] text-base font-bold leading-tight">
                  Getting started
                </h2>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#d0dfe7] bg-slate-50 p-4 items-center">
                <div
                  className="text-[#0e171b]"
                  data-icon="Gear"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
                  </svg>
                </div>
                <h2 className="text-[#0e171b] text-base font-bold leading-tight">
                  Troubleshooting
                </h2>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#d0dfe7] bg-slate-50 p-4 items-center">
                <div
                  className="text-[#0e171b]"
                  data-icon="User"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                  </svg>
                </div>
                <h2 className="text-[#0e171b] text-base font-bold leading-tight">
                  Account management
                </h2>
              </div>
            </div>
            <h2 className="text-[#0e171b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Frequently asked questions
            </h2>
            <div className="flex flex-col p-4 gap-3">
              <details
                className="flex flex-col rounded-lg border border-[#d0dfe7] bg-slate-50 px-[15px] py-[7px] group"
                open=""
              >
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                  <p className="text-[#0e171b] text-sm font-medium leading-normal">
                    How do I set up my Homeasy device?
                  </p>
                  <div
                    className="text-[#0e171b] group-open:rotate-180"
                    data-icon="CaretDown"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                </summary>
                <p className="text-[#4e7f97] text-sm font-normal leading-normal pb-2">
                  To set up your Homeasy device, follow these steps: 1. Download
                  the Homeasy app from the App Store or Google Play Store. 2.
                  Create an account or log in if you already have one. 3. Follow
                  the in-app instructions to connect your device to your Wi-Fi
                  network. 4. Customize your device settings and preferences.
                  For more detailed instructions, refer to the user manual
                  included with your device or visit our support website.
                </p>
              </details>
              <details className="flex flex-col rounded-lg border border-[#d0dfe7] bg-slate-50 px-[15px] py-[7px] group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                  <p className="text-[#0e171b] text-sm font-medium leading-normal">
                    What should I do if my device is not connecting?
                  </p>
                  <div
                    className="text-[#0e171b] group-open:rotate-180"
                    data-icon="CaretDown"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                </summary>
                <p className="text-[#4e7f97] text-sm font-normal leading-normal pb-2">
                  To set up your Homeasy device, follow these steps: 1. Download
                  the Homeasy app from the App Store or Google Play Store. 2.
                  Create an account or log in if you already have one. 3. Follow
                  the in-app instructions to connect your device to your Wi-Fi
                  network. 4. Customize your device settings and preferences.
                  For more detailed instructions, refer to the user manual
                  included with your device or visit our support website.
                </p>
              </details>
              <details className="flex flex-col rounded-lg border border-[#d0dfe7] bg-slate-50 px-[15px] py-[7px] group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                  <p className="text-[#0e171b] text-sm font-medium leading-normal">
                    How can I manage my account settings?
                  </p>
                  <div
                    className="text-[#0e171b] group-open:rotate-180"
                    data-icon="CaretDown"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                </summary>
                <p className="text-[#4e7f97] text-sm font-normal leading-normal pb-2">
                  To set up your Homeasy device, follow these steps: 1. Download
                  the Homeasy app from the App Store or Google Play Store. 2.
                  Create an account or log in if you already have one. 3. Follow
                  the in-app instructions to connect your device to your Wi-Fi
                  network. 4. Customize your device settings and preferences.
                  For more detailed instructions, refer to the user manual
                  included with your device or visit our support website.
                </p>
              </details>
              <details className="flex flex-col rounded-lg border border-[#d0dfe7] bg-slate-50 px-[15px] py-[7px] group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                  <p className="text-[#0e171b] text-sm font-medium leading-normal">
                    Where can I find the user manual for my device?
                  </p>
                  <div
                    className="text-[#0e171b] group-open:rotate-180"
                    data-icon="CaretDown"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                </summary>
                <p className="text-[#4e7f97] text-sm font-normal leading-normal pb-2">
                  To set up your Homeasy device, follow these steps: 1. Download
                  the Homeasy app from the App Store or Google Play Store. 2.
                  Create an account or log in if you already have one. 3. Follow
                  the in-app instructions to connect your device to your Wi-Fi
                  network. 4. Customize your device settings and preferences.
                  For more detailed instructions, refer to the user manual
                  included with your device or visit our support website.
                </p>
              </details>
              <details className="flex flex-col rounded-lg border border-[#d0dfe7] bg-slate-50 px-[15px] py-[7px] group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                  <p className="text-[#0e171b] text-sm font-medium leading-normal">
                    What is the warranty policy for Homeasy products?
                  </p>
                  <div
                    className="text-[#0e171b] group-open:rotate-180"
                    data-icon="CaretDown"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                </summary>
                <p className="text-[#4e7f97] text-sm font-normal leading-normal pb-2">
                  To set up your Homeasy device, follow these steps: 1. Download
                  the Homeasy app from the App Store or Google Play Store. 2.
                  Create an account or log in if you already have one. 3. Follow
                  the in-app instructions to connect your device to your Wi-Fi
                  network. 4. Customize your device settings and preferences.
                  For more detailed instructions, refer to the user manual
                  included with your device or visit our support website.
                </p>
              </details>
            </div>
          </div>
        </div>
        <footer className="flex justify-center">
          <div className="flex max-w-240 flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <Link
                  className="text-[#4e7f97] text-base font-normal leading-normal min-w-40"
                  href="/support/terms-of-service"
                >
                  Terms of Service
                </Link>
                <Link
                  className="text-[#4e7f97] text-base font-normal leading-normal min-w-40"
                  href="/support/privacy-policy"
                >
                  Privacy Policy
                </Link>
                <Link
                  className="text-[#4e7f97] text-base font-normal leading-normal min-w-40"
                  href="/contactus"
                >
                  Contact Us
                </Link>
              </div>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
}
