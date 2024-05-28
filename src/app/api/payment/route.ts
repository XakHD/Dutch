import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2023-10-16",
  });
  let data = await request.json();
  let priceId = data.priceId;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.SITE_URL}`,
    cancel_url: `${process.env.SITE_URL}`,
  });

  return NextResponse.json(session.url);
}