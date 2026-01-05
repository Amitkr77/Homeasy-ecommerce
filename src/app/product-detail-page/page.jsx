import React from "react";

export default function page() {
  return (
    <div
      style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
      className="relative flex h-auto min-h-screen w-full flex-col bg-slate-50 group/design-root overflow-x-hidden"
    >
      <div className="layout-container flex h-full grow flex-col">
        <main className="flex flex-1 justify-center py-8 px-4 md:px-10 lg:px-20 bg-white">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            <nav className="flex flex-wrap gap-2 px-4 pb-6 pt-2 text-sm">
              <a
                className="text-[#4e7f97] hover:underline font-medium"
                href="#"
              >
                Products
              </a>
              <span className="text-[#d0dfe7]">/</span>
              <a
                className="text-[#4e7f97] hover:underline font-medium"
                href="#"
              >
                Smart Climate
              </a>
              <span className="text-[#d0dfe7]">/</span>
              <span className="text-[#0e171b] font-semibold">
                Homeasy Smart Thermostat
              </span>
            </nav>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 px-4 mb-12">
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="w-full overflow-hidden bg-slate-100 rounded-xl border border-[#e7eff3] shadow-sm aspect-[4/3] relative group cursor-zoom-in">
                  <div
                    className="absolute inset-0 bg-center bg-no-repeat bg-contain transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDRoGXwadMUIWxDCcvVYSa_n1MTaQkLIn180J5a3Tg20zVQ_Ybb1Y_LkMtRAfy1zOQenTf8HuSp5VWEKAcJKsET7cCGlv0bxImK9HS-wVy-jEeCk2HQX4Uqe0Vdvm3nEc7HGqNEHZKAwQAWkbAV3XlO5bGiDcUHxz0rGV9GqDyIsIFeKZDlL9yOLuPGMK7lsN8MZBMe7usQIWodj4bxnY1RG8QQn-MWWuxi5ViWEsBm_v2VKA9tkUZY1uXlXmfw4ykonfIml-er6ebg")',
                    }}
                  ></div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="aspect-square rounded-lg border-2 border-[#19a2e6] bg-slate-50 cursor-pointer overflow-hidden">
                    <div
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDRoGXwadMUIWxDCcvVYSa_n1MTaQkLIn180J5a3Tg20zVQ_Ybb1Y_LkMtRAfy1zOQenTf8HuSp5VWEKAcJKsET7cCGlv0bxImK9HS-wVy-jEeCk2HQX4Uqe0Vdvm3nEc7HGqNEHZKAwQAWkbAV3XlO5bGiDcUHxz0rGV9GqDyIsIFeKZDlL9yOLuPGMK7lsN8MZBMe7usQIWodj4bxnY1RG8QQn-MWWuxi5ViWEsBm_v2VKA9tkUZY1uXlXmfw4ykonfIml-er6ebg")',
                      }}
                      className="w-full h-full bg-center bg-contain bg-no-repeat"
                    ></div>
                  </div>
                  <div className="aspect-square rounded-lg border border-slate-200 bg-slate-50 cursor-pointer overflow-hidden hover:border-[#19a2e6] transition-colors">
                    <div
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCVUJ9CN2pybakUpQcaYIPqYVDgRe7Hwq0oKOh_878gkaxDUIgsJKmxKczA2dtcthjvDFd0fYkgW8SZyz8JeQic5t212irlYnZIQdUFyPova3cKMdxknmWY5-9ZELfZw0mRHI5NTPSm7kJ-cyHNuYO7i1aLcCIRy-VsjEpgRc766tYGU6hlT85hF5L4xmBsph29qo7sOwJtJkU_Ni0h-ysWgPdhMpqpkfYL3i3JhbnqLUhuTrZxKa7jyhI-XppL9695ZF_jCqbS_gE3")',
                      }}
                      className="w-full h-full bg-center bg-contain bg-no-repeat opacity-80 hover:opacity-100"
                    ></div>
                  </div>
                  <div className="aspect-square rounded-lg border border-slate-200 bg-slate-50 cursor-pointer overflow-hidden hover:border-[#19a2e6] transition-colors">
                    <div
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCXoZynIeQ0oHppmXmARSzxTqM8JXVLVAgFitA9EqFCblCKJuO20AENHCZQgGpc7Dgl0KNSpPkntPMgYqGAiArgx9Fi2Qmq9qMd7trZbkQtt_tS6_Wvi1xkah3E4VYtL-N8G_Anr9LpNLfecomRMObvIFQss4US6Ae_awpaFD5uJHAjxPrBaYMESuS_1_DKWXHvdfh01-JiyAOP1DbR9iPv_UQp8-uf9eaRmJP2E4e0mdqohRhUs4kTvTrSnRa4M2igeBo7a0epaLNg")',
                      }}
                      className="w-full h-full bg-center bg-contain bg-no-repeat opacity-80 hover:opacity-100"
                    ></div>
                  </div>
                  <div className="aspect-square rounded-lg border border-slate-200 bg-slate-50 cursor-pointer overflow-hidden hover:border-[#19a2e6] transition-colors flex items-center justify-center text-[#4e7f97] bg-slate-100 font-medium">
                    +3
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-6 sticky top-24 self-start">
                <div>
                  <h1 className="text-[#0e171b] tracking-tight text-4xl lg:text-5xl font-extrabold leading-tight mb-2">
                    Homeasy Smart Thermostat
                  </h1>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-[#19a2e6]">
                      <span
                        className="material-symbols-outlined text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span
                        className="material-symbols-outlined text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span
                        className="material-symbols-outlined text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span
                        className="material-symbols-outlined text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span
                        className="material-symbols-outlined text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star_half
                      </span>
                    </div>
                    <span className="text-sm font-medium text-[#4e7f97]">
                      (125 Reviews)
                    </span>
                  </div>
                  <p className="text-[#4e7f97] text-lg font-normal leading-relaxed">
                    Control your home's temperature from anywhere. Save energy
                    and enhance comfort with intelligent scheduling and remote
                    access.
                  </p>
                </div>
                <div className="h-px w-full bg-[#e7eff3]"></div>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-[#0e171b]">
                    ₹129.00
                  </span>
                  <span className="text-lg text-[#94b3c5] line-through mb-1">
                    ₹149.00
                  </span>
                  <span className="text-sm font-bold text-green-600 mb-1 ml-auto">
                    In Stock
                  </span>
                </div>
                <div className="flex flex-col gap-3 mt-2">
                  <button className="flex w-full cursor-pointer items-center justify-center rounded-xl h-14 bg-[#19a2e6] hover:bg-[#1487c0] text-white text-lg font-bold leading-normal tracking-wide shadow-lg shadow-blue-100 transition-all active:scale-[0.98]">
                    Add to Cart
                  </button>
                  <button className="flex w-full cursor-pointer items-center justify-center rounded-xl h-12 border-2 border-[#e7eff3] bg-transparent hover:bg-slate-50 text-[#0e171b] text-base font-bold leading-normal transition-colors">
                    Buy Now
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-[#4e7f97] mt-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#19a2e6]">
                      local_shipping
                    </span>
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#19a2e6]">
                      verified_user
                    </span>
                    <span>2 Year Warranty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#19a2e6]">
                      restart_alt
                    </span>
                    <span>30 Day Returns</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#19a2e6]">
                      support_agent
                    </span>
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-4 mt-8">
              <div className="lg:col-span-2 flex flex-col gap-10">
                <section>
                  <h3 className="text-[#0e171b] text-2xl font-bold leading-tight mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#19a2e6]">
                      featured_play_list
                    </span>{" "}
                    Features &amp; Benefits
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-[#e7eff3]">
                      <div className="flex items-center justify-center rounded-lg bg-white shadow-sm shrink-0 size-12 text-[#19a2e6]">
                        <span className="material-symbols-outlined">
                          calendar_month
                        </span>
                      </div>
                      <div>
                        <h4 className="text-[#0e171b] text-base font-bold mb-1">
                          Smart Scheduling
                        </h4>
                        <p className="text-[#4e7f97] text-sm leading-relaxed">
                          Automatically adjusts temperature based on your daily
                          routine.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-[#e7eff3]">
                      <div className="flex items-center justify-center rounded-lg bg-white shadow-sm shrink-0 size-12 text-[#19a2e6]">
                        <span className="material-symbols-outlined">wifi</span>
                      </div>
                      <div>
                        <h4 className="text-[#0e171b] text-base font-bold mb-1">
                          Remote Access
                        </h4>
                        <p className="text-[#4e7f97] text-sm leading-relaxed">
                          Control your thermostat from anywhere using your
                          smartphone.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-[#e7eff3]">
                      <div className="flex items-center justify-center rounded-lg bg-white shadow-sm shrink-0 size-12 text-[#19a2e6]">
                        <span className="material-symbols-outlined">
                          psychology
                        </span>
                      </div>
                      <div>
                        <h4 className="text-[#0e171b] text-base font-bold mb-1">
                          Adaptive Learning
                        </h4>
                        <p className="text-[#4e7f97] text-sm leading-relaxed">
                          Learns your preferences for optimal comfort
                          automatically.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-[#e7eff3]">
                      <div className="flex items-center justify-center rounded-lg bg-white shadow-sm shrink-0 size-12 text-[#19a2e6]">
                        <span className="material-symbols-outlined">
                          notifications_active
                        </span>
                      </div>
                      <div>
                        <h4 className="text-[#0e171b] text-base font-bold mb-1">
                          Smart Alerts
                        </h4>
                        <p className="text-[#4e7f97] text-sm leading-relaxed">
                          Get notified about extreme temps or system issues
                          instantly.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-[#0e171b] text-2xl font-bold leading-tight flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#19a2e6]">
                        reviews
                      </span>{" "}
                      Customer Reviews
                    </h3>
                    <button className="text-[#19a2e6] font-bold text-sm hover:underline">
                      Write a Review
                    </button>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-6 mb-8">
                    <div className="flex flex-wrap items-center gap-8">
                      <div className="flex flex-col items-center justify-center border-r border-[#d0dfe7] pr-8 min-w-[120px]">
                        <span className="text-5xl font-black text-[#0e171b]">
                          4.6
                        </span>
                        <div className="flex text-[#19a2e6] my-2">
                          <span
                            className="material-symbols-outlined text-sm"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            star
                          </span>
                          <span
                            className="material-symbols-outlined text-sm"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            star
                          </span>
                          <span
                            className="material-symbols-outlined text-sm"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            star
                          </span>
                          <span
                            className="material-symbols-outlined text-sm"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            star
                          </span>
                          <span
                            className="material-symbols-outlined text-sm"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            star_half
                          </span>
                        </div>
                        <span className="text-sm text-[#4e7f97]">
                          125 Reviews
                        </span>
                      </div>
                      <div className="flex-1 min-w-[240px]">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-bold w-3">5</span>
                          <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-[#19a2e6] w-[50%]"></div>
                          </div>
                          <span className="text-xs text-[#4e7f97] w-8 text-right">
                            50%
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-bold w-3">4</span>
                          <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-[#19a2e6] w-[30%]"></div>
                          </div>
                          <span className="text-xs text-[#4e7f97] w-8 text-right">
                            30%
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-bold w-3">3</span>
                          <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-[#19a2e6] w-[10%]"></div>
                          </div>
                          <span className="text-xs text-[#4e7f97] w-8 text-right">
                            10%
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-bold w-3">2</span>
                          <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-[#19a2e6] w-[5%]"></div>
                          </div>
                          <span className="text-xs text-[#4e7f97] w-8 text-right">
                            5%
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold w-3">1</span>
                          <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-[#19a2e6] w-[5%]"></div>
                          </div>
                          <span className="text-xs text-[#4e7f97] w-8 text-right">
                            5%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="border-b border-[#e7eff3] pb-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div
                            style={{
                              backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCxHc7hMCLoHpHGrr9QCjWsrCXjml3Ex8JlXOkYCUezWLKgiN6zgb_sZTTD_dWpd_bG7E-KBgH7Ff3EskVZ54x96VEVwAuVJsKOmJ-xIa0wUmyyN7loqdXzFaOhXcbxSlcXwlZEK6qqXUUGpj6obxPa1EUuULEXRbrXO4BegFyPgba4ZFTfEMImC7F3uS7SJ6qHtHiXRnqPuO_OY3cSgvK36CaX0m36Q0tzsgrR50eJ4y-1VstSsAzUr7ZwRvyqRTWWg6PZQLWgEBGP")',
                            }}
                            className="size-10 rounded-full bg-cover bg-center"
                          ></div>
                          <div>
                            <p className="text-[#0e171b] font-bold text-sm">
                              Ethan Carter
                            </p>
                            <div className="flex text-[#19a2e6] text-xs">
                              <span
                                className="material-symbols-outlined text-sm"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                              >
                                star
                              </span>
                              <span
                                className="material-symbols-outlined text-sm"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                              >
                                star
                              </span>
                              <span
                                className="material-symbols-outlined text-sm"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                              >
                                star
                              </span>
                              <span
                                className="material-symbols-outlined text-sm"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                              >
                                star
                              </span>
                              <span
                                className="material-symbols-outlined text-sm"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                              >
                                star
                              </span>
                            </div>
                          </div>
                        </div>
                        <span className="text-xs text-[#94b3c5]">
                          2 months ago
                        </span>
                      </div>
                      <p className="text-[#4e7f97] text-sm leading-relaxed mb-3">
                        This thermostat has been a game-changer for my home.
                        It's easy to install and the app is very user-friendly.
                        I love being able to control the temperature from
                        anywhere.
                      </p>
                      <div className="flex gap-4 text-[#94b3c5] text-xs font-medium">
                        <button className="flex items-center gap-1 hover:text-[#19a2e6] transition-colors">
                          <span className="material-symbols-outlined text-sm">
                            thumb_up
                          </span>{" "}
                          Helpful (15)
                        </button>
                      </div>
                    </div>
                    <div className="border-b border-[#e7eff3] pb-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div
                            style={{
                              backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfWRGNhc9AhQAe7gBbYqN7QhF5sG2eW3C4f0-yNS_aqXSTtao_IILygUSrR_OIPdUFUrSqKHIkmDPACdkfF16xoiz5cgRE1dCt09gm1U_VWYoXk1GXpLtYZI3DkQicWABuDgLzraxh5-rlvopXLl0xCOAKtSaj4a0mMybQFRenM-g7rBEkTscnIAnmHxWbOjpS5NFpmojfNhOisbMV1Y-LVlIXxmDK99p2ZmG2EJpXx3kYKvTMsfx2_qwvDTIXmXVkXwkYuVnGl3gM")',
                            }}
                            className="size-10 rounded-full bg-cover bg-center"
                          ></div>
                          <div>
                            <p className="text-[#0e171b] font-bold text-sm">
                              Olivia Bennett
                            </p>
                            <div className="flex text-[#19a2e6] text-xs">
                              <span
                                className="material-symbols-outlined text-sm"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                              >
                                star
                              </span>
                              <span
                                className="material-symbols-outlined text-sm"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                              >
                                star
                              </span>
                              <span
                                className="material-symbols-outlined text-sm"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                              >
                                star
                              </span>
                              <span
                                className="material-symbols-outlined text-sm"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                              >
                                star
                              </span>
                              <span
                                className="material-symbols-outlined text-[#d0dfe7] text-sm"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                              >
                                star
                              </span>
                            </div>
                          </div>
                        </div>
                        <span className="text-xs text-[#94b3c5]">
                          3 months ago
                        </span>
                      </div>
                      <p className="text-[#4e7f97] text-sm leading-relaxed mb-3">
                        The smart scheduling feature is fantastic. It has helped
                        me save a lot on my energy bills. The only downside is
                        that it took a bit of time to set up initially.
                      </p>
                      <div className="flex gap-4 text-[#94b3c5] text-xs font-medium">
                        <button className="flex items-center gap-1 hover:text-[#19a2e6] transition-colors">
                          <span className="material-symbols-outlined text-sm">
                            thumb_up
                          </span>{" "}
                          Helpful (8)
                        </button>
                      </div>
                    </div>
                  </div>
                  <button className="w-full py-3 mt-4 text-[#19a2e6] font-bold text-sm border border-[#e7eff3] rounded-lg hover:bg-slate-50 transition-colors">
                    See all 125 reviews
                  </button>
                </section>
              </div>
              <div className="lg:col-span-1 flex flex-col gap-8">
                <div className="bg-white rounded-xl border border-[#e7eff3] overflow-hidden shadow-sm">
                  <div className="bg-slate-50 px-5 py-3 border-b border-[#e7eff3] font-bold text-[#0e171b]">
                    Specifications
                  </div>
                  <div className="p-5 flex flex-col gap-4">
                    <div className="flex justify-between items-center text-sm border-b border-dashed border-[#e7eff3] pb-2 last:border-0 last:pb-0">
                      <span className="text-[#4e7f97]">Dimensions</span>
                      <span className="font-medium text-[#0e171b]">
                        4.5 x 4.5 x 1.2 in
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm border-b border-dashed border-[#e7eff3] pb-2 last:border-0 last:pb-0">
                      <span className="text-[#4e7f97]">Weight</span>
                      <span className="font-medium text-[#0e171b]">
                        0.5 lbs
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm border-b border-dashed border-[#e7eff3] pb-2 last:border-0 last:pb-0">
                      <span className="text-[#4e7f97]">Power</span>
                      <span className="font-medium text-[#0e171b]">24V AC</span>
                    </div>
                    <div className="flex justify-between items-center text-sm border-b border-dashed border-[#e7eff3] pb-2 last:border-0 last:pb-0">
                      <span className="text-[#4e7f97]">Wifi</span>
                      <span className="font-medium text-[#0e171b]">
                        802.11 b/g/n
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm border-b border-dashed border-[#e7eff3] pb-2 last:border-0 last:pb-0">
                      <span className="text-[#4e7f97]">Warranty</span>
                      <span className="font-medium text-[#0e171b]">
                        2 years
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-[#0e171b] text-lg font-bold mb-4">
                    Compatible With
                  </h3>
                  <div className="flex flex-col gap-3">
                    <a
                      className="flex items-center gap-3 p-3 rounded-lg border border-[#e7eff3] bg-white hover:border-[#19a2e6] hover:shadow-md transition-all group"
                      href="#"
                    >
                      <div
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCVUJ9CN2pybakUpQcaYIPqYVDgRe7Hwq0oKOh_878gkaxDUIgsJKmxKczA2dtcthjvDFd0fYkgW8SZyz8JeQic5t212irlYnZIQdUFyPova3cKMdxknmWY5-9ZELfZw0mRHI5NTPSm7kJ-cyHNuYO7i1aLcCIRy-VsjEpgRc766tYGU6hlT85hF5L4xmBsph29qo7sOwJtJkU_Ni0h-ysWgPdhMpqpkfYL3i3JhbnqLUhuTrZxKa7jyhI-XppL9695ZF_jCqbS_gE3")',
                        }}
                        className="size-10 bg-center bg-cover rounded-md"
                      ></div>
                      <div>
                        <p className="font-bold text-sm text-[#0e171b] group-hover:text-[#19a2e6] transition-colors">
                          Homeasy Hub
                        </p>
                        <p className="text-xs text-[#4e7f97]">
                          Central Control
                        </p>
                      </div>
                      <span className="material-symbols-outlined ml-auto text-[#d0dfe7] group-hover:text-[#19a2e6]">
                        chevron_right
                      </span>
                    </a>
                    <a
                      className="flex items-center gap-3 p-3 rounded-lg border border-[#e7eff3] bg-white hover:border-[#19a2e6] hover:shadow-md transition-all group"
                      href="#"
                    >
                      <div
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCXoZynIeQ0oHppmXmARSzxTqM8JXVLVAgFitA9EqFCblCKJuO20AENHCZQgGpc7Dgl0KNSpPkntPMgYqGAiArgx9Fi2Qmq9qMd7trZbkQtt_tS6_Wvi1xkah3E4VYtL-N8G_Anr9LpNLfecomRMObvIFQss4US6Ae_awpaFD5uJHAjxPrBaYMESuS_1_DKWXHvdfh01-JiyAOP1DbR9iPv_UQp8-uf9eaRmJP2E4e0mdqohRhUs4kTvTrSnRa4M2igeBo7a0epaLNg")',
                        }}
                        className="size-10 bg-center bg-cover rounded-md"
                      ></div>
                      <div>
                        <p className="font-bold text-sm text-[#0e171b] group-hover:text-[#19a2e6] transition-colors">
                          Homeasy Speaker
                        </p>
                        <p className="text-xs text-[#4e7f97]">Voice Control</p>
                      </div>
                      <span className="material-symbols-outlined ml-auto text-[#d0dfe7] group-hover:text-[#19a2e6]">
                        chevron_right
                      </span>
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-[#0e171b] text-lg font-bold mb-4">FAQ</h3>
                  <div className="flex flex-col gap-2">
                    <details className="group bg-slate-50 border border-[#e7eff3] rounded-lg">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-3 text-sm text-[#0e171b]">
                        <span>Installation Guide</span>
                        <span className="transition group-open:rotate-180">
                          <svg
                            fill="none"
                            height="24"
                            shape-rendering="geometricPrecision"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p className="text-[#4e7f97] text-xs mt-1 p-3 pt-0 leading-relaxed">
                        Most users install it in under 30 minutes. The app
                        guides you step-by-step.
                      </p>
                    </details>
                    <details className="group bg-slate-50 border border-[#e7eff3] rounded-lg">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-3 text-sm text-[#0e171b]">
                        <span>Warranty Period?</span>
                        <span className="transition group-open:rotate-180">
                          <svg
                            fill="none"
                            height="24"
                            shape-rendering="geometricPrecision"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p className="text-[#4e7f97] text-xs mt-1 p-3 pt-0 leading-relaxed">
                        It comes with a standard 2-year manufacturer's warranty.
                      </p>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-[#0e171b] text-white py-12 px-10">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Homeasy</h3>
              <p className="text-slate-400 text-sm">
                Smart solutions for modern living.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Shop</h4>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>
                  <a className="hover:text-white" href="#">
                    All Products
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Smart Hubs
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Accessories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>
                  <a className="hover:text-white" href="#">
                    Help Center
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Warranty
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Subscribe</h4>
              <div className="flex gap-2">
                <input
                  className="bg-slate-800 border-none rounded px-3 py-2 text-sm text-white w-full"
                  placeholder="Email address"
                  type="email"
                />
                <button className="bg-[#19a2e6] px-4 py-2 rounded text-sm font-bold">
                  Join
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
