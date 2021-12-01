const { default: items } = require("../data/items");

<template>
  <div class="container mt-2">
    <div class="row">
      <div class="col-12 col-lg-6">
        <CartItemCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
      <div class="col-12 col-lg-6">
        <CartSummaryPaymentCard />
      </div>
    </div>
  </div>
</template>

<script>
import CartItemCard from "../components/cart/CartItemCard.vue";
import CartSummaryPaymentCard from "../components/cart/CartSummaryPaymentCard.vue";
export default {
  components: {
    CartItemCard,
    CartSummaryPaymentCard,
  },
  computed: {
    products() {
      return this.$store.getters.cartItems;
    },
  },
};
</script>


