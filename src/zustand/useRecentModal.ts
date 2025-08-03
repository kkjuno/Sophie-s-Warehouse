import { create } from 'zustand';

interface RecentModalState {
  isOpen: boolean; // 완전히 열려있는 상태
  isAnimating: boolean; // 애니메이션 중인지 여부
  open: () => void;
  close: () => void;
  finishClose: () => void; // 애니메이션 끝났을 때 상태 정리
}

export const useRecentModal = create<RecentModalState>((set) => ({
  isOpen: false,
  isAnimating: false,
  open: () => {
    window.history.pushState({ recentModal: true }, '');
    set({ isOpen: true, isAnimating: true });
  },
  close: () => {
    set({ isAnimating: false }); // 닫힘 애니메이션 시작
    setTimeout(() => set({ isOpen: false }), 300); // 애니메이션 끝나고 완전히 닫음
    if (window.history.state?.recentModal) {
      window.history.back();
    }
  },
  finishClose: () => set({ isOpen: false }),
}));

// 뒤로가기 시 닫히도록
if (typeof window !== 'undefined') {
  window.addEventListener('popstate', () => {
    useRecentModal.getState().close();
  });
}
