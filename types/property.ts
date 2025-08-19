export interface Property {
    id: string;
    title: string;
    description: string;
    price: number;
    priceType: 'sale' | 'rent';
    currency: string;
    location: string;
    city: string;
    state: string;
    address: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    areaUnit: string;
    propertyType: 'apartment' | 'house' | 'villa' | 'penthouse' | 'commercial' | 'land' | 'studio';
    status: 'available' | 'sold' | 'rented' | 'pending';
    featured: boolean;
    images: string[];
    amenities: string[];
    parking: boolean;
    furnished: boolean;
    readyToMove: boolean;
    yearBuilt?: number;
    floor?: number;
    totalFloors?: number;
    contactPerson: string;
    contactPhone: string;
    contactEmail: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string; // admin ID
  }
  
  export interface CreatePropertyRequest {
    title: string;
    description: string;
    price: number;
    priceType: 'sale' | 'rent';
    currency?: string;
    location: string;
    city: string;
    state: string;
    address: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    areaUnit?: string;
    propertyType: 'apartment' | 'house' | 'villa' | 'penthouse' | 'commercial' | 'land' | 'studio';
    images: string[];
    amenities: string[];
    parking: boolean;
    furnished: boolean;
    readyToMove: boolean;
    yearBuilt?: number;
    floor?: number;
    totalFloors?: number;
    contactPerson: string;
    contactPhone: string;
    contactEmail: string;
  }
  
  export interface UpdatePropertyRequest extends Partial<CreatePropertyRequest> {
    id: string;
  }
  
  export interface PropertyFilters {
    city?: string;
    state?: string;
    propertyType?: string;
    priceType?: 'sale' | 'rent';
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
    bathrooms?: number;
    minArea?: number;
    maxArea?: number;
    amenities?: string[];
    parking?: boolean;
    furnished?: boolean;
    readyToMove?: boolean;
    featured?: boolean;
    status?: string;
  }
  
  export interface PropertySearchResponse {
    properties: Property[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  }
  