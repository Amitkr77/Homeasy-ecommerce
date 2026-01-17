"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Truck,
  Shield,
  RefreshCw,
  Headphones,
  Calendar,
  Wifi,
  Brain as
  Psychology,
  MessageCircle as Notifications,
  ThumbsUp,
  ChevronRight,
  ChevronDown,
  Loader2,
  AlertCircle,
} from "lucide-react";
import AddToCartButton from "@/components/AddToCartButton";

export default function ProductPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    async function fetchProduct() {
      try {
        setLoading(true);
        const response = await fetch(`/api/products/${slug}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.success) {
          setProduct(data.data);
          console.log(data);
        } else {
          throw new Error(data.error || "Failed to load product");
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="h-8 w-8 animate-spin text-[#19a2e6]" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Product Not Found
          </h2>
          <p className="text-gray-600 mb-4">
            {error || "Product not available."}
          </p>
          <button
            onClick={() => router.push("/products")}
            className="px-6 py-2 bg-[#19a2e6] text-white rounded-lg font-bold hover:bg-[#1487c0] transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const images = product.images || [];
  const mainImageUrl =
    product.mainImage ||
    images.find((img) => img.isMain)?.url ||
    images[0]?.url ||
    "/placeholder.jpg";
  const rating = product.rating || 0;
  const ratingStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const reviewsCount = product.reviewsCount || 125;

  // Prepare thumbnails: slice first 4, replace last with placeholder if more
  let displayThumbs = images.slice(0, 4);
  const hasMoreImages = images.length > 4;
  if (hasMoreImages) {
    displayThumbs[3] = null; // Placeholder for +X
  }

  const specs = [
    product.dimensions && { label: "Dimensions", value: product.dimensions },
    product.weight && { label: "Weight", value: product.weight },
    product.power && { label: "Power", value: product.power },
    product.wifiStandard && { label: "Wifi", value: product.wifiStandard },
    product.warranty && {
      label: "Warranty",
      value: product.warrantyDisplayText || product.warranty,
    },
    product.compatibility && {
      label: "Compatibility",
      value: product.compatibility,
    },
  ].filter(Boolean);

  const compatible = product.compatible || [];

  const faqs = product.faqs || [
    {
      question: "Installation Guide",
      answer:
        "Most users install it in under 30 minutes. The app guides you step-by-step.",
    },
    {
      question: "Warranty Period?",
      answer: `${product.warrantyDisplayText || product.warranty}`,
    },
  ];

  return (
    <div
      style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
      className="relative flex h-auto min-h-screen w-full flex-col bg-slate-50 group/design-root overflow-x-hidden"
    >
      <div className="layout-container flex h-full grow flex-col">
        <main className="flex flex-1 justify-center py-8 px-4 md:px-10 lg:px-20 bg-white">
          <div className="layout-content-container flex flex-col max-w-300 flex-1">
            <nav className="flex flex-wrap gap-2 px-4 pb-6 pt-2 text-sm">
              <Link
                className="text-[#4e7f97] hover:underline font-medium"
                href="/products"
              >
                Products
              </Link>

              <span className="text-[#d0dfe7]">/</span>
              <span className="text-[#0e171b] font-semibold">
                {product.name}
              </span>
            </nav>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 px-4 mb-12">
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="w-full overflow-hidden bg-slate-100 rounded-xl border border-[#e7eff3] shadow-sm aspect-[4/3] relative group cursor-zoom-in">
                  <img
                    src={mainImageUrl}
                    alt={product.name}
                    // fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                    sizes="100vw"
                  />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {displayThumbs.map((img, index) => (
                    <div
                      key={index}
                      className={`aspect-square rounded-lg border bg-slate-50 cursor-pointer overflow-hidden ${
                        index === 0
                          ? "border-2 border-[#19a2e6]"
                          : "border border-slate-200 hover:border-[#19a2e6] transition-colors"
                      }`}
                    >
                      {img ? (
                        <img
                          src={img.url}
                          alt={`${product.name} thumbnail ${index + 1}`}
                          fill
                          className="object-contain opacity-80 hover:opacity-100"
                          sizes="(max-width: 768px) 25vw, 100px"
                        />
                      ) : (
                        <div className="flex items-center justify-center text-[#4e7f97] bg-slate-100 font-medium">
                          +{images.length - 4}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-6 sticky top-24 self-start">
                <div>
                  <h1 className="text-[#0e171b] tracking-tight text-4xl lg:text-5xl font-extrabold leading-tight mb-2">
                    {product.name}
                  </h1>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-[#19a2e6]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < ratingStars ? "fill-current" : ""
                          }`}
                        />
                      ))}
                      {hasHalfStar && (
                        <path
                          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                          className="h-4 w-4 fill-current text-[#19a2e6] stroke-current"
                        /> // Simplified half star approximation
                      )}
                    </div>
                    <span className="text-sm font-medium text-[#4e7f97]">
                      ({reviewsCount} Reviews)
                    </span>
                  </div>
                  <p className="text-[#4e7f97] text-lg font-normal leading-relaxed">
                    {product.fullDescription}
                  </p>
                </div>
                <div className="h-px w-full bg-[#e7eff3]"></div>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-[#0e171b]">
                    ₹{product.basePrice}
                  </span>
                  {product.compareAtPrice && (
                    <span className="text-lg text-[#94b3c5] line-through mb-1">
                      ₹{product.compareAtPrice}
                    </span>
                  )}
                  <span
                    className={`text-sm font-bold mb-1 ml-auto ${
                      product.inStock ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
                <div className="flex flex-col gap-3 mt-2">
                  <AddToCartButton product={product} />
                  <Link
                    href={`/checkout/${slug}`}
                    className="flex w-full cursor-pointer items-center justify-center rounded-xl h-12 border-2 border-[#e7eff3] bg-transparent hover:bg-slate-50 text-[#0e171b] text-base font-bold leading-normal transition-colors"
                  >
                    Buy Now
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-[#4e7f97] mt-2">
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-[#19a2e6]" />
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-[#19a2e6]" />
                    <span>2 Year Warranty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RefreshCw className="h-4 w-4 text-[#19a2e6]" />
                    <span>30 Day Returns</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Headphones className="h-4 w-4 text-[#19a2e6]" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-4 mt-8">
              <div className="lg:col-span-2 flex flex-col gap-10">
                <section>
                  <h3 className="text-[#0e171b] text-2xl font-bold leading-tight mb-6 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-[#19a2e6]" />
                    Features &amp; Benefits
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-[#e7eff3]">
                      <div className="flex items-center justify-center rounded-lg bg-white shadow-sm shrink-0 size-12 text-[#19a2e6]">
                        <Calendar className="h-5 w-5" />
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
                        <Wifi className="h-5 w-5" />
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
                        <Psychology className="h-5 w-5" />
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
                        <Notifications className="h-5 w-5" />
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
                      <ThumbsUp className="h-5 w-5 text-[#19a2e6]" />
                      Customer Reviews
                    </h3>
                    <Link
                      href={`#reviews-${slug}`}
                      className="text-[#19a2e6] font-bold text-sm hover:underline"
                    >
                      Write a Review
                    </Link>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-6 mb-8">
                    <div className="flex flex-wrap items-center gap-8">
                      <div className="flex flex-col items-center justify-center border-r border-[#d0dfe7] pr-8 min-w-[120px]">
                        <span className="text-5xl font-black text-[#0e171b]">
                          {rating.toFixed(1)}
                        </span>
                        <div className="flex text-[#19a2e6] my-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < ratingStars ? "fill-current" : ""
                              }`}
                            />
                          ))}
                          {hasHalfStar && (
                            <Star className="h-4 w-4 fill-current stroke-current text-yellow-400" />
                          )}
                        </div>
                        <span className="text-sm text-[#4e7f97]">
                          {reviewsCount} Reviews
                        </span>
                      </div>
                      <div className="flex-1 min-w-[240px]">
                        {/* Hardcoded review distribution; ideally fetch from product.reviews */}
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
                  {/* Hardcoded reviews; ideally map over product.reviews */}
                  <div className="flex flex-col gap-6">
                    <div className="border-b border-[#e7eff3] pb-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className="size-10 rounded-full bg-cover bg-center"
                            style={{
                              backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCxHc7hMCLoHpHGrr9QCjWsrCXjml3Ex8JlXOkYCUezWLKgiN6zgb_sZTTD_dWpd_bG7E-KBgH7Ff3EskVZ54x96VEVwAuVJsKOmJ-xIa0wUmyyN7loqdXzFaOhXcbxSlcXwlZEK6qqXUUGpj6obxPa1EUuULEXRbrXO4BegFyPgba4ZFTfEMImC7F3uS7SJ6qHtHiXRnqPuO_OY3cSgvK36CaX0m36Q0tzsgrR50eJ4y-1VstSsAzUr7ZwRvyqRTWWg6PZQLWgEBGP")',
                            }}
                          ></div>
                          <div>
                            <p className="text-[#0e171b] font-bold text-sm">
                              Ethan Carter
                            </p>
                            <div className="flex text-[#19a2e6] text-xs">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-3 w-3 fill-current"
                                />
                              ))}
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
                          <ThumbsUp className="h-3 w-3" />
                          Helpful (15)
                        </button>
                      </div>
                    </div>
                    <div className="border-b border-[#e7eff3] pb-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className="size-10 rounded-full bg-cover bg-center"
                            style={{
                              backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfWRGNhc9AhQAe7gBbYqN7QhF5sG2eW3C4f0-yNS_aqXSTtao_IILygUSrR_OIPdUFUrSqKHIkmDPACdkfF16xoiz5cgRE1dCt09gm1U_VWYoXk1GXpLtYZI3DkQicWABuDgLzraxh5-rlvopXLl0xCOAKtSaj4a0mMybQFRenM-g7rBEkTscnIAnmHxWbOjpS5NFpmojfNhOisbMV1Y-LVlIXxmDK99p2ZmG2EJpXx3kYKvTMsfx2_qwvDTIXmXVkXwkYuVnGl3gM")',
                            }}
                          ></div>
                          <div>
                            <p className="text-[#0e171b] font-bold text-sm">
                              Olivia Bennett
                            </p>
                            <div className="flex text-[#19a2e6] text-xs">
                              {[...Array(4)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-3 w-3 fill-current"
                                />
                              ))}
                              <Star className="h-3 w-3 text-[#d0dfe7]" />
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
                          <ThumbsUp className="h-3 w-3" />
                          Helpful (8)
                        </button>
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`#all-reviews-${slug}`}
                    className="w-full py-3 mt-4 text-[#19a2e6] font-bold text-sm border border-[#e7eff3] rounded-lg hover:bg-slate-50 transition-colors block text-center"
                  >
                    See all {reviewsCount} reviews
                  </Link>
                </section>
              </div>
              <div className="lg:col-span-1 flex flex-col gap-8">
                <div className="bg-white rounded-xl border border-[#e7eff3] overflow-hidden shadow-sm">
                  <div className="bg-slate-50 px-5 py-3 border-b border-[#e7eff3] font-bold text-[#0e171b]">
                    Specifications
                  </div>
                  <div className="p-5 flex flex-col gap-4">
                    {specs.map((spec, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center text-sm border-b border-dashed border-[#e7eff3] pb-2 last:border-0 last:pb-0"
                      >
                        <span className="text-[#4e7f97]">{spec.label}</span>
                        <span className="font-medium text-[#0e171b]">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[#0e171b] text-lg font-bold mb-4">
                    Compatible With
                  </h3>
                  <div className="flex flex-col gap-3">
                    {compatible.map((comp, index) => (
                      <Link
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg border border-[#e7eff3] bg-white hover:border-[#19a2e6] hover:shadow-md transition-all group"
                        href="#"
                      >
                        <Image
                          src={comp.image || "/placeholder.jpg"}
                          alt={comp.name}
                          width={40}
                          height={40}
                          className="rounded-md object-cover"
                        />
                        <div>
                          <p className="font-bold text-sm text-[#0e171b] group-hover:text-[#19a2e6] transition-colors">
                            {comp.name}
                          </p>
                          <p className="text-xs text-[#4e7f97]">
                            {comp.description}
                          </p>
                        </div>
                        <ChevronRight className="ml-auto h-4 w-4 text-[#d0dfe7] group-hover:text-[#19a2e6]" />
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[#0e171b] text-lg font-bold mb-4">FAQ</h3>
                  <div className="flex flex-col gap-2">
                    {faqs.map((faq, index) => (
                      <details
                        key={index}
                        className="group bg-slate-50 border border-[#e7eff3] rounded-lg"
                      >
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-3 text-sm text-[#0e171b]">
                          <span>{faq.question}</span>
                          <ChevronDown className="transition group-open:rotate-180 h-4 w-4" />
                        </summary>
                        <p className="text-[#4e7f97] text-xs mt-1 p-3 pt-0 leading-relaxed">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
       
      </div>
    </div>
  );
}
