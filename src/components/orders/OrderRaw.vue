<template>
<tr>
      <th scope="row">{{order.id}}</th>
      <td>{{order.total}}</td>
      <td>{{order.city}},{{order.district}},{{order.landmark}},{{order.state}},{{order.pin}}</td>
      <td>@mdo</td>
    </tr>
</template>

<script>
    export default {
        props: ['order'],
       
        computed:{
            description(){
                return this.product.description.substring(0,150)
            },
           
    }

}
</script>