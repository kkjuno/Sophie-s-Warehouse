import { ApiResPromise } from '../types/apiType';
import { Product } from '../types/productType';

export async function productFetch(): ApiResPromise<Product[]> {
  const server = process.env.NEXT_PUBLIC_BASE_URL;
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
  const url = `${server}/products`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'client-Id': clientId as string,
    },
  });
  const resJson = await res.json();
  console.log('API 응답:', resJson); // 응답 내용 확인
  if (resJson.ok === 0) {
    // 수정된 부분: ok가 0인 경우 에러 발생
    throw new Error('상품목록 조회 실패');
  }
  return resJson.item;
}
