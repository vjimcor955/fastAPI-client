<script>
import { useUserStore } from "../stores/userStore.js";

export default {
  name: "HomeView",
  data() {
    return {
      userStore: useUserStore(),
      user: {
        username: "",
        password: "",
      },
      isLogged: false,
      usersList: [],
    };
  },
  methods: {
    async login() {
      event.preventDefault();
      const response = await fetch("URL_LOGIN", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.user),
      });
      const data = await response.json();
      this.userStore.login(data);
    },
    async fetchUsers() {
      event.preventDefault();
      const response = await fetch("URL_ALLUSERS", {
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      this.usersList = data;
    },
  },
};
</script>

<template>
  <div class="home">
    <div class="login">
      <h2 class="title">Login</h2>
      <form class="form" @submit="this.login">
        <input type="text" v-model="user.username" placeholder="User" />
        <input type="password" v-model="user.password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>

    <div class="users">
      <h2 class="title">Users</h2>
      <button class="button" @click="fetchUsers">Fetch Users</button>
      <div class="content">
        <ul>
          <li v-for="user in this.usersList" :key="user.id">
            ´{{ user.username }} | {{ user.password }} | {{ user.token }}´
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home {
  min-height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 75px 0;
  gap: 50px;
  background-color: rgba(240, 46, 46, 0.05);

  .users {
    width: 50%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 25px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    padding: 25px 0;

    .title {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .content {
      width: 95%;
      height: 80%;
      overflow-y: auto;
      border: 1px solid #000;
      border-radius: 10px;
      background-color: #f0f0f0;
    }

    .button {
      padding: 10px 25px;
      border: 1px solid #000;
      border-radius: 5px;
      background-color: #f0f0f0;
      cursor: pointer;
    }
    .button:hover {
      background-color: #e0e0e0;
    }
  }

  .login {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px 0;
    gap: 25px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

    .title {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .form {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      input {
        width: 75%;
        padding: 10px;
        border: 1px solid #000;
        border-radius: 5px;
      }

      button {
        padding: 10px 25px;
        border: 1px solid #000;
        border-radius: 5px;
        background-color: #f0f0f0;
        cursor: pointer;
      }
      button:hover {
        background-color: #e0e0e0;
      }
    }
  }
}
</style>
