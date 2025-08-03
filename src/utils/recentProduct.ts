export const RECENT_PRODUCTS_KEY = 'recentProducts';

// 최근 본 상품 추가 (중복 제거 + 최신순 + 최대 5개 유지)
export const addRecentProduct = (productId: number) => {
  if (typeof window === 'undefined') return;
  const existing = JSON.parse(localStorage.getItem(RECENT_PRODUCTS_KEY) || '[]');
  const newList = [productId, ...existing.filter((id: number) => id !== productId)].slice(0, 5);
  localStorage.setItem(RECENT_PRODUCTS_KEY, JSON.stringify(newList));
};

// 최근 본 상품 ID 목록 가져오기
export const getRecentProducts = (): number[] => {
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem(RECENT_PRODUCTS_KEY) || '[]');
};

// 최근 본 상품 삭제 (추가된 함수)
export const removeRecentProduct = (productId: number) => {
  if (typeof window === 'undefined') return;
  const existing = JSON.parse(localStorage.getItem(RECENT_PRODUCTS_KEY) || '[]');
  const updated = existing.filter((id: number) => id !== productId);
  localStorage.setItem(RECENT_PRODUCTS_KEY, JSON.stringify(updated));
};
