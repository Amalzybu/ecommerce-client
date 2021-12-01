<template>
<li class="nav-item dropdown"><a class="dropdown-toggle nav-link text-center" data-toggle="dropdown" aria-expanded="false" @click='toggleShow'><i class="icon-user" style="font-size: 18px;"></i></a>
                    <div v-if="get_user" class="dropdown-menu">
                    
                        <a class="dropdown-item" href="my-profile.html"><strong>{{get_user.email}}</strong></a>
                        <a class="dropdown-item" href="my-profile.html" style="font-size: 12px;">{{get_user.email}}</a>
                            <div class="dropdown-divider"></div>
                            <router-link class="dropdown-item" to="/orderlist">Orders List</router-link>

                           
                            <a class="dropdown-item text-danger" @click="logout" >Log Out</a>
                            
                    </div>

                    <div v-else class="dropdown-menu">
                    
                    <router-link class="dropdown-item" to="/login"><strong>Login</strong></router-link>
                        <router-link class="dropdown-item" to="/register"><strong>Sign Up</strong></router-link>

                    </div>
                     
                      </li>
</template>



<script>
export default {
 computed:{
    get_user(){
        return this.$store.getters.getUser
    },
   
},
methods:{
    logout(){
        this.$store.commit('removeUser')
        
      }
}
}
</script>

