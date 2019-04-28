<template>
    <div class="product-image">
        <img id="imagen" :src="getImgUrl(img)" alt="">
        <div class="container">
            <li id="options" v-for="(item, index) in items">
                <button :id="item.color" class="color-box" :style = "setBackgroundColor(item.color)" @click="selectItem(item.productImage, index)"></button>
            </li>
        </div>
    </div>
   
</template>
<script>
export default {

    props: {
        items: Array,
    },
    
    data() {
        return {
            
            img: 'greensocks.png',
        
        }
    },
    methods: {
         getImgUrl(name) {
            return require('../assets/' + name)
        },
        selectItem(imageName, index){
           this.img = imageName;
           this.$emit('updateSelection', index)
        },
        setBackgroundColor(color){
            return 'background-color: ' + color + ';'
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
  
  .container {
      height: 100%; 
      width:100%;
      font-size: 0;
  }


  img {
    border: 1px solid #d8d8d8;
    width: 70%;
    margin: 10px;
    box-shadow: 0px .5px 1px #d8d8d8;
  }
  
  .product-image {
    width: 80%;
  }
  
  .product-image,
  .product-info {
    margin-top: 10px;
    width: 50%;
  }
  
  .color-box {
    width: 40px;
    height: 40px;
    margin-top: 5px;
    margin-right: 20px;
  }
  
  .cart {
    margin-right: 25px;
    float: right;
    border: 1px solid #d8d8d8;
    padding: 5px 20px;
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
  
  .disabledButton {
    background-color: #d8d8d8;
  }
  
  .review-form {
    width: 400px;
    padding: 20px;
    margin: 40px;
    border: 1px solid #d8d8d8;
  }
  
  input {
    width: 100%;  
    height: 25px;
    margin-bottom: 20px;
  }
  
  textarea {
    width: 100%;
    height: 60px;
  }

  .tab {
    margin-left: 20px;
    cursor: pointer;
  }

  .activeTab {
    color: #16C0B0;
    text-decoration: underline;
  }

</style>
