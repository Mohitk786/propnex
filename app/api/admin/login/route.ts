import { NextRequest, NextResponse } from 'next/server';
import Admin from '@/models/admin';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: 'email and password are required' },
        { status: 400 }
      );
    }

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return NextResponse.json({ message: 'Admin not found' }, { status: 404 });
    }

    if(await bcrypt.compare(password, admin.password)) {
      const token = jwt.sign({ email: email, role: 'PROPXNEX_ADMIN' }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
      
      const cookie = await cookies();
      cookie.set('propnex_admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 30,
      });

      return NextResponse.json({
        success: true,
        message: 'Login successful',
        user: admin
      });
    } else {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }
      
    
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
