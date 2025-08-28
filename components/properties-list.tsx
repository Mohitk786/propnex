"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import PropertyCard from "./property-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Search, MapPin } from "lucide-react";
import { cities } from "@/data/cities";
import { Property } from "@/types/property";

interface FeaturedPropertiesProps {
  properties: Property[];
}

const FeaturedProperties = ({ properties }: FeaturedPropertiesProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const searchCity = searchParams.get("city") || "";

  // Update query params in URL
  const updateQuery = (params: Record<string, string | null>) => {
    const newParams = new URLSearchParams(searchParams.toString());

    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });

    router.push(`${pathname}?${newParams.toString()}`);
  };

  const handleCitySelect = (cityName: string) => {
    const city = cities.find((c) => c.name === cityName);
    updateQuery({
      city: cityName,
      state: city ? city.state : "",
      page: "1", 
    });
  };

  const handleSearch = () => {
    if (!searchCity) return;
    updateQuery({ city: searchCity, page: "1" });
  };

  const handleReset = () => {
    updateQuery({ city: null, state: null, page: null });
  };

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
            Discover our handpicked selection of premium properties across
            India's major cities
          </p>
        </div>

       
        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {properties?.map((property) => (
            <PropertyCard key={property._id} {...property} />
          ))}
        </div>

        {properties?.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">
              No properties found for the selected criteria.
            </p>
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
      </div>
    </section>
  );
};

export default FeaturedProperties;
