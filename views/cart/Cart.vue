<template>
<div class="cart">
  <nav-bar class="navbar">
      <div slot="center" >
        购物车({{cartLength}})
      </div>
  </nav-bar>
  <scroll class="content" :probe-type="3" ref="scroll">
    <cart-list v-for="(item,index) in cartList" :cartList="item" :key="index"></cart-list>
  </scroll>
  <cart-bottom class="cartBottom"/>
</div>
</template>

<script>
import NavBar from '../../src/components/common/navbar/NavBar.vue'
import Scroll from '../../src/components/common/scroll/scroll.vue'
import CartBottom from './childCompos/CartBottom.vue'
import CartList from './childCompos/CartList.vue'
  export default {
  components: { NavBar, Scroll, CartList, CartBottom },
    name: "Cart",
    data(){
          return {

          }
      },
      computed:{
        cartLength(){
          return this.$store.state.cartList.length
        },
        cartList(){
          return this.$store.state.cartList
        }
        
      },
      activated(){
        this.$refs.scroll.refresh()
      }
    }
  
</script>

<style scoped>
.cart{
  position: relative;
  height: 100vh;
}
 .navbar{
   background-color: rgb(218, 61, 61);
   position: relative;
   color: white;
   font-size: 15;
   z-index: 9;
 }
 .content{
   height: calc(100% - 133px);
 }

</style>
