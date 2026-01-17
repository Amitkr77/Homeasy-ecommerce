"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Menu,
  Lightbulb,
  Camera,
  ToggleLeft,
  Wind,
  Package,
  Search,
  ShoppingCart,
  User,
  Home,
  LogIn,
  LogOut,
  Heart,
  ListOrdered,
  UserCircle,
  ChevronDown,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import useCartStore from "@/store/useCartStore";
import { useAuthStore } from "@/store/useAuthStore";

export default function Header() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  const { totalItems } = useCartStore();
  const { isAuthenticated, user, logout } = useAuthStore();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      router.push(`/products?q=${encodeURIComponent(searchValue.trim())}`);
    }
  };

  const handleCategoryClick = (category) => {
    router.push(`/products?category=${encodeURIComponent(category)}`);
  };

  const handleCartClick = () => router.push("/cart");

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between shadow-sm bg-surface-light/90 dark:bg-text-light/90 backdrop-blur-md px-6 py-3 lg:px-10">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <div className="size-8 text-primary flex items-center justify-center">
          <Home className="w-8 h-8" />
        </div>
        <Link href="/" className="text-xl font-bold tracking-tight">
          Homeasy
        </Link>
      </div>

      {/* Desktop part */}
      <div className="flex-1 flex items-center justify-end gap-6">
        {/* Search - desktop */}
        <div className="hidden lg:block max-w-md w-full mx-8">
          <form
            role="search"
            onSubmit={handleSearchSubmit}
            className="relative"
          >
            <Search
              aria-hidden="true"
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
            />
            <Input
              placeholder="Search smart lights, cameras..."
              className="pl-10 h-10 outline-none"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </form>
        </div>

        {/* Nav links - desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`text-sm font-medium transition-colors hover:text-primary `}
              >
                Products <ChevronDown className="size-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="center"
              className="w-60 bg-gray-100 border-none shadow-lg"
            >
              <DropdownMenuItem
                onClick={() => handleCategoryClick("Lighting")}
                className="flex items-center gap-3 cursor-pointer"
              >
                <Lightbulb className="size-4" />
                <div>
                  <p className="font-medium">Smart Lights</p>
                  <p className="text-xs text-muted-foreground">
                    Control lighting from anywhere
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleCategoryClick("Security")}
                className="flex items-center gap-3 cursor-pointer"
              >
                <Camera className="size-4" />
                <div>
                  <p className="font-medium">Cameras</p>
                  <p className="text-xs text-muted-foreground">
                    Secure your home 24/7
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleCategoryClick("Lighting")}
                className="flex items-center gap-3 cursor-pointer"
              >
                <ToggleLeft className="size-4" />
                <div>
                  <p className="font-medium">Smart Switches</p>
                  <p className="text-xs text-muted-foreground">
                    Automate your switches
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleCategoryClick("Climate")}
                className="flex items-center gap-3 cursor-pointer"
              >
                <Wind className="size-4" />
                <div>
                  <p className="font-medium">Climate Control</p>
                  <p className="text-xs text-muted-foreground">
                    Thermostats & sensors
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => router.push("/products")}
                className="flex items-center gap-3 justify-center cursor-pointer "
              >
                <Package className="size-4" />
                <span className="font-medium">View All Products</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/support"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Support
          </Link>
          <Link
            href="/aboutus"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About Us
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:flex lg:hidden"
          >
            <Search className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={handleCartClick}
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-xs rounded-full min-w-5 h-5 flex items-center justify-center px-1">
                {totalItems}
              </span>
            )}
          </Button>

          {/* ── Auth area ── */}
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative bg-primary overflow-hidden border-primary hover:bg-muted transition"
                >
                  {user?.avatarUrl ? (
                    <img
                      src={user.avatarUrl}
                      alt={user.name || "User avatar"}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <UserCircle className="h-7 w-7 text-white" />
                  )}
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-64 rounded-xl  border-none p-2 shadow-lg bg-white"
              >
                {/* ── User info ── */}
                <div className="flex items-center gap-3 px-3 py-2">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                    {user?.avatarUrl ? (
                      <img
                        src={user.avatarUrl}
                        alt={user.name || "User avatar"}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <UserCircle className="h-6 w-6 text-muted-foreground" />
                    )}
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">{user?.name}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {user?.email}
                    </p>
                  </div>
                </div>

                <DropdownMenuSeparator className="my-2" />

                {/* ── Navigation links ── */}
                <DropdownMenuItem asChild>
                  <Link
                    href="/account"
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-muted transition"
                  >
                    <UserCircle className="h-4 w-4 text-muted-foreground" />
                    My Account
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link
                    href="/account/orders"
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-muted transition"
                  >
                    <ListOrdered className="h-4 w-4 text-muted-foreground" />
                    Orders
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link
                    href="/account/wishlist"
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-muted transition"
                  >
                    <Heart className="h-4 w-4 text-muted-foreground" />
                    Wishlist
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator className="my-2" />

                {/* ── Logout ── */}
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-destructive hover:bg-destructive/10 focus:text-destructive transition"
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              asChild
              variant="default"
              size="sm"
              className="hidden sm:flex rounded-full px-5"
            >
              <Link href="/login" className="flex items-center gap-2">
                <LogIn className="h-4 w-4" />
                Sign In
              </Link>
            </Button>
          )}

          {/* Mobile menu button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-80 sm:w-96 p-0 flex flex-col"
            >
              <SheetHeader className="p-6 border-b">
                <SheetTitle className="flex items-center gap-3 text-left">
                  <Home className="w-8 h-8 text-primary" />
                  <span className="text-xl font-bold">Homeasy</span>
                </SheetTitle>
              </SheetHeader>

              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                {/* Mobile search */}
                <form onSubmit={handleSearchSubmit} className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search products..."
                    className="pl-11 h-11"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </form>

                <Separator />

                {/* Categories accordion – keep your existing one */}

                <Separator />

                {/* More links – keep existing */}

                {/* Mobile auth section */}
                <div className="pt-4">
                  {isAuthenticated ? (
                    <div className="space-y-2">
                      <div className="px-3 py-2">
                        <p className="font-medium">{user?.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {user?.email}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                        asChild
                      >
                        <Link href="/account">
                          <UserCircle className="mr-2 h-5 w-5" />
                          My Account
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                        asChild
                      >
                        <Link href="/account/orders">
                          <ListOrdered className="mr-2 h-5 w-5" />
                          Orders
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                        asChild
                      >
                        <Link href="/account/wishlist">
                          <Heart className="mr-2 h-5 w-5" />
                          Wishlist
                        </Link>
                      </Button>
                      <Button
                        variant="destructive"
                        className="w-full justify-start"
                        onClick={handleLogout}
                      >
                        <LogOut className="mr-2 h-5 w-5" />
                        Sign Out
                      </Button>
                    </div>
                  ) : (
                    <Button
                      asChild
                      className="w-full h-12 text-base"
                      variant="default"
                    >
                      <Link
                        href="/login"
                        className="flex items-center justify-center gap-2"
                      >
                        <LogIn className="h-5 w-5" />
                        Sign In / Create Account
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
