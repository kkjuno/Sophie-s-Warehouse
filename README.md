# 소피의 창고 (Sophie's Warehouse) 

<div align="center">
<img src="https://github.com/user-attachments/assets/5b4e8e72-3b97-407e-bda7-5aa1a0a8a07c">
</div>
<br />
<hr>
<br />

**🔗 배포링크 :** https://sophie-s-warehouse.vercel.app/

 **📌 테스트계정(관리자) :** 



<table>
  <tr>
    <td align="left"><b>Id</b></td>
    <td align="left">admin@market.com</td>
  </tr>
  <tr>
    <td align="left"><b>Password</b></td>
    <td align="left">11111111</td>
  </tr>
</table>
<br>

<a href="https://www.notion.so/7-Chillin-Code-22973873401a80868f80f49a9c2f8227"> 📋 노션 문서 </a>| <a href="https://www.figma.com/design/fIYvLGzla9y22dYAE8SKsv/Chill-Code?node-id=56-115"> 🎨 피그마 디자인 </a> |  <a href="https://www.notion.so/22973873401a80bd9053fb223a1e966a?pvs=25"> 📜 요구사항 명세서</a>

<hr>

## 목차

- [프로젝트 소개](#1-프로젝트-소개)
- [개발 환경](#2-개발-환경)
- [주요 기능](#3-주요-기능)
<br><br>

## 🌿 1. 프로젝트 소개 🌿

소피의 창고는 스튜디오 지브리 애니메이션 속 아름다운 순간들을<br/>
오래도록 간직할 수 있는 특별한 굿즈를 만나볼 수 있는 공간입니다.<br/>
지브리의 세계관이 담긴 피규어, 문구, 생활소품까지, 사랑스러운 아이템들을 한데 모아보았습니다.
<br><br>

## 🛠 2. 개발 환경 🛠

<table>
  <tr>
    <th><분류</th>
    <th>기술</th>
    <th>버전</th>
  </tr>
  <tr>
    <td rowspan="4">Frontend</td>
    <td><img src="https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white" alt="Next.js"></td>
    <td>15.3.5</td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white" alt="React"></td>
    <td>19.0.0</td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript"></td>
    <td>5</td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/Zustand-764ABC?logo=redux&logoColor=white" alt="Zustand"></td>
    <td>5.0.6</td>
  </tr>
  <tr>
    <td rowspan="3">Backend</td>
    <td><img src="https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white" alt="Node.js"></td>
    <td>20</td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/Express-000000?logo=express&logoColor=white" alt="Express"></td>
    <td>4</td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white" alt="MongoDB"></td>
    <td>6.18</td>
  </tr>
  <tr>
    <td rowspan="3">DevOps</td>
    <td><img src="https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white" alt="Vercel"></td>
    <td>-</td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/GitHub_Actions-2088FF?logo=github-actions&logoColor=white" alt="GitHub Actions"></td>
    <td>-</td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/Bruno-FF5722?logo=postman&logoColor=white" alt="Bruno"></td>
    <td>-</td>
  </tr>
</table>
<br>
      
## ✨ 3. 주요 기능 ✨

### 장바구니 
구현 내용
- 사용자가 장바구니에 추가한 상품들을 장바구니 페이지에서 보여준다.

동작 원리
1. 사용자가 상품 상세 정보 페이지에서 장바구니 혹은 구매하기 버튼을 클릭.
2. 사용자가 클릭한 해당 아이템의 정보들을 zustand로 관리하는 전역 저장소에 cartItem 배열에 추가
3. 장바구니에서는 전역 저장소에 있는 cartItem[]을 화면에 렌더링
4. 장바구니에서 전역 저장소의 값을 증감 버튼들로 조절하여 개수가 0이 되거나 x 버튼을 누르면 cartItem 배열에서 해당 상품 삭제

### 스탬프
구현 내용
- 페이지의 특색인 스탬프 기능을 구현한다.
- 스탬프는 상품 1개 구매시 1개가 적립되는 구조로 적립이 됨.
- 로그인한 유저의 스탬프가 8개가 되었을 때, 스탬프 가챠를 할 수 있는 조건이 갖추어짐.
  
동작 원리
1. 현재 로그인한 사용자의 정보를 zustand로 관리하는 전역저장소 useStore.ts에서 유저의 정보를 가져온다.
2. 로그인한 사용자의 스탬프 개수를 확인하여 개수만큼 화면에 렌더링한다.
3. 스탬프의 개수가 8개가 되었을 때, 사용자는 스탬프를 통한 가챠를 진행할 수 있는 버튼을 클릭할 수 있게 한다.
4. fetch 함수를 통해 API 서버에 있는 상품들 정보를 가져온다.
5. 가져온 상품 정보들 중 stampItem 속성이 있는 상품들만 filter 함수를 활용하여 따로 새로운 배열에 추가한다.
6. 배열을 랜덤으로 섞는 shuffled함수를 활용하여 배열을 섞는다.
7. 스탬프의 애니메이션을 위해 새로 추가된 배열을 랜덤으로 보여주다가 마지막에 당첨된 상품을 화면에 렌더링한다.
   
| 기능 | 설명 |
|------|------|
| 상품 검색 | 카테고리/영화/가격 필터링 |
| 마이페이지 | 로그인/회원가입 |
| 주문하기 | 스탬프/가챠 |
| 상세정보 | 장바구니/주문하기/주문자 정보 |
