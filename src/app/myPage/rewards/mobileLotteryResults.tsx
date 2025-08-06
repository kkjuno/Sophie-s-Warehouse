'use client';
import rewardsStyles from '@/styles/myPage/rewards/rewards.module.css';
import useUserStore from '@/zustand/userStore';
import { useEffect, useState } from 'react';
interface Post {
  _id: string;
  type: string;
  views: number;
  title: string;
  content: string;
  createdAt: string;
}
export default function MobileLotteryResults() {
  const [lotteryPosts, setLotteryPosts] = useState<Post[]>([]);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!user?.token?.accessToken) return;

      try {
        const res = await fetch('https://fesp-api.koyeb.app/market/posts?type=lottery', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token.accessToken}`,
            'Client-id': 'febc13-final07-emjf',
          },
        });

        const result = await res.json();

        if (res.ok && Array.isArray(result.item)) {
          setLotteryPosts(result.item as Post[]);
        } else {
          console.error('데이터 불러오기 실패:', result);
        }
      } catch (err) {
        console.error('API 오류:', err);
      }
    };

    fetchPosts();
  }, [user]);

  return (
    <div className={rewardsStyles.mobile_lottery_result_section}>
      <h2>당첨 내역</h2>
      <div className={rewardsStyles.mobile_lottery_result_header}>
        <div>날짜/당첨번호</div>
        <div>상품명/옵션</div>
        <div>상품금액</div>
        <div>진행상태</div>
        <div>주문날짜</div>
      </div>
      {lotteryPosts.length > 0 ? (
        lotteryPosts.map((post) => (
          <div key={post._id} className={rewardsStyles.mobile_lottery_result_row}>
            <div>{post.createdAt.slice(0, 10)}</div>
            <div className={rewardsStyles.mobile_item_name}>{post.title}</div>
            <div>{post?.views?.toLocaleString()}원</div>
            <div>주문하기</div>
            <div>{post.createdAt.slice(0, 10)}</div>
          </div>
        ))
      ) : (
        <div className={rewardsStyles.mobile_lottery_result_row_text}>당첨 내역이 없습니다.</div>
      )}
    </div>
  );
}
