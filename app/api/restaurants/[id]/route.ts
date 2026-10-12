import { NextResponse } from 'next/server';
import { getRestaurants } from '@/lib/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const city = searchParams.get('city');
  const query = searchParams.get('query')?.trim().toLowerCase() || '';

  let restaurants = getRestaurants();

  if (category && category !== '全部') {
    restaurants = restaurants.filter((item) => item.category === category);
  }

  if (city && city !== '全部') {
    restaurants = restaurants.filter((item) => item.city === city);
  }

  if (query) {
    restaurants = restaurants.filter((item) => {
      return (
        item.name.toLowerCase().includes(query) ||
        item.address.toLowerCase().includes(query) ||
        item.cuisine.toLowerCase().includes(query)
      );
    });
  }

  return NextResponse.json(restaurants);
}
