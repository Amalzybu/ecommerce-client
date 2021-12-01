<template>
<div class="col">
                <div class="card shadow">
                    <div class="card-body">
                        <div class="border rounded d-flex justify-content-center align-items-center mb-4" style="height: 50px;">
                            <h4>Login</h4>
                        </div>
                        <form @submit.prevent="submit" >
                         
                            <div class="form-row">
                                <div class="col">
                                    <div class="form-group"><label for="email">Email</label><input class="form-control" type="email" placeholder="Email" name="email"  v-model="email" ></div>
                                    <span style=" color:red;" v-if="v$.email.$error">
                                            {{ v$.email.$errors[0].$message }}
                                    </span>
                                </div>
                                
                            </div>
                            <div class="form-row">
                                <div class="col">
                                    <div class="form-group"><label for="email">Password</label><input class="form-control" type="password" placeholder="Password" name="password"  v-model="password" ></div>
                                    <span style=" color:red;" v-if="v$.password.$error">
                                        {{ v$.password.$errors[0].$message }}
                                    </span>
                                </div>
                                
                            </div>
                            
                            <div class="form-row">
                              
                                <div class="col d-flex d-xl-flex justify-content-center align-items-end">
                                    <div class="form-group"><button class="btn btn-primary d-flex" type="submit">SignUp</button>
                                    
                                    </div>
                                   
                                </div>
                                  
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
</template>
<script>
// import { reactive, computed } from "vue";
import useValidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import axios from 'axios';
export default{
    name:'Login',
   
    data(){
        return{
            v$: useValidate(),
            email:null,
            password: null
        }
    },
    methods:{

                
           

        submit(){
            console.log("fff");
            this.v$.$validate() // checks all inputs
            if (!this.v$.$error) { // if ANY fail validation
                // alert('Form successfully submitted.')
                    axios.post('http://amallama.alwaysdata.net/api/customer/signin', 
                    {
                        email:this.email,
                        password:this.password
                    }
                    ,{   
                        
                        headers: {
                        'Content-type': 'application/json',
                        }
                    }).then(response => {
                        console.log("data "+JSON.stringify(response.data))
                        if(response.data.id){
                            this.$store.commit('storeUser',response.data)
                            this.$router.push('/') 
                        }
                        
                       
                    }).catch(function (error) {
                        console.log("error"+error)
                        alert("user not exist");
                      });
                }
        }
    },
    validations() {
        return {
            email:{ required, email },
            password: { required, minLength: minLength(6) }
        };
      }
    
   
}

</script>    