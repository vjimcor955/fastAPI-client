// src/stores/userStore.js

import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {
      username: "",
      password: "",
      token: "",
    },
    isLogged: false,
  }),
  actions: {
    login(user) {
      this.user = user;
      this.isLogged = true;
    },
    logout() {
      this.user = {
        username: "",
        password: "",
        token: "",
      };
      this.isLogged = false;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "user",
        storage: localStorage,
      },
    ],
  },
});

export default useUserStore;
