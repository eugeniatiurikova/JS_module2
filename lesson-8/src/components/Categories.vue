<template>
  <section class="categories">
    <h2 class="hidden">Categories of products</h2>
    <div class="container categories_cards">
      <router-link to="/catalog" class="no_line">
        <div class="categories_card categories_card_woman">
          <p>
            <span class="categories_rate">30% off</span><br />
            <span class="categories_name">for women</span>
          </p>
        </div>
      </router-link>
      <router-link to="/catalog" class="no_line">
        <div class="categories_card categories_card_men">
          <p class="categories_rate">hot deal</p>
          <p class="categories_name">for men</p>
        </div>
      </router-link>
      <router-link to="/catalog" class="no_line">
        <div class="categories_card categories_card_kids">
          <p class="categories_rate">new arrivals</p>
          <p class="categories_name">for kids</p>
        </div>
      </router-link>
      <router-link to="/catalog" class="no_line">
        <div class="categories_card categories_card_accesories">
          <p class="categories_rate">luxurious & trendy</p>
          <p class="categories_name">accessories</p>
        </div>
      </router-link>
    </div>
  </section>
  <div class="container">
    <h2 class="products_title">Featured Items</h2>
    <p class="products_info">
      Shop for items based on what we featured in this week
    </p>
  </div>
</template>

<script>
</script>

<style>
</style>