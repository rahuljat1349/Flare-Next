// src/app/api/signup/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prismaClient";

const userSchema = z.object({
  password: z.string().min(2),
  email: z.string().email(),
});

export async function POST(req: Request) {
  const { email, password } = userSchema.parse(await req.json());

  try {
    const user = await prisma.user.create({
      data: {
        email: email,
        password: password,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "error registering user!" },
      { status: 500 }
    );
  }
}
