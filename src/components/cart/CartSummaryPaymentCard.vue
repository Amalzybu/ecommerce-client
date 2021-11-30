<template>
    <div class="cart-item-card">
        <h3>Cart Total ${{cart_total.toFixed(2)}}</h3>
        
       <button class="view-product-button">Pay by credit card</button>
    </div>
    
</template>

<script>
    export default {
        props: ['product'],
        computed:{
            cart_total(){
                return this.$store.getters.cartTotal
            },
            item_cost(){
                return this.product.price*this.product.quantity
            }
        }
    }
</script>

<style lang="scss">
    .cart-item-card{
        width:90%;
        margin:5%;
        background-color:white;
        box-shadow:0 0 5px gray;
        border-radius: 5px;
        padding:10px;
        text-align:left;

        .header{
            display: flex;
            justify-content: space-around;
        }

        button.view-product-button{
            padding:10px;
            background-color:rgb(79,160,187);
            border:none;
            color:white;
            font-weight:bold;
            font-size:1.15rem;
            border-radius:5px;
            cursor:pointer;
        }
    }
</style>