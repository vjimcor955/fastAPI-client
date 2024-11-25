<script>
export default {
  name: "HomeView",
  data() {
    return {
      user: "",
      password: "",
      token: "",
    };
  },
  methods: {
    async fetchUsers() {
      const response = await fetch("http://localhost:8000/api/v1/items", {
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
    },
  },
};
</script>

<template>
  <div class="home"></div>
</template>

<style lang="scss">
.home {
  min-height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 250px;
  gap: 5%;
  background-color: rgba(240, 46, 46, 0.05);

  .title {
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 75%;
    width: 50%;
    gap: 20px;
    font-weight: bold;

    .images {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;

      img {
        width: 75px;
      }
    }

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
}
</style>
