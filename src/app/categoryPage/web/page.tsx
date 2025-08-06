import CategoryPage from '@/app/categoryPage/web/categoryPage';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense>
      <CategoryPage />
    </Suspense>
  );
}
