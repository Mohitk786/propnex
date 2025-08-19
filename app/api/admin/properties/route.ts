import { NextRequest, NextResponse } from 'next/server';
import { CreatePropertyRequest, UpdatePropertyRequest, Property } from '@/types/property';

let properties: Property[] = [
  {
    id: "1",
    title: "Luxury 3BHK Apartment in Downtown Mumbai",
    description: "Beautiful apartment with modern amenities, located in the heart of Mumbai",
    price: 25000000,
    priceType: "sale",
    currency: "INR",
    location: "Bandra West",
    city: "Mumbai",
    state: "Maharashtra",
    address: "123 Bandra West, Mumbai, Maharashtra",
    bedrooms: 3,
    bathrooms: 2,
    area: 1850,
    areaUnit: "sq ft",
    propertyType: "apartment",
    status: "available",
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
  }
];




export async function POST(request: NextRequest) {
  try {


    const body: CreatePropertyRequest = await request.json();
    
    if (!body.title || !body.description || !body.price || !body.city || !body.state) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create new property
    const newProperty: Property = {
      id: Date.now().toString(),
      ...body,
      currency: body.currency || "INR",
      areaUnit: body.areaUnit || "sq ft",
      status: "available",
      featured: false,
      images: body.images || [],
      amenities: body.amenities || [],
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: "admin"
    };

    properties.push(newProperty);

    return NextResponse.json({
      message: 'Property created successfully',
      property: newProperty
    }, { status: 201 });

  } catch (error) {
    console.error('Create property error:', error);
    return NextResponse.json(
      { message: 'Failed to create property' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
   

    const body: UpdatePropertyRequest = await request.json();
    
    if (!body.id) {
      return NextResponse.json(
        { message: 'Property ID is required' },
        { status: 400 }
      );
    }

    const propertyIndex = properties.findIndex(p => p.id === body.id);
    if (propertyIndex === -1) {
      return NextResponse.json(
        { message: 'Property not found' },
        { status: 404 }
      );
    }

    // Update property
    const updatedProperty = {
      ...properties[propertyIndex],
      ...body,
      updatedAt: new Date()
    };

    properties[propertyIndex] = updatedProperty;

    return NextResponse.json({
      message: 'Property updated successfully',
      property: updatedProperty
    });

  } catch (error) {
    console.error('Update property error:', error);
    return NextResponse.json(
      { message: 'Failed to update property' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
   

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { message: 'Property ID is required' },
        { status: 400 }
      );
    }

    const propertyIndex = properties.findIndex(p => p.id === id);
    if (propertyIndex === -1) {
      return NextResponse.json(
        { message: 'Property not found' },
        { status: 404 }
      );
    }

    // Remove property
    const deletedProperty = properties.splice(propertyIndex, 1)[0];

    return NextResponse.json({
      message: 'Property deleted successfully',
      property: deletedProperty
    });

  } catch (error) {
    console.error('Delete property error:', error);
    return NextResponse.json(
      { message: 'Failed to delete property' },
      { status: 500 }
    );
  }
}
