import { NextRequest, NextResponse } from 'next/server';
import { CreatePropertyRequest, UpdatePropertyRequest, Property } from '@/models/property';

// Mock database - in production, this would be a real database
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

// Helper function to verify admin token
function verifyAdminToken(request: NextRequest): boolean {
  const token = request.headers.get('authorization')?.replace('Bearer ', '') ||
                request.cookies.get('adminToken')?.value;
  
  // In production, verify JWT token here
  // For now, just check if token exists
  return !!token;
}

// GET - List all properties (admin only)
export async function GET(request: NextRequest) {
  try {
    if (!verifyAdminToken(request)) {
      return NextResponse.json(
        { message: 'Unauthorized. Admin access required.' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status');

    let filteredProperties = properties;
    if (status) {
      filteredProperties = properties.filter(p => p.status === status);
    }

    const total = filteredProperties.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProperties = filteredProperties.slice(startIndex, endIndex);

    return NextResponse.json({
      properties: paginatedProperties,
      total,
      page,
      limit,
      totalPages
    });
  } catch (error) {
    console.error('Admin property list error:', error);
    return NextResponse.json(
      { message: 'Failed to fetch properties' },
      { status: 500 }
    );
  }
}

// POST - Create new property (admin only)
export async function POST(request: NextRequest) {
  try {
    if (!verifyAdminToken(request)) {
      return NextResponse.json(
        { message: 'Unauthorized. Admin access required.' },
        { status: 401 }
      );
    }

    const body: CreatePropertyRequest = await request.json();
    
    // Validate required fields
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

// PUT - Update property (admin only)
export async function PUT(request: NextRequest) {
  try {
    if (!verifyAdminToken(request)) {
      return NextResponse.json(
        { message: 'Unauthorized. Admin access required.' },
        { status: 401 }
      );
    }

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

// DELETE - Delete property (admin only)
export async function DELETE(request: NextRequest) {
  try {
    if (!verifyAdminToken(request)) {
      return NextResponse.json(
        { message: 'Unauthorized. Admin access required.' },
        { status: 401 }
      );
    }

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
