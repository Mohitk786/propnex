"use client"

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingButtons from "@/components/floating-buttons";
import PropertyCard from "@/components/property-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Search, SlidersHorizontal, MapPin, Home, Building, DollarSign } from "lucide-react";

const Buy = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState([0, 50000000]);
  const [bedrooms, setBedrooms] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const propertiesForSale = [
    {
      id: "1",
      title: "Luxury 3BHK Apartment in Prime Location",
      description: "Beautiful apartment with modern amenities, located in the heart of Mumbai",
      price: 25000000,
      priceType: "sale" as const,
      currency: "INR",
      location: "Bandra West",
      city: "Mumbai",
      state: "Maharashtra",
      address: "123 Bandra West, Mumbai, Maharashtra",
      bedrooms: 3,
      bathrooms: 2,
      area: 1850,
      areaUnit: "sq ft",
      propertyType: "apartment" as const,
      status: "available" as const,
      featured: true,
      images: ["/property-1.jpg"],
      amenities: ["Gym", "Pool", "Garden", "Security"],
      parking: true,
      furnished: true,
      readyToMove: true,
      yearBuilt: 2020,
      floor: 15,
      totalFloors: 25,
      contactPerson: "PropertyHub",
      contactPhone: "+91 99999 00000",
      contactEmail: "info@propertyhub.com",
      createdAt: new Date("2024-01-01"),
      updatedAt: new Date("2024-01-01"),
      createdBy: "admin"
    },
    {
      id: "2",
      title: "Beautiful Villa with Private Pool",
      description: "Spacious villa with private pool and garden, perfect for families",
      price: 85000000,
      priceType: "sale" as const,
      currency: "INR",
      location: "Whitefield",
      city: "Bangalore",
      state: "Karnataka",
      address: "456 Whitefield, Bangalore, Karnataka",
      bedrooms: 4,
      bathrooms: 3,
      area: 2400,
      areaUnit: "sq ft",
      propertyType: "villa" as const,
      status: "available" as const,
      featured: true,
      images: ["/property-2.jpg"],
      amenities: ["Private Pool", "Garden", "Security", "Parking"],
      parking: true,
      furnished: false,
      readyToMove: true,
      yearBuilt: 2018,
      floor: 1,
      totalFloors: 2,
      contactPerson: "PropertyHub",
      contactPhone: "+91 99999 00000",
      contactEmail: "info@propertyhub.com",
      createdAt: new Date("2024-01-02"),
      updatedAt: new Date("2024-01-02"),
      createdBy: "admin"
    },
    {
      id: "3",
      title: "Modern Office Space in Tech Park",
      description: "Professional office space in a modern tech park with all amenities",
      price: 12000000,
      priceType: "sale" as const,
      currency: "INR",
      location: "Cyber City",
      city: "Gurgaon",
      state: "Haryana",
      address: "789 Cyber City, Gurgaon, Haryana",
      bedrooms: 0,
      bathrooms: 2,
      area: 3200,
      areaUnit: "sq ft",
      propertyType: "commercial" as const,
      status: "available" as const,
      featured: false,
      images: ["/property-3.jpg"],
      amenities: ["24/7 Security", "Parking", "Cafeteria", "Conference Rooms"],
      parking: true,
      furnished: false,
      readyToMove: true,
      yearBuilt: 2022,
      floor: 8,
      totalFloors: 20,
      contactPerson: "PropertyHub",
      contactPhone: "+91 99999 00000",
      contactEmail: "info@propertyhub.com",
      createdAt: new Date("2024-01-03"),
      updatedAt: new Date("2024-01-03"),
      createdBy: "admin"
    },
    {
      id: "4",
      title: "Premium Penthouse with City View",
      description: "Luxury penthouse with panoramic city views and premium amenities",
      price: 58000000,
      priceType: "sale" as const,
      currency: "INR",
      location: "Jubilee Hills",
      city: "Hyderabad",
      state: "Telangana",
      address: "321 Jubilee Hills, Hyderabad, Telangana",
      bedrooms: 3,
      bathrooms: 3,
      area: 2800,
      areaUnit: "sq ft",
      propertyType: "penthouse" as const,
      status: "available" as const,
      featured: true,
      images: ["/property-1.jpg"],
      amenities: ["City View", "Luxury Amenities", "Gym", "Pool"],
      parking: true,
      furnished: true,
      readyToMove: true,
      yearBuilt: 2021,
      floor: 25,
      totalFloors: 30,
      contactPerson: "PropertyHub",
      contactPhone: "+91 99999 00000",
      contactEmail: "info@propertyhub.com",
      createdAt: new Date("2024-01-04"),
      updatedAt: new Date("2024-01-04"),
      createdBy: "admin"
    },
    {
      id: "5",
      title: "Family Home with Garden",
      description: "Beautiful family home with spacious garden and modern amenities",
      price: 32000000,
      priceType: "sale" as const,
      currency: "INR",
      location: "Koregaon Park",
      city: "Pune",
      state: "Maharashtra",
      address: "654 Koregaon Park, Pune, Maharashtra",
      bedrooms: 3,
      bathrooms: 2,
      area: 1900,
      areaUnit: "sq ft",
      propertyType: "house" as const,
      status: "available" as const,
      featured: false,
      images: ["/property-2.jpg"],
      amenities: ["Garden", "Security", "Parking"],
      parking: true,
      furnished: false,
      readyToMove: true,
      yearBuilt: 2019,
      floor: 1,
      totalFloors: 2,
      contactPerson: "PropertyHub",
      contactPhone: "+91 99999 00000",
      contactEmail: "info@propertyhub.com",
      createdAt: new Date("2024-01-05"),
      updatedAt: new Date("2024-01-05"),
      createdBy: "admin"
    },
    {
      id: "6",
      title: "Investment Property Near Metro",
      description: "Great investment opportunity near metro station with high rental potential",
      price: 9500000,
      priceType: "sale" as const,
      currency: "INR",
      location: "Dwarka",
      city: "Delhi",
      state: "Delhi",
      address: "987 Dwarka, Delhi",
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      areaUnit: "sq ft",
      propertyType: "apartment" as const,
      status: "available" as const,
      featured: false,
      images: ["/property-3.jpg"],
      amenities: ["Near Metro", "Security", "Parking"],
      parking: true,
      furnished: false,
      readyToMove: true,
      yearBuilt: 2017,
      floor: 8,
      totalFloors: 15,
      contactPerson: "PropertyHub",
      contactPhone: "+91 99999 00000",
      contactEmail: "info@propertyhub.com",
      createdAt: new Date("2024-01-06"),
      updatedAt: new Date("2024-01-06"),
      createdBy: "admin"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <Header />
      
      {/* Page Header */}
      <div className="pt-32 pb-16 text-center relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Properties for Sale
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover your dream home from our exclusive collection of verified properties
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 pb-20">
        {/* Enhanced Search and Filters */}
        <Card className="mb-12 bg-white/80 backdrop-blur-sm border-2 border-white/50 shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row gap-6 items-end">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input
                    placeholder="Search location..."
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
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

                <Select value={bedrooms} onValueChange={setBedrooms}>
                  <SelectTrigger className="bg-white/95 backdrop-blur-sm border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 rounded-xl">
                    <SelectValue placeholder="Bedrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Bedroom</SelectItem>
                    <SelectItem value="2">2 Bedrooms</SelectItem>
                    <SelectItem value="3">3 Bedrooms</SelectItem>
                    <SelectItem value="4">4+ Bedrooms</SelectItem>
                  </SelectContent>
                </Select>

                <Button 
                  variant="outline" 
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 text-blue-600 hover:text-blue-700 transition-all duration-300 rounded-xl"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  More Filters
                </Button>
              </div>

              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl px-8 py-3 font-semibold">
                <Search className="h-5 w-5 mr-2" />
                Search Properties
              </Button>
            </div>

            {showFilters && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-sm font-medium mb-4 block text-gray-700">
                      Price Range: ₹{(priceRange[0] / 100000).toFixed(1)}L - ₹{(priceRange[1] / 100000).toFixed(1)}L
                    </label>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={50000000}
                      step={100000}
                      className="w-full"
                    />
                  </div>
                  <div className="flex items-end">
                    <Button 
                      variant="outline" 
                      className="w-full border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 rounded-xl"
                    >
                      Reset Filters
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="text-sm font-medium text-gray-600">Popular searches:</span>
          <Button variant="outline" size="sm" className="border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 text-blue-600 hover:text-blue-700 transition-all duration-300 rounded-xl">
            Under ₹1 Cr
          </Button>
          <Button variant="outline" size="sm" className="border-2 border-purple-200 hover:border-purple-500 hover:bg-purple-50 text-purple-600 hover:text-purple-700 transition-all duration-300 rounded-xl">
            3BHK Ready to Move
          </Button>
          <Button variant="outline" size="sm" className="border-2 border-green-200 hover:border-green-500 hover:bg-green-50 text-green-600 hover:text-green-700 transition-all duration-300 rounded-xl">
            Near Metro
          </Button>
          <Button variant="outline" size="sm" className="border-2 border-pink-200 hover:border-pink-500 hover:bg-pink-50 text-pink-600 hover:text-pink-700 transition-all duration-300 rounded-xl">
            Premium Location
          </Button>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">{propertiesForSale.length} Properties Found</h2>
            <p className="text-gray-600">Showing properties for sale</p>
          </div>
          
          <Select defaultValue="newest">
            <SelectTrigger className="w-48 bg-white/80 backdrop-blur-sm border-2 border-white/50 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 rounded-xl">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="area">Area</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {propertiesForSale.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 rounded-xl px-8 py-4 text-lg font-semibold">
            Load More Properties
          </Button>
        </div>
      </main>
      
      <Footer />
      
      {/* Floating Buttons */}
      <FloatingButtons />
    </div>
  );
};

export default Buy;
