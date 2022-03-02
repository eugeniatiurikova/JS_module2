<template>
  <div class="page">
    <InnerTitle>Shopping cart</InnerTitle>
    <section class="cart">
      <h2 class="hidden">Items in the cart</h2>
      <div class="cart_inside container">
        <div class="cart_cards_wrap">
          <ul class="cart_cards">
            <transition-group name="cart_item">
              <li class="cart_item" v-if="CartEmpty">
                <img class="cart_image" src="/img/product-0.png" alt="Empty" />
                <div class="cart_item_info">
                  <p class="cart_item_descript">The cart is empty</p>
                </div>
              </li>
              <Card
                v-for="item of cart"
                v-bind:key="item.id"
                v-bind:data="item"
              >
              </Card>
            </transition-group>
          </ul>
          <div class="cart_buttons_wrap">
            <button type="button" class="cart_button">
              Clear shopping cart
            </button>
            <router-link to="/catalog" class="cart_button"
              >Continue shopping</router-link
            >
          </div>
        </div>
        <form action="#" method="post" class="cart_form">
          <div class="cart_form_fields">
            <p class="cart_form_title">Shipping address</p>
            <input
              type="text"
              class="cart_form_input"
              required
              placeholder="Bangladesh"
            />
            <input
              type="text"
              class="cart_form_input"
              required
              placeholder="State"
            />
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
              <p class="form_sub_total">
                Sub total<span class="chekout_price">${{ totalcheck }}</span>
              </p>
              <p class="cart_form_title">
                Grand total<span class="main_red_text chekout_price"
                  ><b>${{ totalcheck }}</b></span
                >
              </p>
            </div>
            <button type="submit" class="cart_button_checkout">
              Proceed a checkout
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import InnerTitle from "../components/InnerTitle.vue";

export default {
  components: {
    Card,
    InnerTitle,
  },
  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
    CartEmpty() {
      if (this.$store.getters.getCart.length > 0) return false;
      else return true;
    },
    totalcheck() {
      let ch = 0;
      for (const item of this.$store.getters.getCart)
        ch += item.price * item.quantity;
      return ch;
    },
  },
};
</script>

<style>
.cart_item-enter-active,
.cart_item-leave-active {
  transition: opacity 0.5s ease;
}

.cart_item-enter-from,
.cart_item-leave-to {
  opacity: 0;
}
</style>