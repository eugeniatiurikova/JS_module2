<template>
  <form action="#" method="post" class="cart_form">
    <div class="cart_form_fields">
      <p class="cart_form_title">Shipping address</p>
      <input
        type="text"
        class="cart_form_input"
        required
        placeholder="Bangladesh"
      />
      <input type="text" class="cart_form_input" required placeholder="State" />
      <input
        type="text"
        class="cart_form_input"
        required
        placeholder="Postcode / Zip"
      />
      <button type="button" class="cart_button_quote">Get a quote</button>
    </div>
    <div class="cart_form_checkout">
      <div class="cart_prices">
        <slot></slot>
      </div>
      <button type="submit" class="cart_button_checkout">
        Proceed a checkout
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["data", "sum"],
};
</script>

<style>
</style>