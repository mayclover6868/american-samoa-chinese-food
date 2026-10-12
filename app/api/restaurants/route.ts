import { NextResponse } from 'next/server';
import { getRestaurants } from '@/lib/data';

export async function GET() {
  const restaurants = getRestaurants();
  return NextResponse.json(restaurants);
}
