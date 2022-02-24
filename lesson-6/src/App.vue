<template>
  <div>
    <ShopHead v-bind:cart="cart"></ShopHead>
    <router-view
      v-bind:catalog="catalog"
      v-bind:cart="cart"
      v-bind:cartsum="cartSum"
      v-on:buyed="addToCart"
      v-on:removed="removeFromCart"
    />
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
      // CartSum: 0,
      catalog: [],
      cart: [],
    };
  },
  computed: {
    CartSum() {
      // return window.localStorage.getItem("cart-sum");
      let check = 0;
      if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
          check += cart[i].price;
        }
      }
      return check;
    },
  },
  mounted() {
    (this.catalog = [
      {
        id: 1,
        title: "ELLERY X M'O CAPSULE",
        image: "product-6.jpg",
        description:
          "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 20,
      },
      {
        id: 2,
        title: "ELLERY X M'O CAPSULE",
        image: "product-1.jpg",
        description:
          "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 30,
      },
      {
        id: 3,
        title: "ELLERY X M'O CAPSULE",
        image: "product-2.jpg",
        description:
          "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 40,
      },
      {
        id: 4,
        title: "ELLERY X M'O CAPSULE",
        image: "product-3.jpg",
        description:
          "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 50,
      },
      {
        id: 5,
        title: "ELLERY X M'O CAPSULE",
        image: "product-4.jpg",
        description:
          "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 60,
      },
      {
        id: 6,
        title: "ELLERY X M'O CAPSULE",
        image: "product-5.jpg",
        description:
          "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        price: 70,
      },
    ]),
      (this.cart = JSON.parse(window.localStorage.getItem("cart-list")) || []);
    // (this.cartSum = window.localStorage.getItem("cart-sum") || 0);
    // (this.cartSum = 0);
  },
  methods: {
    addToCart(id) {
      const product = this.catalog.find((item) => item.id == id);
      this.cart.push(product);
      // this.CartSum += product.price;
      // console.log(this.CartSum);
      window.localStorage.setItem("cart-list", JSON.stringify(this.cart));
      // window.localStorage.setItem("cart-sum", this.CartSum);
    },
    removeFromCart(id) {
      const indx = this.cart.findIndex((item) => item.id == id);
      // this.CartSum = this.CartSum - this.cart[indx].price;
      // if (this.CartSum < 0) {
      //   this.CartSum = 0;
      // }
      // console.log(this.CartSum);
      this.cart.splice(indx, 1);
      window.localStorage.setItem("cart-list", JSON.stringify(this.cart));
      // window.localStorage.setItem("cart-sum", this.CartSum);
    },
  },
};
</script>

<style lang="scss">
</style>
