<template>
  <div class="col-sm-6 col-lg-3">
    <div class="card shadow">
      <img
        class="card-img-top w-100 d-block"
        :src="
          'http://amallama.alwaysdata.net/assets/img/products/Random/' +
          product.image +
          ''
        "
        v-bind:alt="pic"
      />
      <div class="card-body">
        <h6 class="card-title oneLine">
          <strong>{{ product.name }}</strong
          ><br />
        </h6>
        <h6 class="text-muted card-subtitle mb-2">
          Description : {{ description }}
        </h6>
        <div class="row">
          <div class="col-md-6" v-if="itemInCart">
            <button
              class="btn btn-primary btn-block"
              type="button"
              @click="addToCart()"
            >
              <i class="la la-shopping-cart" style="font-size: 24px"></i>
            </button>
          </div>
          <div class="col-md-6" v-else>
            <button
              class="btn btn-outline-dark btn-block"
              type="button"
              @click="addToCart()"
            >
              <i class="icon-handbag" style="font-size: 18px"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product);
    },
  },
  computed: {
    description() {
      return this.product.description.substring(0, 150);
    },
    itemInCart() {
      let items = this.$store.getters.cartItems;
      let flag = items.find((i) => i.id === this.product.id);
      return flag;
    },
  },
};
</script>
