import React from "react";
import prisma from "../../../../lib/prismaClient";

async function testDatabase() {
  try {
    const users = await prisma.user.findMany();
    console.log("Database connection successful! Users:", users);
  } catch (error) {
    console.error("Database connection failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testDatabase();

function page() {
  return <div>Dashboard</div>;
}

export default page;
