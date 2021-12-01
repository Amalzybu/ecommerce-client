<template>
  <tr>
    <th scope="row">{{ order.id }}</th>
    <td>{{ order.total }}</td>
    <td>
      {{ order.city }},{{ order.district }},{{ order.landmark }},{{
        order.state
      }},{{ order.pin }}
    </td>
    <td>{{ decodeJson }}</td>
  </tr>
</template>

<script>
export default {
  props: ["order"],

  computed: {
    description() {
      return this.product.description.substring(0, 150);
    },
    decodeJson() {
      let str = "";
      this.order.OrderItems.forEach((element) => {
        str += element.Product.name + " x " + element.quantity + ", ";
      });
      return str;
    },
    method: {},
  },
};
</script>