<template>
  <section class="feedback">
    <h2 class="hidden">Feedback</h2>
    <div class="container feedback_inside">
      <div class="feedback_reference">
        <img src="/img/feedback_avatar.png" alt="face" />
        <p class="reference_text">
          “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
          <i>a pulvinar purus condimentum</i>“
        </p>
      </div>
      <div class="feedback_form_wrap">
        <h3 class="subscribe_title">
          Subscribe<br />
          <span class="subscribe_title_small"
            >for our newsletter and promotion</span
          >
        </h3>
        <form action="#" method="post" class="feedback_form">
          <input
            class="feedback_input feedback_email"
            type="email"
            required
            placeholder="Enter Your Email"
          /><button class="feedback_input feedback_subscribe" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Feedback",
};
</script>

<style>
</style>