import CategoryHeader from '@/app/categoryPage/mobile/header';
import ProductGrid from '@/app/categoryPage/mobile/productGrid';
import { ProductCardProps, Product, ProductGridProps } from '@/types/product';
import styles from '@/styles/categoryPage/mobile/categoryPage.module.css';

export default function CategoryPage() {
  // 샘플 데이터
  const sampleProducts: Product[] = Array(12).fill({
    id: 1,
    name: '[마녀배달부 키키] 마그넷',
    price: 9000,
    image: '/images/products/kiki/kiki-magnet.svg',
    category: '인테리어',
    likes: 4,
    comments: 3,
  });

  return (
    <div className={styles.container}>
      <CategoryHeader />
      <ProductGrid products={sampleProducts} />
    </div>
  );
}
