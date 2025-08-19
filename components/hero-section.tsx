"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Home, Building } from "lucide-react";
import { cities } from "@/data/cities";
import Link from "next/link";

const HeroSection = () => {
  const [searchCity, setSearchCity] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceType, setPriceType] = useState("");

  const handleSearch = () => {
    if (!searchCity) return;
    
    const params = new URLSearchParams();
    if (searchCity) params.append('city', searchCity);
    if (propertyType) params.append('propertyType', propertyType);
    if (priceType) params.append('priceType', priceType);
    
    // Redirect to properties page with search params
    window.location.href = `/buy?${params.toString()}`;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
          Find Your
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Dream Home
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
          Discover premium properties across India with verified listings, expert guidance, and seamless experience
        </p>

        {/* Search Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-white">
              Search Properties
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search city..."
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                  className="pl-10 bg-white/95 backdrop-blur-sm border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 rounded-xl"
                />
              </div>

              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger className="bg-white/95 backdrop-blur-sm border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 rounded-xl">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="penthouse">Penthouse</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="land">Land</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priceType} onValueChange={setPriceType}>
                <SelectTrigger className="bg-white/95 backdrop-blur-sm border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 rounded-xl">
                  <SelectValue placeholder="Price Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sale">For Sale</SelectItem>
                  <SelectItem value="rent">For Rent</SelectItem>
                </SelectContent>
              </Select>

              <Button 
                onClick={handleSearch}
                disabled={!searchCity}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/buy">
                <Button variant="outline" className="border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white transition-all duration-300 rounded-xl">
                  <Home className="h-4 w-4 mr-2" />
                  Buy Property
                </Button>
              </Link>
              <Link href="/rent">
                <Button variant="outline" className="border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white transition-all duration-300 rounded-xl">
                  <Building className="h-4 w-4 mr-2" />
                  Rent Property
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white transition-all duration-300 rounded-xl">
                  Get Expert Advice
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">5000+</div>
            <div className="text-blue-200">Properties</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-blue-200">Cities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">1000+</div>
            <div className="text-blue-200">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-blue-200">Support</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;