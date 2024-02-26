import { defineStore } from 'pinia';
import type { Login as User} from "@/types/Login";

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: {} as User
    }
  },
  persist: true,
})
