<template>
  <div class="page">
    <InnerTitle>New arrivals</InnerTitle>
    <CatalogFilters></CatalogFilters>
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
        <CatalogPagination></CatalogPagination>
      </div>
    </section>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import InnerTitle from "../components/InnerTitle.vue";
import CatalogFilters from "../components/CatalogFilters.vue";
import CatalogPagination from "../components/CatalogPagination.vue";

export default {
  components: {
    ProductCard,
    InnerTitle,
    CatalogFilters,
    CatalogPagination,
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