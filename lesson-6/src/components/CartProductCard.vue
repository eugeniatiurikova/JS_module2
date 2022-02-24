<template>
  <div class="card">
    <li class="cart_item">
      <img class="cart_image" :src="'/img/' + data.image" :alt="data.title" />
      <div class="cart_item_info">
        <p class="cart_item_title">{{ data.title }}</p>
        <p class="cart_item_descript">
          Price: <span class="main_red_text">${{ data.price }}</span>
        </p>
        <p class="cart_item_descript">Color: Red</p>
        <p class="cart_item_descript">Size: Xl</p>
        <p class="cart_item_descript">Quantity: 2</p>
      </div>
      <slot></slot>
    </li>
  </div>
</template>

<script>
export default {
  name: "CartProductCard",
  props: ["data"],
};
</script>

<style>
</style>