<template>
  <div class="home">
    <nav class="nav-bar"></nav>
    <div class="product">
      <Show :items = "inventory.socks" @updateSelection = "updateSelection"/>
      <div class="product-info">
        <div class= "cart">
            <p>Cart: {{cart}}</p>
        </div>
         <Info name = "Socks" :cart = "cart" @updateCart = "updateCart()"/>
      </div>
     
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Show from '@/components/Show.vue'
import Info from '@/components/Info.vue'

export default {
  name: 'home',
  components: {
    Show,
    Info
  },
  data () {
    return {
      inventory: {
                socks: [
                    {
                    id: 1,
                    stock: 10,
                    productImage: 'greensocks.png',
                    color: 'green'
                    },
                    {
                    id: 2,
                    stock: 0,
                    productImage: 'bluesocks.png',
                    color: 'blue'
                   }
                ]
            },
      cart: 0,
      selected: 0
    }
  }, 
  methods: {
    updateCart () {
      if (this.inventory.socks[this.selected].stock > 0) 
      {
        this.inventory.socks[this.selected].stock -= 1;
        this.cart+=1
      } else {
        alert ('No more available')
      }
    },
    updateSelection (newSelection) {
      this.selected = newSelection
    }
  }
}
</script>

<style scoped>
  .nav-bar {
    background: linear-gradient(-90deg, #84CF6A, #16C0B0);
    height: 60px;
    margin-bottom: 15px;
  }
 .product {
    display: flex;
    flex-flow: wrap;
    padding: 1rem;
  }
  .product-info {
    margin-top: 10px;
    width: 50%;
  }
  .cart {
    margin-left: 90%;
    float: right;
    border: 1px solid #d8d8d8;
    padding: 5px 20px;
  }
  
</style>

