"use server";

import { dbConnect } from "@/lib/dbConnect";
import Property from "@/models/Property";
import { Property as PropertyType } from "@/types/property";

interface SearchQuery {
  propertyType?: string;
  city?: string;
  state?: string;
  price?: number;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  parking?: boolean;
  furnished?: boolean;
  readyToMove?: boolean;
  floor?: number;
  totalFloors?: number;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  limit?: number;
  type?: string;
}

export const getProperties = async (searchQuery: SearchQuery) => {
  await dbConnect()
  const query = {
    status: "available",
    ...(searchQuery.type && { type: searchQuery.type }),
    ...(searchQuery.propertyType && { propertyType: searchQuery.propertyType }),
    ...(searchQuery.city && { city: searchQuery.city }),
    ...(searchQuery.state && { state: searchQuery.state }),
    ...(searchQuery.minPrice && { price: { $gte: searchQuery.minPrice } }),
    ...(searchQuery.maxPrice && {
      price: { $lte: searchQuery.maxPrice },
    }),
    ...(searchQuery.bedrooms && { bedrooms: searchQuery.bedrooms }),
    ...(searchQuery.bathrooms && { bathrooms: searchQuery.bathrooms }),
    ...(searchQuery.area && { area: searchQuery.area }),
    ...(searchQuery.parking && { parking: searchQuery.parking }),
    ...(searchQuery.furnished && { furnished: searchQuery.furnished }),
    ...(searchQuery.readyToMove && { readyToMove: searchQuery.readyToMove }),
    ...(searchQuery.floor && { floor: searchQuery.floor }),
    ...(searchQuery.totalFloors && { totalFloors: searchQuery.totalFloors }),
  };

  try {
    const { page = 1, limit = 10 } = searchQuery;
    const properties = await Property.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean()
      .exec() as unknown as PropertyType[];

    return {
      success: true,
      data: properties,
      error: null,
    };
  } catch (error) {
    return {
      success: false,
      error: "Failed to fetch properties " + error,
    };
  }
};
