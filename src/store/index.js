import { createStore } from 'vuex'


function updateLocalStorage(cart){
  localStorage.setItem('cart',JSON.stringify(cart))
}

function updateLocalStorageUser(user){
  localStorage.setItem('user',JSON.stringify(user))
}

export default createStore({
  state: {
    cart:[],
    user:null

  },
  getters:{
    productQuantity: state => product =>{
      const item = state.cart.find(i=>i.id==product.id)
      if(item) return item.quantity
      else return null
    },

    cartItems:state =>{
      return state.cart
    },
    cartTotal:state=>{
      return state.cart.reduce((a,b)=> a+(b.price * b.quantity),0)
    },

    getUser:state=>{
      return state.user
    }



    

  },
  mutations: {
    addToCart(state,product){
      let item =state.cart.find(i=>i.id===product.id)
      if(item){
        item.quantity++
      }
      else{
        state.cart.push({...product,quantity:1})
      }

      updateLocalStorage(state.cart)
    },
    removeFromCart(state,product){
      let item =state.cart.find(i=>i.id===product.id)
      if(item){
        if(item.quantity>1){
          item.quantity--
        }
        else{
          state.cart = state.cart.filter(i=>i.id!==product.id)
        }
        
      }
     
      updateLocalStorage(state.cart)
    },

    storeUser(state,user){
      state.user = user
      updateLocalStorageUser(state.user)

    },

    removeUser(state){
      state.user = null
      updateLocalStorageUser(state.user)

    },
    removeItemFromCart(state,product){
      let item =state.cart.find(i=>i.id===product.id)
      if(item){
        
          state.cart = state.cart.filter(i=>i.id!==product.id)
        
      }
     
      updateLocalStorage(state.cart)
    },
    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem('cart')
      const user = localStorage.getItem('user')
      if(cart){
        state.cart = JSON.parse(cart)
      }

      if(user){
        state.user = JSON.parse(user)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
