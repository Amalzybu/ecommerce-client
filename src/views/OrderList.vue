<template>
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
      
  <OrderRaw v-for="(item, index) in items"
                    :key="index"
                    :order="item" />
  </tbody>
</table>
</div>
</template>

<script>
import axios from 'axios';
import OrderRaw from '../components/orders/OrderRaw.vue'
export default{
components: {
    OrderRaw,
    
  },
data()
  {
   
    return {
      items:null,
     
    }
    
  },
   mounted () {


    axios
      .get('http://amallama.alwaysdata.net/api/customer/orders',{ 
                      
            headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':'*',
            "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization",
            'Content-type': 'application/json',
            'Authorization': `Bearer ${this.getUser.accessToken}`
            }
      })
      .then(response => {
        this.items = response.data.data.orders
        // console.log("count "+JSON.stringify(response.data.data.orders))
      }).catch(function (error) {
        console.log("error"+error)
        alert("user not exist");
      });
  },
  computed:{
     
        getUser() {
            return this.$store.getters.getUser
        }
    },
  }
</script>
