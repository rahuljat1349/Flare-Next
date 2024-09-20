// src/app/api/signup/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/src/lib/prismaClient";

const userSchema = z.object({
  username: z.string().min(1),
  email: z.string().email(),
});

export async function POST(req: Request) {
  const { username, email } = userSchema.parse(await req.json());


  try {
    const user = await prisma.user.create({
      data: {
        email: email,
        username: username,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "User creation failed" },
      { status: 500 }
    );
  }
}
