import { NextRequest, NextResponse } from 'next/server';
import { CreatePropertyRequest, UpdatePropertyRequest, Property as PropertyType } from '@/types/property';
import { writeFile } from "fs/promises";
import path from "path";
import Property from '@/models/Property';

let properties: PropertyType[] = [
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








export async function POST(req: Request) {
  try {
    const formData = await req.json();

    const payload = { ...formData, image: undefined };
    const property = await Property.create(payload);

    console.log("property", property)

    const imageName = `${property._id}-${Date.now()}.jpg`;
    const imagePath = path.join(process.cwd(), "public", "images", imageName);
    const imageUrl = `${process.env.NEXT_PUBLIC_APP_URL}/images/${imageName}`;

    if (formData.image) {
      const base64Data = formData.image.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(base64Data, "base64");
      await writeFile(imagePath, buffer);

      property.image = imageUrl;
      await property.save();
    }

    return NextResponse.json({
      success: true,
      property,
    });


  } catch (err) {
    console.log("❌ Error saving property:", err);
    return NextResponse.json(
      { success: false, error: "Failed to save property" },
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
