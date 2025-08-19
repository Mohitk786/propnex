import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_CREDENTIALS } from '@/constants';    

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { message: 'Username and password are required' },
        { status: 400 }
      );
    }

    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      const token = Buffer.from(`${username}:${Date.now()}`).toString('base64');
      
      return NextResponse.json({
        success: true,
        message: 'Login successful',
        token: token,
        user: {
          username: username,
          role: 'admin'
        }
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
