import React from "react";

export default function page() {
  return (
    <div
      style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
      className="relative flex h-auto min-h-screen w-full flex-col bg-slate-50 group/design-root overflow-x-hidden"
    >
      <div className="layout-container flex h-full grow flex-col">
        
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap gap-2 p-4">
              <a
                className="text-[#4e7f97] text-base font-medium leading-normal"
                href="#"
              >
                Shop
              </a>
              <span className="text-[#4e7f97] text-base font-medium leading-normal">
                /
              </span>
              <span className="text-[#0e171b] text-base font-medium leading-normal">
                Cart
              </span>
            </div>
            <h2 className="text-[#0e171b] tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
              Your Cart
            </h2>
            <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2 justify-between">
              <div className="flex items-center gap-4">
                <div
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKwzLfMB25hL0bGqP5gUTewE9vZVzwGyi0KufuzR80P9CV30I59knzH7Ne1-1rpRrlS_6AmymqCdxIVmdf1RJ9NDyMdIZ7EYdpBbpuveokn29NjtcOydAUczJP0iPYZnKEtvtHrZCZtpkHuie4o5ke48aKHgTKSXnn3jr_4tziA7nVzmm5HdWT-MWXklR1iUNs8VnJZHAmSO5TQQ5mbF81X2gqHY8-FmRG49h1e71GorRyAIaLWCx1KWDglqtMIKDFfbbGgqMwAFb8")',
                  }}
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
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
              <div className="shrink-0">
                <p className="text-[#0e171b] text-base font-normal leading-normal">
                  ₹129
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2 justify-between">
              <div className="flex items-center gap-4">
                <div
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCbmTl4t5gqZolKyr8YCVO7iCiXTVcls9r1RSjcw1S3ukxpXVJsWZF5lldJfgNNZ_1Fw-_AiLKBD_NtB3fNSSIgAILVrB1MD6q4GsB2DE9SzSGiqpG9dLFg5PQZ8A_Vl5XXNShplQ9PHdDfSuqYRSeSfvDYEx4oOpJCoRDJT8GAJqsKmMdHpb3eABTuTv8Ab5wtSdKFIiJMnQl1dupDTTlWGzbyFVhcZcVNKRsry3GP9MO8DHqsLWXMKdcgir22AvE8wN0Rofwy_Vg6")',
                  }}
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                ></div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#0e171b] text-base font-medium leading-normal line-clamp-1">
                    Homeasy Smart Light Bulbs (4-Pack)
                  </p>
                  <p className="text-[#4e7f97] text-sm font-normal leading-normal line-clamp-2">
                    Quantity: 2
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                <p className="text-[#0e171b] text-base font-normal leading-normal">
                  ₹49.99
                </p>
              </div>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Discount code"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e171b] focus:outline-0 focus:ring-0 border border-[#d0dfe7] bg-slate-50 focus:border-[#d0dfe7] h-14 placeholder:text-[#4e7f97] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex px-4 py-3 justify-start">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7eff3] text-[#0e171b] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Apply</span>
              </button>
            </div>
            <h3 className="text-[#0e171b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Order Summary
            </h3>
            <div className="p-4">
              <div className="flex justify-between gap-x-6 py-2">
                <p className="text-[#4e7f97] text-sm font-normal leading-normal">
                  Subtotal
                </p>
                <p className="text-[#0e171b] text-sm font-normal leading-normal text-right">
                  ₹228.98
                </p>
              </div>
              <div className="flex justify-between gap-x-6 py-2">
                <p className="text-[#4e7f97] text-sm font-normal leading-normal">
                  Shipping
                </p>
                <p className="text-[#0e171b] text-sm font-normal leading-normal text-right">
                  Calculated at next step
                </p>
              </div>
              <div className="flex justify-between gap-x-6 py-2">
                <p className="text-[#4e7f97] text-sm font-normal leading-normal">
                  Estimated taxes
                </p>
                <p className="text-[#0e171b] text-sm font-normal leading-normal text-right">
                  Calculated at next step
                </p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between gap-x-6 py-2">
                <p className="text-[#4e7f97] text-sm font-normal leading-normal">
                  Total
                </p>
                <p className="text-[#0e171b] text-sm font-normal leading-normal text-right">
                  ₹228.98
                </p>
              </div>
            </div>
            <div className="flex px-4 py-3">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-[#19a2e6] text-slate-50 text-base font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Proceed to Checkout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
