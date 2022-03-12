<template>
  <div class="page">
    <MainPromo></MainPromo>
    <Categories></Categories>
    <section class="products">
      <h2 class="hidden">Products</h2>
      <div class="container">
        <ul class="products_inside">
          <ProductCard
            v-for="item of catalog"
            v-bind:key="item.id"
            v-bind:data="item"
          >
          </ProductCard>
        </ul>
        <div class="center">
          <router-link to="/catalog" class="product_link no_line"
            >Browse All Product</router-link
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import Categories from "../components/Categories.vue";
import MainPromo from "../components/MainPromo.vue";

export default {
  components: {
    ProductCard,
    Categories,
    MainPromo,
  },
  computed: {
    catalog() {
      return this.$store.getters.getCatalog;
    },
  },
  methods: {
    onBuyBtnClk(product) {
      this.$store.dispatch("addToCart", product);
    },
  },
};
</script>

<style lang="scss">
</style>