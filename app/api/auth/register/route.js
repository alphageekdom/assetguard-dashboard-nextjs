import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import validator from 'validator';

const prisma = new PrismaClient();

// POST /api/register
export const POST = async (req, res) => {
  if (req.method !== 'POST') {
    return new NextResponse('Method not allowed', { status: 405 });
  }

  const { name, email, password } = await req.json();

  try {
    // Validate email
    if (!validator.isEmail(email)) {
      return new NextResponse(
        JSON.stringify({ message: 'Invalid email format' }),
        { status: 400 }
      );
    }

    // Sanitize email
    const sanitizedEmail = validator.normalizeEmail(email);

    console.log(sanitizedEmail);

    // Check for existing user
    const existingUser = await prisma.user.findUnique({
      where: { email: sanitizedEmail },
    });

    if (existingUser) {
      return new NextResponse(
        JSON.stringify({ message: 'Email already in use' }),
        { status: 409 }
      );
    }

    // Validate password (example: must be at least 8 characters long)
    if (!validator.isLength(password, { min: 8 })) {
      return new NextResponse(
        JSON.stringify({
          message: 'Password must be at least 8 characters long',
        }),
        { status: 400 }
      );
    }

    // Sanitize and hash password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(validator.escape(password), salt);

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email: sanitizedEmail, // Use sanitized email
        password: hashedPassword,
      },
    });

    return new NextResponse(
      JSON.stringify({ message: 'User registered successfully' }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: 'Error registering user' }),
      { status: 500 }
    );
  }
};
