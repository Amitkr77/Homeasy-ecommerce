import React from "react";

export default function page() {
  return (
    <div
      style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
      className="relative flex h-auto min-h-screen w-full flex-col bg-slate-50 group/design-root overflow-x-hidden"
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <h2 className="text-[#0e171b] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
              Checkout
            </h2>
            <div className="flex flex-col gap-3 p-4">
              <div className="flex gap-6 justify-between">
                <p className="text-[#0e171b] text-base font-medium leading-normal">
                  Shipping
                </p>
              </div>
              <div className="rounded bg-[#d0dfe7]">
                <div
                  className="h-2 rounded bg-[#19a2e6]"
                  style={{ width: "33.33%" }}
                ></div>
              </div>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0e171b] text-base font-medium leading-normal pb-2">
                  Full Name
                </p>
                <input
                  placeholder="Enter your full name"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e171b] focus:outline-0 focus:ring-0 border-none bg-[#e7eff3] focus:border-none h-14 placeholder:text-[#4e7f97] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0e171b] text-base font-medium leading-normal pb-2">
                  Address
                </p>
                <input
                  placeholder="Enter your address"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e171b] focus:outline-0 focus:ring-0 border-none bg-[#e7eff3] focus:border-none h-14 placeholder:text-[#4e7f97] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0e171b] text-base font-medium leading-normal pb-2">
                  City
                </p>
                <input
                  placeholder="Enter your city"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e171b] focus:outline-0 focus:ring-0 border-none bg-[#e7eff3] focus:border-none h-14 placeholder:text-[#4e7f97] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0e171b] text-base font-medium leading-normal pb-2">
                  State
                </p>
                <input
                  placeholder="Enter your state"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e171b] focus:outline-0 focus:ring-0 border-none bg-[#e7eff3] focus:border-none h-14 placeholder:text-[#4e7f97] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0e171b] text-base font-medium leading-normal pb-2">
                  Zip Code
                </p>
                <input
                  placeholder="Enter your zip code"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e171b] focus:outline-0 focus:ring-0 border-none bg-[#e7eff3] focus:border-none h-14 placeholder:text-[#4e7f97] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0e171b] text-base font-medium leading-normal pb-2">
                  Phone Number
                </p>
                <input
                  placeholder="Enter your phone number"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e171b] focus:outline-0 focus:ring-0 border-none bg-[#e7eff3] focus:border-none h-14 placeholder:text-[#4e7f97] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <h3 className="text-[#0e171b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Order Summary
            </h3>
            <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmQYBxQmWaa8hTk04OX7Id8n10-lKLf341xmAzWGqb9nkyWQ9FjDMQoW3JA0lQV7Ky0cJvxJ_Lnf5RZVSplmMY7htHSyldNk6opf_gXBM0qVVGkkawfYMAr1JswXNQRKYual4ebVhaZt4JeRnVWJGQ3rCfnna89lMi2m3Vti7pr957oiv1vn2_UG8m7WcCG6ojGXOtINGdqz9DA49o10122DoVyyXUJRGpWdcZVXc1vfnYNTiub1CxfavtQUuUIvK7QVqoMqNSspAJ")',
                }}
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#0e171b] text-base font-medium leading-normal line-clamp-1">
                  Homeasy Smart Thermostat
                </p>
                <p className="text-[#4e7f97] text-sm font-normal leading-normal line-clamp-2">
                  Quantity: 1
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
              <div
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCbmTl4t5gqZolKyr8YCVO7iCiXTVcls9r1RSjcw1S3ukxpXVJsWZF5lldJfgNNZ_1Fw-_AiLKBD_NtB3fNSSIgAILVrB1MD6q4GsB2DE9SzSGiqpG9dLFg5PQZ8A_Vl5XXNShplQ9PHdDfSuqYRSeSfvDYEx4oOpJCoRDJT8GAJqsKmMdHpb3eABTuTv8Ab5wtSdKFIiJMnQl1dupDTTlWGzbyFVhcZcVNKRsry3GP9MO8DHqsLWXMKdcgir22AvE8wN0Rofwy_Vg6")',
                }}
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#0e171b] text-base font-medium leading-normal line-clamp-1">
                  Homeasy Smart Bulbs
                </p>
                <p className="text-[#4e7f97] text-sm font-normal leading-normal line-clamp-2">
                  Quantity: 2
                </p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between gap-x-6 py-2">
                <p className="text-[#4e7f97] text-sm font-normal leading-normal">
                  Subtotal
                </p>
                <p className="text-[#0e171b] text-sm font-normal leading-normal text-right">
                  ₹199.99
                </p>
              </div>
              <div className="flex justify-between gap-x-6 py-2">
                <p className="text-[#4e7f97] text-sm font-normal leading-normal">
                  Shipping
                </p>
                <p className="text-[#0e171b] text-sm font-normal leading-normal text-right">
                  Free
                </p>
              </div>
              <div className="flex justify-between gap-x-6 py-2">
                <p className="text-[#4e7f97] text-sm font-normal leading-normal">
                  Taxes
                </p>
                <p className="text-[#0e171b] text-sm font-normal leading-normal text-right">
                  ₹15.00
                </p>
              </div>
              <div className="flex justify-between gap-x-6 py-2">
                <p className="text-[#4e7f97] text-sm font-normal leading-normal">
                  Total
                </p>
                <p className="text-[#0e171b] text-sm font-normal leading-normal text-right">
                  ₹214.99
                </p>
              </div>
            </div>
            <div className="flex px-4 py-3">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-[#19a2e6] text-slate-50 text-base font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Continue to Payment</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
