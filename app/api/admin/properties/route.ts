import { NextRequest, NextResponse } from 'next/server';
import {  UpdatePropertyRequest, Property as PropertyType } from '@/types/property';
import { writeFile } from "fs/promises";
import path from "path";
import Property from '@/models/Property';
import { dbConnect } from '@/lib/dbConnect';



export async function POST(req: Request) {
  try {
    const formData = await req.json();

    const payload = { ...formData, image: undefined };

    await dbConnect()
    const property = await Property.create(payload);

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

// export async function PUT(request: NextRequest) {
//   try {
   

//     const body: UpdatePropertyRequest = await request.json();
    
//     if (!body.id) {
//       return NextResponse.json(
//         { message: 'Property ID is required' },
//         { status: 400 }
//       );
//     }

//     const propertyIndex = properties.findIndex(p => p.id === body.id);
//     if (propertyIndex === -1) {
//       return NextResponse.json(
//         { message: 'Property not found' },
//         { status: 404 }
//       );
//     }

//     // Update property
//     const updatedProperty = {
//       ...properties[propertyIndex],
//       ...body,
//       updatedAt: new Date()
//     };

//     properties[propertyIndex] = updatedProperty;

//     return NextResponse.json({
//       message: 'Property updated successfully',
//       property: updatedProperty
//     });

//   } catch (error) {
//     console.error('Update property error:', error);
//     return NextResponse.json(
//       { message: 'Failed to update property' },
//       { status: 500 }
//     );
//   }
// }

// export async function DELETE(request: NextRequest) {
//   try {
   

//     const { searchParams } = new URL(request.url);
//     const id = searchParams.get('id');

//     if (!id) {
//       return NextResponse.json(
//         { message: 'Property ID is required' },
//         { status: 400 }
//       );
//     }

//     const propertyIndex = properties.findIndex(p => p.id === id);
//     if (propertyIndex === -1) {
//       return NextResponse.json(
//         { message: 'Property not found' },
//         { status: 404 }
//       );
//     }

//     // Remove property
//     const deletedProperty = properties.splice(propertyIndex, 1)[0];

//     return NextResponse.json({
//       message: 'Property deleted successfully',
//       property: deletedProperty
//     });

//   } catch (error) {
//     console.error('Delete property error:', error);
//     return NextResponse.json(
//       { message: 'Failed to delete property' },
//       { status: 500 }
//     );
//   }
// }
