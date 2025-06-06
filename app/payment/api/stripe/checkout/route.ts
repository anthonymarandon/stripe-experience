import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getProductById } from '../../../../marketplace/data/products';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { origin } = request.nextUrl;
    const { productId } = await request.json();
    
    // Récupérer les données du produit
    const product = getProductById(productId);
    if (!product) {
      return NextResponse.json({ error: 'Produit introuvable' }, { status: 404 });
    }
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'eur',
          product_data: {
            name: product.name,
            description: product.description,
          },
          unit_amount: product.price * 100, // Prix en centimes
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${origin}/payment/success?session_id={CHECKOUT_SESSION_ID}&product_id=${productId}`,
      cancel_url: `${origin}/payment/cancel`,
      metadata: {
        product_id: productId,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json({ error: 'Erreur' }, { status: 400 });
  }
} 