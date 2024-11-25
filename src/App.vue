<template>
  <main>
    <Header />
    <RouterView />
    <Footer />
  </main>
</template>

<script>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    RouterView,
    Header,
    Footer,
  },
};
</script>

<style scoped lang="scss">
main {
  min-height: calc(100vh - 150px);
  font-family: "Roboto", sans-serif;
}
</style>
