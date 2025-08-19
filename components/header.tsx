"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Heart, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Buy", href: "/buy" },
    { name: "Rent", href: "/rent" },
    { name: "Sell", href: "/sell" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-white/20 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 shadow-lg">
      <div className="container flex h-20 items-center">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
            <Home className="h-8 w-8 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            PropertyHub
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex mx-8 flex-1">
          <ul className="flex items-center space-x-8">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`text-sm font-semibold transition-all duration-300 hover:text-blue-600 relative group ${
                    isActive(item.href)
                      ? "text-blue-600"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon"
            className="hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 rounded-xl"
          >
            <Heart className="h-5 w-5" />
          </Button>
          <Link href="/admin/login">
            <Button 
              variant="outline"
              className="border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 text-blue-600 hover:text-blue-700 transition-all duration-300 rounded-xl font-semibold"
            >
              Admin Login
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden ml-auto">
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 rounded-xl"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-xl border-l-2 border-blue-200">
            <div className="flex flex-col space-y-4 mt-4">
              <Link href="/" className="flex items-center space-x-3 mb-8">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  PropertyHub
                </span>
              </Link>
              
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base font-semibold transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-xl ${
                    isActive(item.href)
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-6 space-y-3">
                <Link href="/admin/login">
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 text-blue-600 hover:text-blue-700 transition-all duration-300 rounded-xl font-semibold"
                  >
                    Admin Login
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;