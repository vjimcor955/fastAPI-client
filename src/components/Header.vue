<template>
  <header class="header">
    <div class="title">
      <img src="../assets/Alberti.png" alt="Logo Alberti" />
      <h1>Cliente FastAPI - Grupo 3</h1>
    </div>
    <div class="user">
      <p>Usuario: {{ this.isLogged ? this.username : "Invitado" }}</p>
      <button v-if="this.isLogged" @click="logout">Logout</button>
    </div>
  </header>
</template>

<script>
import { useUserStore } from "../stores/userStore.js";

export default {
  name: "Header",
  data() {
    return {
      userStore: useUserStore(),
    };
  },
  computed: {
    isLogged() {
      return this.userStore.isLogged;
    },
    username() {
      return this.userStore.user.username;
    },
  },
  methods: {
    logout() {
      this.userStore.logout();
    },
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 150px;
  background-color: #ffffff00;
  color: #000;
  box-shadow: rgba(240, 46, 46, 0.4) 0px 5px, rgba(240, 46, 46, 0.2) 0px 10px,
    rgba(240, 46, 46, 0.1) 0px 15px, rgba(240, 46, 46, 0.05) 0px 20px;

  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 25px;
    font-weight: bold;

    img {
      width: 75px;
    }

    h1 {
      font-size: 1.6rem;
    }
  }

  .user {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 25px;

    p {
      font-size: 1.2rem;
    }

    button {
      padding: 10px 25px;
      border: 1px solid #000;
      border-radius: 5px;
      background-color: #f0f0f0;
    }
    button:hover {
      background-color: #e0e0e0;
    }
  }
}
</style>
