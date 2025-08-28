"use client"

import { useState } from "react";
import PropertyCard from "./property-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Search, MapPin } from "lucide-react";
import { cities, states } from "@/data/cities";
import { Property, PropertySearchResponse } from "@/types/property";

interface FeaturedPropertiesProps {
  properties: Property[];
}

const FeaturedProperties = ({ properties }: FeaturedPropertiesProps) => {
  // const [loading, setLoading] = useState(true);
  const [searchCity, setSearchCity] = useState("");
  const [searchState, setSearchState] = useState("");
  const [filteredCities, setFilteredCities] = useState(cities);

 


  const handleCitySelect = (cityName: string) => {
    setSearchCity(cityName);
    const city = cities.find(c => c.name === cityName);
    if (city) {
      setSearchState(city.state);
    }
  };

  const handleSearch = async () => {
    if (!searchCity) return;
    
    try {
      // setLoading(true);
      const params = new URLSearchParams({
        city: searchCity,
        limit: '6'
      });
      
     
      // const data: PropertySearchResponse = await response.json();
      // setProperties(data.properties);
    } catch (error) {
      console.error('Error searching properties:', error);
    } 
  };

  const handleReset = () => {
    setSearchCity("");
    setSearchState("");
    setFilteredCities(cities);
  };


  console.log("properties client", properties) 

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium properties across India's major cities
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/50 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Search Properties by City
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search city..."
                  value={searchCity}
                  onChange={(e) => {}}
                  className="pl-10 bg-white/95 backdrop-blur-sm border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 rounded-xl"
                />
              </div>

              <Select value={searchCity} onValueChange={handleCitySelect}>
                <SelectTrigger className="bg-white/95 backdrop-blur-sm border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 rounded-xl">
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  {filteredCities.slice(0, 50).map((city) => (
                    <SelectItem key={`${city.name}-${city.state}`} value={city.name}>
                      {city.name}, {city.state}
                    </SelectItem>
                  ))}
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

            {searchCity && (
              <div className="text-center">
                <Button 
                  onClick={handleReset}
                  variant="outline"
                  className="border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 rounded-xl"
                >
                  Reset Search
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Properties Grid */}
        {/* {loading ? ( */}
          {/* <div className="text-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading properties?...</p>
          </div> */}
        {/* ) : ( */}
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {properties?.map((property) => (
                <PropertyCard key={property._id} {...property} />
              ))}
            </div>

            {properties?.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-600 text-lg">No properties found for the selected criteria.</p>
                <Button 
                  onClick={handleReset}
                  className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                >
                  View All Properties
                </Button>
              </div>
            )}

            {properties?.length > 0 && (
              <div className="text-center">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 rounded-xl px-8 py-4 text-lg font-semibold group">
                  View All Properties
                  <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </div>
            )}
          </>
        {/* )} */}
      </div>
    </section>
  );
};

export default FeaturedProperties;