<template>
<div class="col">
                <div class="card shadow">
                    <div class="card-body">
                        <div class="border rounded d-flex justify-content-center align-items-center mb-4" style="height: 50px;">
                            <h4>Register</h4>
                        </div>
                        <form @submit.prevent="submit" >
                            <div class="form-row">
                                <div class="col">
                                    <div class="form-group"><label for="firstName">Name</label><input class="form-control" type="text" placeholder="Name" name="name" v-model="name" ></div>
                                    <span style=" color:red;" v-if="v$.name.$error">
                                            {{ v$.name.$errors[0].$message }}
                                    </span>
                                </div>
                               
                            </div>
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
                                    <div class="form-group"><label for="email">Password</label><input class="form-control" type="password" placeholder="Password" name="password"  v-model="password.password" ></div>
                                    <span style=" color:red;" v-if="v$.password.password.$error">
                                        {{ v$.password.password.$errors[0].$message }}
                                    </span>
                                </div>
                                
                            </div>
                            <div class="form-row">
                                <div class="col">
                                    <div class="form-group"><label for="email">Confirm Password</label><input class="form-control" type="password" placeholder="Confirm Password" name="confirm_password" v-model="password.confirm" >
                                    </div>
                                    <span style=" color:red;" v-if="v$.password.confirm.$error">
                                    {{ v$.password.confirm.$errors[0].$message }}
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
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import axios from 'axios';
export default{
    name:'Login',
   
    data(){
        return{
            v$: useValidate(),
            name:null,
            email:null,
            password: {
                password: null,
                confirm: null,
              }
        }
    },
    methods:{
        submit(){
            console.log("fff");
            this.v$.$validate() // checks all inputs
            if (!this.v$.$error) { // if ANY fail validation
                // alert('Form successfully submitted.')
                    axios.post('http://amallama.alwaysdata.net/api/customer/signup', 
                    {
                        name:this.name,
                        email:this.email,
                        password:this.password.password
                    }
                    ,{   
                        
                        headers: {
                        'Content-type': 'application/json',
                        }
                    }).then(response => {
                        console.log("data "+JSON.stringify(response.data))
                        if(response.data.status==200){
                            this.$router.push('/login') 
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
            name:{required},
            email:{ required, email },
            password: {
                password: { required, minLength: minLength(6) },
                confirm: { required, sameAs: sameAs(this.password.password) },
              }
        };
      }
    
   
}

</script>    