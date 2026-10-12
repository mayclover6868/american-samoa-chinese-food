import fs from 'fs';
import path from 'path';

export type Restaurant = {
  id: string;
  name: string;
  category: '中餐馆' | '中式快餐馆';
  city: string;
  district: string;
  address: string;
  phone: string;
  openingHours: string;
  cuisine: string;
  description: string;
  rating: number;
  tags: string[];
};

export function getRestaurants(): Restaurant[] {
  const filePath = path.join(process.cwd(), 'data', 'restaurants.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw) as Restaurant[];
}
