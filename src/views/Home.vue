<template>

<div class="carousel slide shadow mt-5" data-ride="carousel" id="carousel-1">
        <div class="carousel-inner">
            <div class="carousel-item active"><img class="w-100 d-block" src="@/assets/img/sliders/slider2.jpg" alt="Slide Image"></div>
            <div class="carousel-item"><img class="w-100 d-block" src="@/assets/img/sliders/alvin-mahmudov-oBT4lJvNMQg-unsplash.jpg" alt="Slide Image"></div>
            <div class="carousel-item"><img class="w-100 d-block" src="@/assets/img/sliders/slider10.jpg" alt="Slide Image"></div>
            <div class="carousel-item"><img class="w-100 d-block" src="@/assets/img/sliders/slider3.jpg" alt="Slide Image"></div>
        </div>
        <div><a class="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><span class="carousel-control-prev-icon"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carousel-1" role="button" data-slide="next"><span class="carousel-control-next-icon"></span><span class="sr-only">Next</span></a></div>
        <ol
            class="carousel-indicators">
            <li data-target="#carousel-1" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-1" data-slide-to="1"></li>
            <li data-target="#carousel-1" data-slide-to="2"></li>
            <li data-target="#carousel-1" data-slide-to="3"></li>
            </ol>
    </div>
    <section>
  <div class="mt-5">
            <div id="app">
            </div>
            <div class="container">
                <div class="col">
                    <h3>Top Products</h3>
                </div>
                <div class="row">
                <ProductDescriptionDrawer
            :product="product"
            :active="active.product_drawer"
            v-on:close-product-drawer="closeProductDrawer($event)"
            />	
                  <ProductSummeryCard 
                    v-for="product in items"
                    :key="product.id"
                    :product="product"
                    v-on:view-product="viewProduct($event)"/>
               
          
                  </div>
  </div>
  </div>
  </section>
</template>

<script>

import ProductSummeryCard from '../components/products/ProductSummeryCard.vue'
import ProductDescriptionDrawer from '../components/products/ProductDescriptionDrawer.vue'
import axios from 'axios';







  


export default 
{
  name: 'Home',
  components: {
    ProductSummeryCard,
    ProductDescriptionDrawer
    
  },
  data()
  {
   
    return {
      items:null,
      product:null,
      active:{
        product_drawer:false
      }
    }
    
  },
   mounted () {


    axios
      .get('http://localhost:3000/api/public/products')
      .then(response => {
        this.items = response.data.data
      })
  },
  methods:
  {
    viewProduct(product){
      this.product=product
      this.active.product_drawer=true
      console.log("product  "+this.product)
    },
    closeProductDrawer(){
      this.active.product_drawer=false
    }

  }
}
</script>


