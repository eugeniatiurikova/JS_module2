<template>
  <div><header>
<button class="topbutton" v-on:click="modalOpen">Show cart ({{ cart.length }})</button></header>
    <div class="modal" v-if="isModalOpened">
      <button class="topbutton" v-on:click="modalClose">Close</button>
      <ul class="cartlist">
      <li
        v-bind:key="index"
        v-for="(item, index) of cart"
      >
        <p><button class="topbutton cartclose" v-on:click="removeFromCart(item)">[x]</button> {{ item.title }}: {{ item.price }}₽</p>
      </li>
    </ul>
    <p>Total: <b>{{ CartSum }}</b>₽</p>
    </div>
    <ul class="showcase">
      <li
        class="goods-item"
        v-bind:key="index"
        v-for="(item, index) of catalog"
      >
        <h3>{{ item.title }}</h3>
        <p>{{ item.price }}</p>
        <button v-on:click="addToCart(item)">Add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpened: false,
      CartSum: 0,
      cart: [],
      catalog: [
        { id: 1, title: "Jacket white", price: 336 },
        { id: 2, title: "Hat red", price: 116 },
        { id: 3, title: "Socks orange", price: 970 },
        { id: 4, title: "Jacket white", price: 386 },
        { id: 5, title: "Shirt black", price: 262 },
        { id: 6, title: "Jacket white", price: 482 },
        { id: 7, title: "Shoes black", price: 237 },
        { id: 8, title: "Hat orange", price: 570 },
        { id: 9, title: "Hat green", price: 279 },
        { id: 10, title: "Shirt orange", price: 441 },
        { id: 11, title: "Hat white", price: 778 },
        { id: 12, title: "Hat white", price: 938 },
        { id: 13, title: "Shirt red", price: 145 },
        { id: 14, title: "Jacket green", price: 730 },
        { id: 15, title: "Jacket black", price: 234 },
        { id: 16, title: "Hat black", price: 667 },
        { id: 17, title: "Hat white", price: 675 },
        { id: 18, title: "Hat orange", price: 574 },
        { id: 19, title: "Hat red", price: 558 },
        { id: 20, title: "Hat orange", price: 382 },
      ],
    };
  },
  
  methods: {
    modalOpen() {
      if (!this.isModalOpened) {
        this.isModalOpened = true;
      } else {
        this.isModalOpened = false;
      }
    },

    modalClose() {
      this.isModalOpened = false;
    },

    addToCart(item) {
        this.cart.push(item);
        this.CartSum += item.price;
    },

    removeFromCart(item) {
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i] == item) {
          this.cart.splice(i, 1);
          this.CartSum = this.CartSum - item.price;
        }
      }
    },

    mounted() {
      console.log("Init");
      // здесь обращение к серверу, запрос данных и тд
    },
  },
};
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  padding-top: 30px;
  font-family: sans-serif;
  background-color: #e5e5e5;
}

.modal {
  background: rgb(223, 223, 223);
  border: 2px solid #fff;
  border-radius: 9px;
  position: absolute;
  top: 100px;
  left: 25px;
  padding: 10px 20px 20px 20px;
  box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
}

header {
  padding-left: 20px;
}

h3 {
  padding-bottom: 15px;
  &:hover {
    color: #cf1c1c;
  }
}

button {
  background: #d9e6df;
  cursor: pointer;
  padding: 10px;
  margin-top: 10px;
  border-radius: 3px;
  border: none;
}

.topbutton {
  background: #fff;
}
.cartclose {
  padding: 3px;
  margin-right: 10px;
}

ul {
  padding: 10px;
  list-style: none;
}
.cartlist {
  padding-left: 0;
  padding-bottom: 20px;
}

.showcase {
  display: flex;
  flex-wrap: wrap;

  p {
    color: gray;
    &::before {
      content: "Price: ";
    }
    &::after {
      content: "₽";
    }
  }
}

.goods-item {
  width: 200px;
  margin: 10px;
  padding: 10px;
  background: #fff;
  border-radius: 12px;
}
</style>
