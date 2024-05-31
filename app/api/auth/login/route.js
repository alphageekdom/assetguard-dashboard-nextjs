import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

// POST /api/login
export const POST = async (req, res) => {
  if (req.method !== 'POST') {
    return new NextResponse('Method not allowed', { status: 405 });
  }

  const { email, password } = await req.json();

  try {
    // Check for existing user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return new NextResponse(
        JSON.stringify({ message: 'No user found with this email' }),
        { status: 401 }
      );
    }

    // Compare submitted password with the hashed password in the database
    const isValid = bcrypt.compareSync(password, user.password);
    if (!isValid) {
      return new NextResponse(
        JSON.stringify({ message: 'Incorrect password' }),
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    // Redirect user or send success response
    return new NextResponse(
      JSON.stringify({ message: 'Login successful', token }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: 'Error during login process' }),
      { status: 500 }
    );
  }
};
