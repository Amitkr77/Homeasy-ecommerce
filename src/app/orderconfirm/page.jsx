import React from "react";

export default function Page() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-slate-50 overflow-x-hidden font-['Space_Grotesk','Noto_Sans',sans-serif]">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center px-40 py-5">
          <div className="layout-content-container flex max-w-[960px] flex-1 flex-col">
            <h2 className="pb-3 pt-5 px-4 text-center text-[28px] font-bold leading-tight tracking-light text-[#0e171b]">
              Thank you for your order!
            </h2>
            <p className="px-4 pb-3 pt-1 text-center text-base font-normal leading-normal text-[#0e171b]">
              Your order has been placed and is being processed. You will
              receive an email confirmation shortly with more details.
            </p>

            <h3 className="px-4 pb-2 pt-4 text-lg font-bold leading-tight tracking-[-0.015em] text-[#0e171b]">
              Order Details
            </h3>
            <div className="grid grid-cols-[20%_1fr] gap-x-6 p-4">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#d0dfe7] py-5">
                <p className="text-sm font-normal leading-normal text-[#4e7f97]">
                  Order Number
                </p>
                <p className="text-sm font-normal leading-normal text-[#0e171b]">
                  #123456789
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#d0dfe7] py-5">
                <p className="text-sm font-normal leading-normal text-[#4e7f97]">
                  Estimated Delivery
                </p>
                <p className="text-sm font-normal leading-normal text-[#0e171b]">
                  July 20, 2024
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#d0dfe7] py-5">
                <p className="text-sm font-normal leading-normal text-[#4e7f97]">
                  Order Date
                </p>
                <p className="text-sm font-normal leading-normal text-[#0e171b]">
                  July 13, 2024
                </p>
              </div>
            </div>

            <h3 className="px-4 pb-2 pt-4 text-lg font-bold leading-tight tracking-[-0.015em] text-[#0e171b]">
              Order Summary
            </h3>
            <div className="px-4 py-3">
              <div className="overflow-hidden rounded-lg border border-[#d0dfe7] bg-slate-50">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-[#0e171b]">
                        Item
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-[#0e171b]">
                        Quantity
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-[#0e171b]">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-t-[#d0dfe7]">
                      <td className="h-[72px] px-4 py-2 text-sm font-normal text-[#0e171b]">
                        Homeasy Smart Thermostat
                      </td>
                      <td className="h-[72px] px-4 py-2 text-sm font-normal text-[#4e7f97]">
                        1
                      </td>
                      <td className="h-[72px] px-4 py-2 text-sm font-normal text-[#4e7f97]">
                        $129.99
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#d0dfe7]">
                      <td className="h-[72px] px-4 py-2 text-sm font-normal text-[#0e171b]">
                        Homeasy Smart Light Bulbs (4-Pack)
                      </td>
                      <td className="h-[72px] px-4 py-2 text-sm font-normal text-[#4e7f97]">
                        2
                      </td>
                      <td className="h-[72px] px-4 py-2 text-sm font-normal text-[#4e7f97]">
                        $49.99
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-[20%_1fr] gap-x-6 p-4">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#d0dfe7] py-5">
                <p className="text-sm font-normal leading-normal text-[#4e7f97]">
                  Subtotal
                </p>
                <p className="text-sm font-normal leading-normal text-[#0e171b]">
                  $229.97
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#d0dfe7] py-5">
                <p className="text-sm font-normal leading-normal text-[#4e7f97]">
                  Shipping
                </p>
                <p className="text-sm font-normal leading-normal text-[#0e171b]">
                  Free
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#d0dfe7] py-5">
                <p className="text-sm font-normal leading-normal text-[#4e7f97]">
                  Tax
                </p>
                <p className="text-sm font-normal leading-normal text-[#0e171b]">
                  $18.40
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#d0dfe7] py-5">
                <p className="text-sm font-normal leading-normal text-[#4e7f97]">
                  Total
                </p>
                <p className="text-sm font-normal leading-normal text-[#0e171b]">
                  $248.37
                </p>
              </div>
            </div>

            <h3 className="px-4 pb-2 pt-4 text-lg font-bold leading-tight tracking-[-0.015em] text-[#0e171b]">
              Shipping Address
            </h3>
            <p className="px-4 pb-3 pt-1 text-base font-normal leading-normal text-[#0e171b]">
              Sophia Carter
              <br />
              123 Elm Street
              <br />
              Anytown, CA 91234
            </p>

            <h3 className="px-4 pb-2 pt-4 text-lg font-bold leading-tight tracking-[-0.015em] text-[#0e171b]">
              Billing Details
            </h3>
            <div className="grid grid-cols-[20%_1fr] gap-x-6 p-4">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#d0dfe7] py-5">
                <p className="text-sm font-normal leading-normal text-[#4e7f97]">
                  Payment Method
                </p>
                <p className="text-sm font-normal leading-normal text-[#0e171b]">
                  Visa
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#d0dfe7] py-5">
                <p className="text-sm font-normal leading-normal text-[#4e7f97]">
                  Card Number
                </p>
                <p className="text-sm font-normal leading-normal text-[#0e171b]">
                  Ending in 4567
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#d0dfe7] py-5">
                <p className="text-sm font-normal leading-normal text-[#4e7f97]">
                  Billing Address
                </p>
                <p className="text-sm font-normal leading-normal text-[#0e171b]">
                  Same as shipping
                </p>
              </div>
            </div>

            <div className="flex justify-center px-4 py-3">
              <div className="flex max-w-[480px] flex-1 flex-wrap justify-center gap-3">
                <button className="flex h-10 min-w-[84px] grow items-center justify-center rounded-lg bg-[#19a2e6] px-4 text-sm font-bold tracking-[0.015em] text-slate-50">
                  Track Order
                </button>
                <button className="flex h-10 min-w-[84px] grow items-center justify-center rounded-lg bg-[#e7eff3] px-4 text-sm font-bold tracking-[0.015em] text-[#0e171b]">
                  View Order History
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
