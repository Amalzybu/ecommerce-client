<template>

  <nav class="navbar navbar-light navbar-expand-md sticky-top bg-white better-bootstrap-nav-left">
        <div class="container"><a class="navbar-brand" href="index.html"><img class="img-fluid" src="@/assets/img/logo__.png" style="width: 140px;"></a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-2"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div
                class="collapse navbar-collapse" id="navcol-2">
               
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item"><router-link class="nav-link text-center" to="/"><i class="icon-home" style="font-size: 18px;"></i><br></router-link></li>
                    <li class="nav-item dropdown"><a class="dropdown-toggle nav-link text-center" data-toggle="dropdown" aria-expanded="false" href="#"><i class="icon-user" style="font-size: 18px;"></i></a>
                        <div class="dropdown-menu"><a class="dropdown-item" href="my-profile.html"><strong>Nathaly Toledo</strong></a><a class="dropdown-item" href="my-profile.html" style="font-size: 12px;">nathaly_toledo@gmail.com</a>
                            <div class="dropdown-divider"></div><a class="dropdown-item" href="#">Orders List</a><a class="dropdown-item" href="#">Wishlist</a><a class="dropdown-item" href="#">Bag</a><a class="dropdown-item" href="my-profile.html">My Address</a><a class="dropdown-item"
                                href="my-profile.html">My Saved Cards</a>
                            <div class="dropdown-divider"></div><a class="dropdown-item" href="my-profile.html">Edit Profile</a><a class="dropdown-item text-danger" href="#">Log Out</a></div>
                    </li>
                    <li class="nav-item"><a class="nav-link text-center" href="/checkout"><i class="fa fa-bookmark-o" style="font-size: 18px;"></i><br></a></li>
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
{/* import "https://unpkg.com/@bootstrapstudio/bootstrap-better-nav/dist/bootstrap-better-nav.min.css"; */}
{/* import "@/assets/css/Paralax-Hero-Banner.css"; */}
import "@/assets/css/Paralax-Hero-Banner-1.css";
import "@/assets/css/styles.css";
{/* import * from "./assets/javascripts/app.js";
import * from "./assets/js/jquery.min.js";
import * from "./assets/bootstrap/js/bootstrap.min.js";
import * from "./assets/js/Paralax-Hero-Banner.js"; */}


  export default{
    mounted(){
      this.$store.commit('updateCartFromLocalStorage')
    },
    computed:{
      itemCount() {
          return this.$store.getters.cartItems.length
      }
      
  }
  }


      

</script>
