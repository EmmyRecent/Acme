import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    greeting: "Hello world",
    products: [
      {
        id: 1,
        item: "Baked beans",
        amount: 400,
      },
    ],
  });
};
