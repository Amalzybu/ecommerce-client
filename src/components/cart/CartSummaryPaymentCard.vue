<template>
  <div class="card shadow">
    <div class="card-body">
      <div class="row">
        <div class="col">
          <p>Product Cost</p>
        </div>
        <div class="col text-right">
          <p><i class="fa fa-usd"></i>{{ cart_total.toFixed(2) }}</p>
        </div>
      </div>
      <hr style="background-color: #323232" />
      <div class="row">
        <div class="col">
          <p>Shipping Cost</p>
        </div>
        <div class="col text-right">
          <p><i class="fa fa-usd"></i>0</p>
        </div>
      </div>

      <hr style="background-color: #323232" />
      <div class="row">
        <div class="col">
          <p style="font-size: 18px"><strong>Total</strong></p>
        </div>
        <div class="col text-right">
          <p style="font-size: 18px">
            <i class="fa fa-usd"></i
            ><strong>{{ cart_total.toFixed(2) }}</strong>
          </p>
        </div>
      </div>
      <hr style="background-color: #323232" />
      <form>
        <div class="form-row">
          <div class="col">
            <div class="form-group">
              <input
                class="form-control"
                type="text"
                placeholder="Discount code"
              />
            </div>
          </div>
          <div class="col text-right">
            <button class="btn btn-outline-dark btn-block" type="button">
              Apply Code
            </button>
          </div>
        </div>
      </form>
      <hr style="background-color: #323232" />
      <div class="row" v-if="cart_total > 0">
        <div class="col-12 col-sm-6">
          <button class="btn btn-outline-dark btn-block" type="submit">
            Cash On Delivery
          </button>
        </div>
        <div v-if="get_user" class="col text-right">
          <router-link to="/address"
            ><button class="btn btn-primary btn-block" type="button">
              Pay Now
            </button></router-link
          >
        </div>
        <div v-else class="col text-right">
          <router-link to="/login"
            ><button class="btn btn-primary btn-block" type="button">
              Login
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],

  computed: {
    cart_total() {
      return this.$store.getters.cartTotal;
    },
    item_cost() {
      return this.product.price * this.product.quantity;
    },
    get_user() {
      return this.$store.getters.getUser;
    },
  },
};
</script>

