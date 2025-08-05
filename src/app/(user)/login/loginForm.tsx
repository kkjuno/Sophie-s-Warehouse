'use client';

import { login } from '@/data/actions/user';
import useUserStore from '@/zustand/userStore';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useActionState, useEffect, Suspense } from 'react';
import '@/styles/globals.css';
import login_styles from '@/styles/login/login.module.css';
import styles from '@/styles/components/button.module.css';

function LoginFormInner() {
  const router = useRouter();
  const [userState, formAction] = useActionState(login, null);
  const setUser = useUserStore((state) => state.setUser);
  const redirect = useSearchParams().get('redirect'); // <-- 여기 때문에 Suspense 필요

  useEffect(() => {
    if (userState?.ok) {
      setUser({
        _id: userState.item._id,
        email: userState.item.email,
        name: userState.item.name,
        type: userState.item.type,
        image: userState.item.image,
        token: {
          accessToken: userState.item.token?.accessToken || '',
          refreshToken: userState.item.token?.refreshToken || '',
        },
        extra:{
          stamp: userState.item.extra?.stamp || 0,
        }
      });
      alert('로그인이 완료되었습니다.');
      if (redirect) {
        router.replace(redirect);
      } else {
        router.back();
      }
    } else {
      if (!userState?.errors && userState?.message) {
        alert(userState.message);
      }
    }
  }, [userState, redirect, router, setUser]);

  return (
    <form action={formAction} className={login_styles.form_wrapper}>
      <div className={login_styles.login_title_container}>
        {/* 뒤로가기 아이콘 + 제목 */}
        <svg
          className={login_styles.back_button}
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="15"
            y="15"
            width="15"
            height="15"
            transform="rotate(180 15 15)"
            fill="url(#pattern0_311_1505)"
          />
          <defs>
            <pattern
              id="pattern0_311_1505"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_311_1505" transform="scale(0.00195312)" />
            </pattern>
            <image
              id="image0_311_1505"
              width="512"
              height="512"
              preserveAspectRatio="none"
              xlinkHref="data:image/png;base64,..."
            />
          </defs>
        </svg>
        <h1 className={login_styles.login_title}>로그인</h1>
      </div>

      {/* 로그인 인풋 */}
      <div className={login_styles.form}>
        <label className={login_styles.label} htmlFor="email">
          이메일 주소
        </label>
        <input
          className={login_styles.input}
          type="email"
          id="email"
          name="email"
          placeholder="example@example.com"
        />

        <label className={login_styles.label} htmlFor="password">
          비밀번호
        </label>
        <input className={login_styles.input} type="password" id="password" name="password" />

        <div className={login_styles.option}>
          <div className={login_styles.checkbox_container}>
            <input type="checkbox" id="option" name="option" className={login_styles.checkbox} />
            <label htmlFor="option" className={login_styles.checkbox_label}>
              로그인 상태 유지
            </label>
          </div>
          <Link href="#" className={login_styles.forgot_password_link}>
            <p>비밀번호를 잊으셨나요?</p>
          </Link>
        </div>

        <div className={login_styles.buttons_wrapper}>
          <button type="submit" className={`${styles.login_button} `}>
            로그인
          </button>
          <button className={`${styles.signup_button} `}>회원가입</button>
        </div>
      </div>
    </form>
  );
}

export default function LoginForm() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <LoginFormInner />
    </Suspense>
  );
}
