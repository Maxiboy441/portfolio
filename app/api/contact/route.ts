// app/api/contact/route.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  try {
    const newContact = await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    return NextResponse.json({ message: 'Message sent successfully', contact: newContact });
  } catch (error) {
    console.error('Error saving the message:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred', details: error.message || error },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
