import Image from 'next/image';
import { productFetch } from '../fetch/product';

export default async function Test() {
  const data = await productFetch();
  console.log('데이터', data);
  const dataImage = data[0].name;
  console.log(dataImage);
  return (
    <>
      <h1>이곳은 테스트 페이지입니다.</h1>
      <p>{dataImage}</p>
      <div>
        <Image fill src={`/${dataImage}`} alt="이미지" />
      </div>
    </>
  );
}
