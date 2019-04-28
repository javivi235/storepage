<template>
   <div class="product-info">
       
       <div class="product-info">
            <h1>{{name}}</h1>
            <ul>
                <li v-for= "detail in details"> {{ detail }}</li>
            </ul>
            <h1>{{price}}</h1>
            <button @click="addToCart()">Add to Cart</button>
        </div>
    </div> 
    </template>
<script>
export default {
    props: {
        name: String
    },
    data() {
        return {
            details: [
                '80% cotton',
                '20%  polyeste'
            ],
            price: '1.99$',
            
        }
    },
    methods: {
        addToCart(){
            
            this.$emit('updateCart')
        }
    }
}
</script>
<style scoped>
body {
    font-family: tahoma;
    color:#282828;
    margin: 0px;
  }
 
  .product-info {
    margin-top: 10px;
    width: 50%;
  }
  
  button {
    margin-top: 30px;
    border: none;
    background-color: #1E95EA;
    color: white;
    height: 40px;
    width: 100px;
    font-size: 14px;
  } 
  
</style>
