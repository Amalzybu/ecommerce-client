<template>
<div class="container mt-5 mb-5">
  <div class="row">
  <div class="col">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Order id</th>
          <th scope="col">Amount</th>
          <th scope="col">Address</th>
          <th scope="col">Items</th>
        </tr>
      </thead>
      <tbody>
        <OrderRaw v-for="(item, index) in items" :key="index" :order="item" />
      </tbody>
    </table>
  </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import OrderRaw from "../components/orders/OrderRaw.vue";
export default {
  components: {
    OrderRaw,
  },
  data() {
    return {
      items: null,
    };
  },
  mounted() {
    let url = process.env.VUE_APP_BASE_URL;
    axios
      .get(url+"api/customer/orders", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept, Authorization",
          "Content-type": "application/json",
          Authorization: `Bearer ${this.getUser.accessToken}`,
        },
      })
      .then((response) => {
        this.items = response.data.data;
        // console.log("count "+JSON.stringify(response.data.data.orders))
      })
      .catch(function (error) {
        console.log("error" + error);
        alert("user not exist");
      });
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
};
</script>
