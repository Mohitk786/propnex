import { NextRequest, NextResponse } from 'next/server';
import { seedDatabase } from '@/lib/seed';

export async function POST(request: NextRequest) {
  try {
    // In production, you might want to add authentication here
    const result = await seedDatabase();
    
    return NextResponse.json({
      message: 'Database seeded successfully',
      count: result.length
    });
  } catch (error) {
    console.error('Seeding error:', error);
    return NextResponse.json(
      { message: 'Failed to seed database' },
      { status: 500 }
    );
  }
}
