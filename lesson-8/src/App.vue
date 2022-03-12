<template>
  <div class="layout">
    <ShopHead></ShopHead>
    <router-view />
    <Features></Features>
    <Feedback></Feedback>
    <Footer></Footer>
  </div>
</template>

<script>
import style from "./assets/style/style.scss";

import ShopHead from "./components/ShopHead.vue";
import Footer from "./components/Footer.vue";
import Features from "./components/Features.vue";
import Feedback from "./components/Feedback.vue";

export default {
  components: {
    ShopHead,
    Footer,
    Features,
    Feedback,
  },

  mounted() {
    this.$store.dispatch("loadCatalog");
    this.$store.dispatch("loadCart");
  },
};
</script>

<style lang="scss">
</style>
