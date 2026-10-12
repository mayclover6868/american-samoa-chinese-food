'use client';

import { useMemo, useState } from 'react';
import type { Restaurant } from '@/lib/data';

export default function RestaurantList({ initialRestaurants }: { initialRestaurants: Restaurant[] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('全部');
  const [city, setCity] = useState('全部');

  const categories = ['全部', ...new Set(initialRestaurants.map((item) => item.category))];
  const cities = ['全部', ...new Set(initialRestaurants.map((item) => item.city))];

  const filteredRestaurants = useMemo(() => {
    return initialRestaurants.filter((restaurant) => {
      const matchesQuery =
        !query ||
        restaurant.name.toLowerCase().includes(query.toLowerCase()) ||
        restaurant.address.toLowerCase().includes(query.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(query.toLowerCase());

      const matchesCategory = category === '全部' || restaurant.category === category;
      const matchesCity = city === '全部' || restaurant.city === city;

      return matchesQuery && matchesCategory && matchesCity;
    });
  }, [initialRestaurants, query, category, city]);

  return (
    <section className="board">
      <div className="toolbar">
        <label className="search-box">
          <span>搜索</span>
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="输入餐馆名、地址或菜系..."
          />
        </label>

        <label className="select-box">
          <span>类别</span>
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="select-box">
          <span>城市</span>
          <select value={city} onChange={(event) => setCity(event.target.value)}>
            {cities.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="results-header">
        <h2>餐馆列表</h2>
        <span>{filteredRestaurants.length} 家匹配</span>
      </div>

      <div className="card-grid">
        {filteredRestaurants.map((restaurant) => (
          <article key={restaurant.id} className="restaurant-card">
            <div className="card-topline">
              <span className={`badge ${restaurant.category === '中餐馆' ? 'primary' : 'secondary'}`}>
                {restaurant.category}
              </span>
              <span className="rating">⭐ {restaurant.rating}</span>
            </div>

            <h3>{restaurant.name}</h3>
            <p className="meta">{restaurant.city} · {restaurant.district}</p>
            <p className="description">{restaurant.description}</p>

            <ul className="info-list">
              <li>
                <strong>地址：</strong>
                {restaurant.address}
              </li>
              <li>
                <strong>电话：</strong>
                {restaurant.phone}
              </li>
              <li>
                <strong>营业时间：</strong>
                {restaurant.openingHours}
              </li>
              <li>
                <strong>菜系：</strong>
                {restaurant.cuisine}
              </li>
            </ul>

            <div className="chip-row">
              {restaurant.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {filteredRestaurants.length === 0 && (
        <div className="empty-state">
          暂无符合条件的餐馆，试试更换关键词或筛选条件。
        </div>
      )}
    </section>
  );
}
