import ProductCard from './productCard';
import styles from '@/styles/categoryPage/mobile/categoryProductGrid.module.css';
import { ProductCardProps, Product, ProductGridProps } from '@/types/Product';

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className={`${styles.product_list} ${styles.grid_view}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
