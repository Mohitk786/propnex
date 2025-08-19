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
import { Search, SlidersHorizontal } from "lucide-react";
import property1 from "@/public/property-1.jpg";
import property2 from "@/public/property-2.jpg";
import property3 from "@/public/property-3.jpg";

const Rent = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [rentRange, setRentRange] = useState([0, 100000]);
  const [bedrooms, setBedrooms] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const rentalProperties = [
    {
      id: "1",
      title: "Furnished 2BHK in Prime Location",
      description: "Beautiful furnished apartment with modern amenities",
      price: 45000,
      priceType: "rent" as const,
      currency: "INR",
      location: "Bandra West",
      city: "Mumbai",
      state: "Maharashtra",
      address: "123 Bandra West, Mumbai",
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      areaUnit: "sq ft",
      propertyType: "apartment" as const,
      status: "available" as const,
      featured: true,
      images: ["/property-1.jpg"],
      amenities: ["Furnished", "Gym", "Pool"],
      parking: true,
      furnished: true,
      readyToMove: true,
      contactPerson: "PropertyHub",
      contactPhone: "+91 99999 00000",
      contactEmail: "info@propertyhub.com",
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: "admin"
    },
    {
      id: "2",
      title: "Spacious Family Villa with Garden",
      description: "Large villa perfect for families with garden space",
      price: 85000,
      priceType: "rent" as const,
      currency: "INR",
      location: "Whitefield",
      city: "Bangalore",
      state: "Karnataka",
      address: "456 Whitefield, Bangalore",
      bedrooms: 4,
      bathrooms: 3,
      area: 2400,
      areaUnit: "sq ft",
      propertyType: "villa" as const,
      status: "available" as const,
      featured: true,
      images: ["/property-2.jpg"],
      amenities: ["Garden", "Pool", "Security"],
      parking: true,
      furnished: false,
      readyToMove: true,
      contactPerson: "PropertyHub",
      contactPhone: "+91 99999 00000",
      contactEmail: "info@propertyhub.com",
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: "admin"
    },
    {
      id: "3",
      title: "Modern Studio in Tech Hub",
      description: "Contemporary studio apartment in tech hub area",
      price: 25000,
      priceType: "rent" as const,
      currency: "INR",
      location: "Cyber City",
      city: "Gurgaon",
      state: "Haryana",
      address: "789 Cyber City, Gurgaon",
      bedrooms: 1,
      bathrooms: 1,
      area: 650,
      areaUnit: "sq ft",
      propertyType: "studio" as const,
      status: "available" as const,
      featured: false,
      images: ["/property-3.jpg"],
      amenities: ["Modern Kitchen", "Security"],
      parking: false,
      furnished: true,
      readyToMove: true,
      contactPerson: "PropertyHub",
      contactPhone: "+91 99999 00000",
      contactEmail: "info@propertyhub.com",
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: "admin"
    },
    {
      id: "4",
      title: "Luxury Penthouse with Amenities",
      description: "Premium penthouse with luxury amenities",
      price: 120000,
      priceType: "rent" as const,
      currency: "INR",
      location: "Golf Course Road",
      city: "Gurgaon",
      state: "Haryana",
      address: "321 Golf Course Road, Gurgaon",
      bedrooms: 3,
      bathrooms: 2,
      area: 2200,
      areaUnit: "sq ft",
      propertyType: "penthouse" as const,
      status: "available" as const,
      featured: true,
      images: ["/property-1.jpg"],
      amenities: ["Luxury Amenities", "Gym", "Pool"],
      parking: true,
      furnished: true,
      readyToMove: true,
      contactPerson: "PropertyHub",
      contactPhone: "+91 99999 00000",
      contactEmail: "info@propertyhub.com",
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: "admin"
    },
    {
      id: "5",
      title: "Cozy 1BHK Near Metro",
      description: "Cozy apartment near metro station",
      price: 18000,
      priceType: "rent" as const,
      currency: "INR",
      location: "Koregaon Park",
      city: "Pune",
      state: "Maharashtra",
      address: "654 Koregaon Park, Pune",
      bedrooms: 1,
      bathrooms: 1,
      area: 550,
      areaUnit: "sq ft",
      propertyType: "apartment" as const,
      status: "available" as const,
      featured: false,
      images: ["/property-2.jpg"],
      amenities: ["Near Metro", "Security"],
      parking: false,
      furnished: false,
      readyToMove: true,
      contactPerson: "PropertyHub",
      contactPhone: "+91 99999 00000",
      contactEmail: "info@propertyhub.com",
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: "admin"
    },
    {
      id: "6",
      title: "Serviced Apartment with Gym",
      description: "Fully serviced apartment with gym facilities",
      price: 65000,
      priceType: "rent" as const,
      currency: "INR",
      location: "Jubilee Hills",
      city: "Hyderabad",
      state: "Telangana",
      address: "987 Jubilee Hills, Hyderabad",
      bedrooms: 2,
      bathrooms: 2,
      area: 1400,
      areaUnit: "sq ft",
      propertyType: "apartment" as const,
      status: "available" as const,
      featured: false,
      images: ["/property-3.jpg"],
      amenities: ["Gym", "Serviced", "Security"],
      parking: true,
      furnished: true,
      readyToMove: true,
      contactPerson: "PropertyHub",
      contactPhone: "+91 99999 00000",
      contactEmail: "info@propertyhub.com",
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: "admin"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Properties for Rent
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover rental properties that fit your lifestyle
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 shadow-search">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-end">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search location..."
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="studio">Studio</SelectItem>
                    <SelectItem value="pg">PG/Hostel</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={bedrooms} onValueChange={setBedrooms}>
                  <SelectTrigger>
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
                  className="flex items-center gap-2"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  More Filters
                </Button>
              </div>

              <Button variant="default" size="lg" className="lg:w-auto w-full">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>

            {showFilters && (
              <div className="mt-6 pt-6 border-t">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Monthly Rent: ₹{(rentRange[0] / 1000).toFixed(0)}k - ₹{(rentRange[1] / 1000).toFixed(0)}k
                    </label>
                    <Slider
                      value={rentRange}
                      onValueChange={setRentRange}
                      max={100000}
                      step={5000}
                      className="w-full"
                    />
                  </div>
                  <div className="flex items-end">
                    <Button variant="outline" className="w-full">
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
          <span className="text-sm font-medium text-muted-foreground">Popular searches:</span>
          <Button variant="outline" size="sm">1BHK under ₹20k</Button>
          <Button variant="outline" size="sm">2BHK Furnished</Button>
          <Button variant="outline" size="sm">Near Metro</Button>
          <Button variant="outline" size="sm">Pet Friendly</Button>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold">{rentalProperties.length} Properties Found</h2>
            <p className="text-muted-foreground">Showing rental properties</p>
          </div>
          
          <Select defaultValue="newest">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="rent-low">Rent: Low to High</SelectItem>
              <SelectItem value="rent-high">Rent: High to Low</SelectItem>
              <SelectItem value="area">Area</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {rentalProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
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

export default Rent;