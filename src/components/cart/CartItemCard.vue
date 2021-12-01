<template>

<div class="card shadow mb-3">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-4 text-center"><img class="img-fluid border rounded shadow" :src="'http://amallama.alwaysdata.net/assets/img/products/Random/'+product.image" v-bind:alt="pic"></div>
                            <div class="col">
                                <p class="mt-2"><strong>{{product.name}}</strong><span class="text-success"><strong>&nbsp;</strong><i class="material-icons" style="font-size: 16px;">verified_user</i><strong>&nbsp;Verified Seller</strong></span></p>
                                <p class="mt-2"><i class="fa fa-usd"></i><strong>{{product.price}}</strong></p>
                                <div class="row">
                                    <div class="col-12 col-sm-6">
                                        <form>
                                            <div class="form-group"><input class="form-control" type="number" placeholder="Qty" min="1"   v-model="mutableList.quantity" name="qty"></div>
                                        </form>
                                    </div>
                                    <div class="col"><button class="btn btn-outline-dark btn-block" @click='removeItemFromCart()' >Buy Later</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

    
</template>

<script>
    export default {
        props: ['product'],
        data: function () {
            return {
                mutableList: this.product
            }
        },
        methods:{
           
            removeItemFromCart(){
                this.$store.commit('removeItemFromCart',this.product)
            }
        },
        computed:{
            description(){
                return this.product.description.substring(0,120)
            },
            item_cost(){
                return this.product.price*this.product.quantity
            },
            item_quantity(){
                return this.product.quantity
            }
        }
    }
</script>
