import LoginForm from '@/app/(user)/login/loginForm';
import Image from 'next/image';
import login_styles from '@/styles/login/login.module.css';

export default async function LoginPage() {
  return (
    <div className={login_styles.login_page}>
      {/* 로그인 페이지 헤더 */}
      <div className={login_styles.logo_wrapper}>
        <Image
          className={login_styles.logo}
          src="/logo/sophie-logo.svg"
          alt="소피의 창고 로고"
          fill
          sizes="100%"
        />
      </div>
      <p className={login_styles.description}>
        &quot;오래된 저택의 문이 열립니다...
        <br className={login_styles.mobile_only_br} />
        <strong className={login_styles.description_point}>&apos;로그인&apos;</strong> 하면 소피의
        물건을 구매 할 수 있어요.&quot;
      </p>

      {/* 로그인 폼 컴포넌트 */}
      <LoginForm />

      {/* 로그인 페이지 조항 */}
      <p className={login_styles.terms}>
        로그인하면 <strong className={login_styles.description_point}>이용약관</strong> 및
        <strong className={login_styles.description_point}>개인정보처리방침</strong>에 동의하는
        것으로 간주됩니다.
      </p>
    </div>
  );
}
