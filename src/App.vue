<template>

  <nav class="navbar navbar-light navbar-expand-md sticky-top bg-white better-bootstrap-nav-left">
        <div class="container"><a class="navbar-brand" href="index.html"><img class="img-fluid" src="@/assets/img/logo__.png" style="width: 140px;"></a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-2"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div
                class="collapse navbar-collapse" id="navcol-2">
               
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item"><router-link class="nav-link text-center" to="/"><i class="icon-home" style="font-size: 18px;"></i><br></router-link></li>
                    <DropDown v-if="get_user" />
                    <DropDownNoUser v-if="!get_user" />
                    <li class="nav-item"><router-link class="nav-link text-center" to="/cart"><i class="icon-bag" style="font-size: 18px;"></i><span class="badge badge-dark">{{itemCount}}</span><br></router-link></li>
                </ul>
        </div>
        </div>
    </nav>
   
 
  <router-view/>
</template>
<script>

{/* import "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&amp;display=swap"; */}
import "@/assets/bootstrap/css/bootstrap.min.css";
import "@/assets/fonts/fontawesome-all.min.css";
import "@/assets/fonts/ionicons.min.css";
import "@/assets/fonts/line-awesome.min.css";
import "@/assets/fonts/material-icons.min.css";
import "@/assets/fonts/simple-line-icons.min.css";
import "@/assets/fonts/fontawesome5-overrides.min.css";
import "@/assets/css/Footer-Dark.css";
import "@/assets/css/Newsletter-Subscription-Form.css";

import "@/assets/css/Paralax-Hero-Banner-1.css";
import "@/assets/css/styles.css";
import "@/assets/bootstrap/js/bootstrap.min.js";
import DropDown from './components/header/DropDown.vue'
import DropDownNoUser from './components/header/DropDownNoUser.vue'





  export default{
    mounted(){
      this.$store.commit('updateCartFromLocalStorage')
    },
    data: function() {
      return {
              services:[
                  {
                      title:"Web",
                      link:'#'
                  },
                  {
                      title:"Design",
                      link:'#'
                  },
                  {
                      title:"Videos",
                      link:'#'
                  }
              ]
      }
    },
    components:{
      DropDown,
      DropDownNoUser
    },
    computed:{
      itemCount() {
          return this.$store.getters.cartItems.length
      },
      get_user(){
        return this.$store.getters.getUser
      },
      
      
  }
  }


      

</script>
<style>
   @import "https://unpkg.com/@bootstrapstudio/bootstrap-better-nav/dist/bootstrap-better-nav.min.css";
   @import "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&amp;display=swap"
</style>
