import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface IUser {
  smartWallet: string;
}

type Store = {
  user: IUser | null;
  init: (user: IUser) => void;
  setUser: (user: Partial<IUser>) => void;
  clearUser: () => void;
};

const useUserStore = create<Store>()(
  devtools(
    persist(
      (set, get) => ({
        user: null,

        init(userData: IUser) {
          set((state) => ({
            ...state,
            user: userData,
          }));
          console.log("userStore: init");
        },
        async setUser(userDto: Partial<IUser>) {
          //TODO: make this false, too much DB writes!!
          set((state) => ({
            ...state,
            user: {
              ...state.user,
              ...userDto,
            },
          }));
          console.log("userStore: setUser");
        },
        clearUser() {
          set({ user: null });
        },
      }),
      {
        name: "UserStore",
      }
    )
  )
);

export default useUserStore;
