"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Search,
  Heart as Favorite,
  Plus as AddShoppingCart,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  Image as ImageIcon,
} from "lucide-react";
import Image from "next/image"; // Import Next.js Image for optimized rendering
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";

export default function Products() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalProducts, setTotalProducts] = useState(0);

  const [localSearch, setLocalSearch] = useState(searchParams.get("q") || "");
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get("category") ? searchParams.get("category").split(",") : []
  );
  const [selectedPrices, setSelectedPrices] = useState(
    searchParams.get("price") ? searchParams.get("price").split(",") : []
  );
  const [selectedBrand, setSelectedBrand] = useState(
    searchParams.get("brand") || ""
  );
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "featured");
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("page")) || 1
  );

  const [cart, setCart] = useState([]);
  const [addingToCart, setAddingToCart] = useState({}); // per-product loading

  // Extract unique categories and brands from real data
  const categories = useMemo(() => {
    const cats = ["All Products", ...new Set(products.map((p) => p.category))];
    return cats.filter(Boolean);
  }, [products]);

  const brands = useMemo(() => {
    return [
      "All Brands",
      ...new Set(products.map((p) => p.brand).filter(Boolean)),
    ];
  }, [products]);

  const priceRanges = ["Under ₹100", "₹100 - ₹300", "₹300 - ₹500", "₹500+"]; // Updated to ₹ to match JSON prices

  // Fetch products from API
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const params = new URLSearchParams();

        // TODO: Add server-side filtering params when API supports it
        // e.g., if (localSearch) params.append("q", localSearch);
        // params.append("category", selectedCategories.join(","));

        const res = await fetch(`/api/products?${params.toString()}`);
        if (!res.ok) throw new Error("Failed to fetch products");

        const json = await res.json();
        if (json.success) {
          setProducts(json.data);
          setTotalProducts(json.pagination.total);
        } else {
          throw new Error(json.error || "Unknown error");
        }
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []); // Only run once on mount (add dependencies for refetching if needed)

  // Client-side filtering (since API doesn't support filters yet)
  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesSearch =
        !localSearch ||
        product.name.toLowerCase().includes(localSearch.toLowerCase()) ||
        product.shortDescription
          .toLowerCase()
          .includes(localSearch.toLowerCase()) ||
        product.tags?.some((tag) =>
          tag.toLowerCase().includes(localSearch.toLowerCase())
        );

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes("All Products") ||
        selectedCategories.includes(product.category);

      const matchesPrice =
        selectedPrices.length === 0 ||
        selectedPrices.some((range) => {
          const price = product.basePrice;
          if (range === "Under ₹100") return price < 100;
          if (range === "₹100 - ₹300") return price >= 100 && price <= 300;
          if (range === "₹300 - ₹500") return price > 300 && price <= 500;
          if (range === "$500+") return price > 500;
          return false;
        });

      const matchesBrand = !selectedBrand || product.brand === selectedBrand;

      return matchesSearch && matchesCategory && matchesPrice && matchesBrand;
    });

    // Sorting
    const sorted = [...filtered];
    switch (sortBy) {
      case "price-low-high":
        sorted.sort((a, b) => a.basePrice - b.basePrice);
        break;
      case "price-high-low":
        sorted.sort((a, b) => b.basePrice - a.basePrice);
        break;
      case "newest":
        sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      default:
        // Featured: default order from API (newest first)
        break;
    }

    return sorted;
  }, [
    products,
    localSearch,
    selectedCategories,
    selectedPrices,
    selectedBrand,
    sortBy,
  ]);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const currentProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage]);

  const updateSearchParams = (newParams) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(newParams).forEach(([key, value]) => {
      if (value && value.length > 0) {
        params.set(key, Array.isArray(value) ? value.join(",") : value);
      } else {
        params.delete(key);
      }
    });
    router.push(`/products?${params.toString()}`);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setLocalSearch(value);
    updateSearchParams({ q: value, page: "1" });
    setCurrentPage(1);
  };

  const handleCategoryChange = (cat, checked) => {
    let newCats;
    if (cat === "All Products") {
      newCats = checked ? ["All Products"] : [];
    } else {
      newCats = checked
        ? [...selectedCategories.filter((c) => c !== "All Products"), cat]
        : selectedCategories.filter((c) => c !== cat);

      if (newCats.length === 0) newCats = ["All Products"];
    }

    setSelectedCategories(newCats);
    updateSearchParams({ category: newCats.join(","), page: "1" });
    setCurrentPage(1);
  };

  const handlePriceChange = (range, checked) => {
    const newPrices = checked
      ? [...selectedPrices, range]
      : selectedPrices.filter((p) => p !== range);
    setSelectedPrices(newPrices);
    updateSearchParams({ price: newPrices.join(","), page: "1" });
    setCurrentPage(1);
  };

  const handleBrandChange = (e) => {
    const value = e.target.value;
    setSelectedBrand(value);
    updateSearchParams({ brand: value, page: "1" });
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortBy(value);
    updateSearchParams({ sort: value, page: "1" }); // Reset to page 1 on sort
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    updateSearchParams({ page: page.toString() });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAddToCart = async (productId) => {
    setAddingToCart((prev) => ({ ...prev, [productId]: true }));
    // Simulate API call delay
    await new Promise((r) => setTimeout(r, 600));
    setCart((prev) => {
      const existing = prev.find((i) => i.id === productId);
      if (existing) {
        return prev.map((i) =>
          i.id === productId ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { id: productId, qty: 1 }];
    });
    setAddingToCart((prev) => ({ ...prev, [productId]: false }));
    // TODO: Integrate with real cart API
    alert("Added to cart!");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Error Loading Products
        </h2>
        <p className="text-gray-600">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-white overflow-x-hidden font-['Space_Grotesk','Noto_Sans',sans-serif]">
      <div className="flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-8 px-4 md:px-10 bg-white">
          <div className="flex flex-col max-w-300 flex-1">
            <div className="flex flex-col gap-4 mb-8">
              <h1 className="text-gray-900 tracking-tight text-4xl md:text-5xl font-bold leading-tight">
                Smart Home Products
              </h1>
              <p className="text-gray-500 text-lg font-normal leading-normal max-w-2xl">
                Discover our comprehensive range of intelligent devices designed
                to elevate your comfort, security, and lifestyle.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar */}
              <aside className="w-full lg:w-64 shrink-0 flex flex-col gap-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]" />
                  <input
                    className="w-full h-10 pl-10 pr-4 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Search products..."
                    type="text"
                    value={localSearch}
                    onChange={handleSearchChange}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="text-gray-900 font-bold text-sm uppercase tracking-wider">
                    Categories
                  </h3>
                  {categories.map((cat) => (
                    <label
                      key={cat}
                      className="flex items-center gap-3 py-1 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={(e) =>
                          handleCategoryChange(cat, e.target.checked)
                        }
                        className="form-checkbox rounded text-blue-500 h-4 w-4"
                      />
                      <span className="text-gray-500 group-hover:text-gray-900 text-sm">
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="text-gray-900 font-bold text-sm uppercase tracking-wider">
                    Price Range
                  </h3>
                  {priceRanges.map((range) => (
                    <label
                      key={range}
                      className="flex items-center gap-3 py-1 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={selectedPrices.includes(range)}
                        onChange={(e) =>
                          handlePriceChange(range, e.target.checked)
                        }
                        className="form-checkbox rounded text-blue-500 h-4 w-4"
                      />
                      <span className="text-gray-500 group-hover:text-gray-900 text-sm">
                        {range}
                      </span>
                    </label>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="text-gray-900 font-bold text-sm uppercase tracking-wider">
                    Brands
                  </h3>
                  <select
                    className="w-full bg-white border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    value={selectedBrand}
                    onChange={handleBrandChange}
                  >
                    <option value="">All Brands</option>
                    {brands
                      .filter((b) => b !== "All Brands")
                      .map((brand) => (
                        <option key={brand} value={brand}>
                          {brand}
                        </option>
                      ))}
                  </select>
                </div>
              </aside>

              {/* Main Grid */}
              <div className="flex-1 flex flex-col gap-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-200">
                  <p className="text-gray-900 text-sm font-medium">
                    Showing{" "}
                    <span className="text-blue-600 font-bold">
                      {currentProducts.length}
                    </span>{" "}
                    of{" "}
                    <span className="text-gray-900">
                      {filteredProducts.length}
                    </span>{" "}
                    results
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-sm">Sort by:</span>
                    <select
                      className="bg-transparent text-gray-900 text-sm font-bold cursor-pointer border border-gray-200 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
                      value={sortBy}
                      onChange={handleSortChange}
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low-high">Price: Low to High</option>
                      <option value="price-high-low">Price: High to Low</option>
                      <option value="newest">Newest Arrivals</option>
                    </select>
                  </div>
                </div>

                {currentProducts.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-20">
                    <AlertCircle className="h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      No products found
                    </h3>
                    <p className="text-gray-500">Try adjusting your filters.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentProducts.map((product) => {
                      const mainImg =
                        product.images?.find((img) => img.isMain)?.url ||
                        product.images?.[0]?.url ||
                        product.mainImage ||
                        "/placeholder.jpg";

                      return (
                        <div
                          key={product._id}
                          className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-500 transition-all shadow-sm hover:shadow-lg "
                        >
                          <div className="relative w-full aspect-4/3 overflow-hidden bg-gray-100">
                            <Link
                              href={`/product/${product.urlHandle}`}
                              className="block relative w-full h-full"
                            >
                              <img
                                src={mainImg}
                                alt={product.name || "Product image"}
                                // fill={value.toString()}
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                            </Link>
                            {product.quantityInStock <= 0 && (
                              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                                Out of Stock
                              </div>
                            )}
                            {product.compareAtPrice > product.basePrice && (
                              <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                                Sale
                              </div>
                            )}
                            <button className="absolute top-3 right-3 p-2 bg-black/30 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                              <Favorite className="text-[18px]" />
                            </button>
                          </div>

                          <div className="p-4 flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-gray-900 text-lg font-bold line-clamp-1 group-hover:text-blue-600 transition-colors">
                                <Link
                                  href={`/product/${product.urlHandle}`}
                                  className="hover:underline"
                                >
                                  {product.name}
                                </Link>
                              </h3>
                              <div className="text-right">
                                <p className="text-gray-900 font-bold">
                                  ₹{product.basePrice.toFixed(2)}
                                </p>
                                {product.compareAtPrice > product.basePrice && (
                                  <p className="text-gray-500 text-xs line-through">
                                    ₹{product.compareAtPrice.toFixed(2)}
                                  </p>
                                )}
                              </div>
                            </div>

                            <p className="text-gray-600 text-sm line-clamp-2 flex-1 mb-4">
                              {product.shortDescription}
                            </p>

                            <div>
                              {/* <Link
                                href={`/product/${product.urlHandle}`}
                                className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-sm font-bold py-2 rounded-lg transition-colors text-center"
                              >
                                View Details
                              </Link> */}
                              {/* <button
                                onClick={() => handleAddToCart(product._id)}
                                disabled={
                                  addingToCart[product._id] ||
                                  product.quantityInStock <= 0
                                }
                                className={`p-2 rounded-lg transition flex items-center justify-center ${
                                  addingToCart[product._id] ||
                                  product.quantityInStock <= 0
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-blue-500 hover:bg-blue-600 text-white"
                                }`}
                              >
                                {addingToCart[product._id] ? (
                                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                ) : (
                                  <AddShoppingCart className="text-[20px]" />
                                )}
                              </button> */}
                              <AddToCartButton product={product} />
                            </div>

                            <div className="text-xs text-gray-500 mt-2 text-center">
                              {product.category} • {product.brand}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center py-8">
                    <nav className="flex items-center gap-2 bg-white rounded-lg p-2 shadow-sm">
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="size-10 rounded-lg border border-gray-200 bg-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 flex items-center justify-center transition-colors"
                      >
                        <ChevronLeft className="text-[20px]" />
                      </button>

                      {Array.from(
                        { length: Math.min(7, totalPages) },
                        (_, i) => {
                          let pageNum;
                          if (totalPages <= 7) pageNum = i + 1;
                          else if (currentPage <= 4) pageNum = i + 1;
                          else if (currentPage >= totalPages - 3)
                            pageNum = totalPages - 6 + i;
                          else pageNum = currentPage - 3 + i;

                          return (
                            <button
                              key={pageNum}
                              onClick={() => handlePageChange(pageNum)}
                              className={`size-10 rounded-lg transition ${
                                currentPage === pageNum
                                  ? "bg-blue-500 text-white font-bold"
                                  : "border border-gray-200 bg-white hover:bg-gray-50"
                              }`}
                            >
                              {pageNum}
                            </button>
                          );
                        }
                      )}

                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="size-10 rounded-lg border border-gray-200 bg-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 flex items-center justify-center transition-colors"
                      >
                        <ChevronRight className="text-[20px]" />
                      </button>
                    </nav>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
