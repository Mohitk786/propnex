"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Bed, Bath, Square, Phone, MessageCircle } from "lucide-react";
import { Property } from "@/types/property";
import Image from "next/image";

interface PropertyCardProps extends Property {
  // Extend with any additional props if needed
}

const PropertyCard = ({
  _id,
  title,
  price,
  priceType,
  location,
  city,
  state,
  bedrooms,
  bathrooms,
  area,
  areaUnit,
  propertyType,
  status,
  featured,
  image,
  parking,
  furnished,
  readyToMove,
}: PropertyCardProps) => {
  const formatPrice = (price: number, priceType: string) => {
    if (priceType === 'rent') {
      return `₹${(price / 1000).toFixed(0)}k/month`;
    } else {
      if (price >= 10000000) {
        return `₹${(price / 10000000).toFixed(1)} Cr`;
      } else if (price >= 100000) {
        return `₹${(price / 100000).toFixed(1)} L`;
      } else {
        return `₹${price.toLocaleString()}`;
      }
    }
  };


  return (
    <Card className="bg-white/90 backdrop-blur-sm border-2 border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden group hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image || '/property-1.jpg'}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <Badge 
            variant={status === 'available' ? 'default' : 'secondary'}
            className="bg-white/90 backdrop-blur-sm text-gray-800 font-semibold"
          >
            {status === 'available' ? 'Available' : status}
          </Badge>
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold">
              Featured
            </Badge>
          </div>
        )}

        {/* Property Type Badge */}
        <div className="absolute bottom-4 left-4">
          <Badge className="bg-blue-600/90 backdrop-blur-sm text-white font-semibold capitalize">
            {propertyType}
          </Badge>
        </div>

        {/* Heart Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm hover:bg-white hover:text-red-500 transition-all duration-300 rounded-full"
        >
          <Heart className="h-5 w-5" />
        </Button>
      </div>

      {/* Content Section */}
      <CardContent className="p-6">
        {/* Price */}
        <div className="mb-4">
          <span className="text-2xl font-bold text-gray-800">
            {formatPrice(price, priceType)}
          </span>
          <span className="text-sm text-gray-500 ml-2 capitalize">
            {priceType}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>

        {/* Location */}
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-2 text-blue-500" />
          <span className="text-sm">{location}, {city}, {state}</span>
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex items-center text-gray-600">
            <Bed className="h-4 w-4 mr-2 text-blue-500" />
            <span className="text-sm">{bedrooms} Bed</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Bath className="h-4 w-4 mr-2 text-blue-500" />
            <span className="text-sm">{bathrooms} Bath</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Square className="h-4 w-4 mr-2 text-blue-500" />
            <span className="text-sm">{area} {areaUnit}</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-4">
          {parking && (
            <Badge variant="outline" className="text-xs">
              Parking
            </Badge>
          )}
          {furnished && (
            <Badge variant="outline" className="text-xs">
              Furnished
            </Badge>
          )}
          {readyToMove && (
            <Badge variant="outline" className="text-xs">
              Ready to Move
            </Badge>
          )}
        </div>

      
      </CardContent>
    </Card>
  );
};

export default PropertyCard;