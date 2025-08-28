"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, MapPin, Home, Building } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HeroSearch = () => {
  const [searchCity, setSearchCity] = useState("");
  const [type, setType] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const router = useRouter();   

  const handleSearch = () => {
    if (!searchCity) return;

    const params = new URLSearchParams();
    if (searchCity) params.append("city", searchCity);
    if (type) params.append("type", type);
    if (propertyType) params.append("propertyType", propertyType);

    router.push(`/main/${type === "rent" ? "buy" : "rent"}?${params.toString()}`);
  };
  return (
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

          <Select value={type} onValueChange={setType}>
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

          <Select value={propertyType} onValueChange={setPropertyType}>
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
            <Button
              variant="outline"
              className="border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white transition-all duration-300 rounded-xl"
            >
              <Home className="h-4 w-4 mr-2" />
              Buy Property
            </Button>
          </Link>
          <Link href="/rent">
            <Button
              variant="outline"
              className="border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white transition-all duration-300 rounded-xl"
            >
              <Building className="h-4 w-4 mr-2" />
              Rent Property
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              className="border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white transition-all duration-300 rounded-xl"
            >
              Get Expert Advice
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
