<template>
  <div class="card">
    <li class="product_card">
      <div class="product_card_hover"><slot></slot></div>
      <img :src="'/img/' + data.image" />
      <div class="product_info">
        <a href="product_card.html" class="">
          <p class="product_name">{{ data.title }}</p>
          <p class="product_description">{{ data.description }}</p>
        </a>
      </div>
      <p class="product_price">${{ data.price }}</p>
    </li>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["data"],
};
</script>

<style>
</style>