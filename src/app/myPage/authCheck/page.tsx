'use client';
import auth_check_styles from '@/styles/myPage/authCheck/authCheck.module.css';
import { useRouter } from 'next/navigation';
export default function AuthCheck() {
  const router = useRouter();
  return (
    <>
      <div className={auth_check_styles.mobile_root_header}>
        {/* 최상단 text */}
        <div className={auth_check_styles.mobile_header}>
          <h1>회원정보수정</h1>
          <span>회원님의 정보를 보호하기 위해 비밀번호를 </span>
          <span>다시 한번 확인해주세요</span>
        </div>
        {/* 아이디 비밀번호 입력 박스 */}
        <div className={auth_check_styles.mobile_id_password_typing_wrapper}>
          {/* 아이디 입력 박스 */}
          <div className={auth_check_styles.mobile_id_wrapper}>
            <span>아이디</span>
            <label htmlFor="">
              <input type="id" />
            </label>
          </div>
          {/* 비밀번호 입력 박스 */}
          <div className={auth_check_styles.mobile_password_wrapper}>
            <span>비밀번호</span>
            <label htmlFor="">
              <input type="password" />
            </label>
          </div>
        </div>
        {/* 닫기, 인증하기 버튼 */}
        <div className={auth_check_styles.mobile_auth_check_button_wrapper}>
          <button
            type="button"
            className={auth_check_styles.mobile_auth_check_close_button}
            onClick={() => router.back()}
          >
            닫기
          </button>
          <button type="button" className={auth_check_styles.mobile_auth_check_porve_button}>
            인증하기
          </button>
        </div>
      </div>
    </>
  );
}
