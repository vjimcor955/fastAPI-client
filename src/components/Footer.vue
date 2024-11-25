<template>
  <footer class="footer">
    <p>&copy; 2024 Cliente FastAPI, Grupo 3. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #ffffff00;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  box-shadow: rgba(240, 46, 46, 0.4) 0px -5px, rgba(240, 46, 46, 0.2) 0px -10px,
    rgba(240, 46, 46, 0.1) 0px -15px, rgba(240, 46, 46, 0.05) 0px -20px;

  p {
    font-weight: bold;
  }
}
</style>
