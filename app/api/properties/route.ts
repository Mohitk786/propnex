import { NextRequest, NextResponse } from 'next/server';
import {dbConnect} from '@/lib/dbConnect';
import Property from '@/models/Property';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const city = searchParams.get('city');
    const state = searchParams.get('state');
    const propertyType = searchParams.get('propertyType');
    const priceType = searchParams.get('priceType') as 'sale' | 'rent' | undefined;
    const minPrice = searchParams.get('minPrice') ? parseInt(searchParams.get('minPrice')!) : undefined;
    const maxPrice = searchParams.get('maxPrice') ? parseInt(searchParams.get('maxPrice')!) : undefined;
    const bedrooms = searchParams.get('bedrooms') ? parseInt(searchParams.get('bedrooms')!) : undefined;
    const bathrooms = searchParams.get('bathrooms') ? parseInt(searchParams.get('bathrooms')!) : undefined;
    const featured = searchParams.get('featured') === 'true';
    const status = searchParams.get('status');

    const filter: any = {};
    
    if (city) filter.city = { $regex: city, $options: 'i' };
    if (state) filter.state = { $regex: state, $options: 'i' };
    if (propertyType) filter.propertyType = propertyType;
    if (priceType) filter.priceType = priceType;
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = minPrice;
      if (maxPrice) filter.price.$lte = maxPrice;
    }
    if (bedrooms) filter.bedrooms = { $gte: bedrooms };
    if (bathrooms) filter.bathrooms = { $gte: bathrooms };
    if (featured) filter.featured = true;
    if (status) filter.status = status;

    const skip = (page - 1) * limit;
    
    const [properties, total] = await Promise.all([
      Property.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Property.countDocuments(filter)
    ]);

    const totalPages = Math.ceil(total / limit);

    const response = {
      properties,
      total,
      page,
      limit,
      totalPages
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Property list error:', error);
    return NextResponse.json(
      { message: 'Failed to fetch properties' },
      { status: 500 }
    );
  }
}
