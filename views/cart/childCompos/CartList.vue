<template>
    <div id="shop-item">
      <div class="item-selector">
          <el-checkbox @click.native="checkedChange" class="checkBox" v-model="cartList.checked"></el-checkbox>
      </div>
      <div class="item-img">
        <img  :src="cartList.image"/>
      </div>
      <div class="item-info">
        <div class="item-title">{{cartList.title}}</div>
        <div class="item-desc">{{cartList.desc}}</div>
        <div class="info-bottom">
          <div class="item-price left">{{cartList.price}}</div>
          <div class="item-count right">x{{cartList.count}}</div>
        </div>
      </div>
     </div>   
</template>
<script>
export default {
   name:'CartList',
   data(){
       return {
      
       }
   },
   methods:{
      checkedChange(){
        this.cartList.checked=!this.cartList.checked
        this.$bus.$emit('add',(this.cartList.price*this.cartList.count).toFixed(2))
      }
   },
   props:{
       cartList:{}
   }
}
</script>
<style scoped>
#shop-item{
  width: 100%;
  display: flex;
  font-size: 1px;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-selector{
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-img{
  padding: 5px;
}
.item-img img{
  width: 80px;
  height: 100px;
  border-radius: 5px;
  display: block;
}
.item-info{
  padding: 5px 10px;
  font-size: 17px;
  color: #333;
  position: relative;
  /*超出div的部分隐藏*/
  overflow: hidden;
}
.item-title,.item-desc{
  overflow: hidden;
  /*超出div宽度部分的文字不自动换行*/
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-info .item-desc{
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
.info-bottom{
  /* margin-top: 10px; */
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;

}
.item-price{
  color: orangered;
}

</style>
