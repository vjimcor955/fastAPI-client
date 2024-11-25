<template>
  <header class="header">
    <div class="title">
      <img src="../assets/Alberti.png" alt="Logo Alberti" />
      <h1>Cliente FastAPI - Grupo 3</h1>
    </div>
    <div class="tools">
      <img src="../assets/logo.svg" alt="Logo Vue" />
      <p>+</p>
      <img src="../assets/fastapi.svg" alt="Logo FastAPI" />
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
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

  .tools {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;

    img {
      width: 50px;
    }

    p {
      font-size: 2rem;
    }
  }
}
</style>
