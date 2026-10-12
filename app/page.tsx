import RestaurantList from '@/components/restaurant-list';
import { getRestaurants } from '@/lib/data';

export default function HomePage() {
  const restaurants = getRestaurants();

  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">美属萨摩亚 • 餐馆发现</span>
          <h1>中餐馆 & 中式快餐馆</h1>
          <p>
            探索美属萨摩亚地区的中餐馆与中式快餐选择，快速筛选城市、类别与关键词。
          </p>
        </div>
        <div className="hero-stats">
          <div>
            <strong>{restaurants.length}</strong>
            <span>馆铺</span>
          </div>
          <div>
            <strong>2</strong>
            <span>分类</span>
          </div>
          <div>
            <strong>3+</strong>
            <span>城市</span>
          </div>
        </div>
      </section>

      <RestaurantList initialRestaurants={restaurants} />
    </main>
  );
}
