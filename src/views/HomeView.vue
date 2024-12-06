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
      errors: {
        username: "",
        password: "",
      },
      isLogged: false,
      usersList: [],
    };
  },
  computed: {
    isFormValid() {
      return this.user.username && this.user.password;
    },
  },
  methods: {
    validateUsername() {
      if (!this.user.username) {
        this.errors.username = "Username is required";
      } else {
        this.errors.username = "";
      }
    },
    validatePassword() {
      if (!this.user.password) {
        this.errors.password = "Password is required";
      } else {
        this.errors.password = "";
      }
    },
    async login() {
      this.validateUsername();
      this.validatePassword();
      if (!this.errors.username && !this.errors.password) {
        const response = await fetch(
          "https://peticiones-fastapi.onrender.com/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.user),
          }
        );
        const data = await response.json();
        this.userStore.login(data);
        this.user = {
          username: "",
          password: "",
        };
      }
    },
    async fetchUsers() {
      const response = await fetch(
        "https://peticiones-fastapi.onrender.com/users",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${this.userStore.user.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.error) {
        alert(data.error);
      }
      this.usersList = data;
    },
  },
};
</script>

<template>
  <div class="home">
    <div class="login">
      <h2 class="title">Login</h2>
      <form class="form" @submit.prevent="login">
        <input
          type="text"
          v-model="user.username"
          placeholder="User"
          @blur="validateUsername"
        />
        <span v-if="errors.username">{{ errors.username }}</span>

        <input
          type="password"
          v-model="user.password"
          placeholder="Password"
          @blur="validatePassword"
        />
        <span v-if="errors.password">{{ errors.password }}</span>

        <button type="submit" :disabled="!isFormValid">Login</button>
      </form>
    </div>

    <div class="users">
      <h2 class="title">Users</h2>
      <button class="button" @click="fetchUsers">Fetch Users</button>
      <div class="content">
        <ul v-if="!usersList.detail">
          <li v-for="user in usersList" :key="user.id">
            - Username: {{ user.username }}
            <br />
            - Password: {{ user.password }}
            <br />
            - Token: {{ user.token }}
            <span class="separator"></span>
          </li>
        </ul>
        <p v-else>{{ usersList.detail }}</p>
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
    width: 85%;
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
      overflow-y: auto;

      ul {
        padding: 10px;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 5px;

        li {
          width: 100%;
          font-weight: bold;
        }

        .separator {
          display: block;
          height: 1px;
          background: #ccc;
          margin: 10px 0;
        }
      }

      p {
        text-align: center;
        font-size: large;
        font-weight: bold;
        padding: 25px;
      }
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
