import { productFetch } from '../fetch/product';

export default async function Test() {
  const data = await productFetch();
  console.log('데이터', data);

  return <>h1 이곳은 테스트 페이지입니다.</>;
}
