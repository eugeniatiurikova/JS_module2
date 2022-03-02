<template>
  <div class="layout">
    <ShopHead></ShopHead>
    <!-- <div class="slider">
      <transition name="slide-up">
        <div class="slide" v-if="curentSlide % 5 == 0"><h3>#1</h3></div>
        <div class="slide" v-else-if="curentSlide % 5 == 1"><h3>#2</h3></div>
        <div class="slide" v-else-if="curentSlide % 5 == 2"><h3>#3</h3></div>
        <div class="slide" v-else-if="curentSlide % 5 == 3"><h3>#4</h3></div>
        <div class="slide" v-else-if="curentSlide % 5 == 4"><h3>#5</h3></div>
      </transition>
    </div> -->
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
  data() {
    return {
      curentSlide: 0,
    };
  },
  mounted() {
    this.$store.dispatch("loadCatalog");
    this.$store.dispatch("loadCart");

    setInterval(() => {
      this.curentSlide++;
    }, 2000);
  },
};
</script>

<style lang="scss">
.slider {
  position: relative;
}

.slide {
  position: absolute;
  top: 10px;
  left: 20px;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
