<template>
  <div class="col">
    <div class="card shadow">
      <div class="card-body">
        <div
          class="
            border
            rounded
            d-flex
            justify-content-center
            align-items-center
            mb-4
          "
          style="height: 50px"
        >
          <h4>Delivery address</h4>
        </div>
        <form @submit.prevent="submit">
          <div class="form-row">
            <div class="col">
              <div class="form-group">
                <label for="city">City</label
                ><input
                  class="form-control"
                  type="text"
                  placeholder="First Name"
                  name="city"
                  v-model="city"
                />
              </div>
              <span style="color: red" v-if="v$.city.$error">
                {{ v$.city.$errors[0].$message }}
              </span>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="district">District</label
                ><input
                  class="form-control"
                  type="text"
                  placeholder="District"
                  name="district"
                  v-model="district"
                />
              </div>
              <span style="color: red" v-if="v$.district.$error">
                {{ v$.district.$errors[0].$message }}
              </span>
            </div>
          </div>
          <div class="form-row">
            <div class="col">
              <div class="form-group">
                <label for="Pin">Pin</label
                ><input
                  class="form-control"
                  type="text"
                  placeholder="Pin"
                  v-model="pin"
                />
              </div>
              <span style="color: red" v-if="v$.pin.$error">
                {{ v$.pin.$errors[0].$message }}
              </span>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="Landmark">Landmark</label
                ><input
                  class="form-control"
                  type="text"
                  placeholder="Landmark"
                  v-model="landmark"
                />
              </div>
              <span style="color: red" v-if="v$.pin.$error">
                {{ v$.landmark.$errors[0].$message }}
              </span>
            </div>
          </div>
          <div class="form-row">
            <div class="col">
              <div class="form-group">
                <label for="State">State</label
                ><input
                  class="form-control"
                  type="text"
                  placeholder="State"
                  v-model="vstate"
                />
              </div>
              <span style="color: red" v-if="v$.vstate.$error">
                {{ v$.vstate.$errors[0].$message }}
              </span>
            </div>
          </div>
          <div class="form-row">
            <div
              class="
                col
                d-flex d-xl-flex
                justify-content-center
                align-items-end
              "
            >
              <div class="form-group">
                <button class="btn btn-primary d-flex" type="submit">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import axios from "axios";
export default {
  name: "Login",

  data() {
    return {
      v$: useValidate(),
      city: null,
      district: null,
      pin: null,
      landmark: null,
      vstate: null,
    };
  },
  computed: {
    products() {
      return this.$store.getters.cartItems;
    },
    getUser() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    submit() {
      console.log("fff");
      this.v$.$validate();
      if (!this.v$.$error) {
        let url = process.env.VUE_APP_BASE_URL;
        axios
          .post(
            url + "api/customer/cart-checkout",
            {
              user_id: this.getUser.id,
              city: this.city,
              district: this.district,
              pin: this.pin,
              landmark: this.landmark,
              state: this.state,
              data: this.products,
            },
            {
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Headers":
                  "Origin, X-Requested-With, Content-Type, Accept, Authorization",
                "Content-type": "application/json",
                Authorization: `Bearer ${this.getUser.accessToken}`,
              },
            }
          )
          .then((response) => {
            console.log("data " + JSON.stringify(response.data));
            if (response.data.status == 200) {
              alert("order placed successfully");
              this.$router.push("/");
            }
          })
          .catch(function (error) {
            console.log("error" + error);
            alert("error occured");
          });
      }
    },
  },
  validations() {
    return {
      city: { required },
      district: { required },
      pin: { required },
      landmark: { required },
      vstate: { required },
    };
  },
};
</script>    
