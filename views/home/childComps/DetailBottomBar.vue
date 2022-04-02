<template>
    <div class="bottom-bar">
        <div class="bar-item bar-left">
                <div>
                    <i class="icon service"></i>
                    <span class="text">客服</span>
                </div>
                 <div>
                    <i class="icon shop"></i>
                    <span class="text">店铺</span>
                </div>
                 <div>
                    <i class="icon select"></i>
                    <span class="text">收藏</span>
                </div>
        </div>
        <div class="bar-item bar-right">
            <div class="cart" @click="AddToCart">加入购物车</div>
            <div class="buy">购买</div>
        </div>
        <sport-ball ref="ball" class="sport-ball"></sport-ball>
    </div>
</template>
<script>
	import SportBall from 'components/content/sportBall/SportBall'
export default {
  components: { SportBall },
    name:"DetailBottomBar",
    methods:{
        AddToCart(event){
            this.$emit('addToCart')
        }
    }
}
</script>
<style scoped>
.bottom-bar{
    height: 49px;
    position: relative;
    bottom: 49px;
    background-color:white;
    z-index: 1000;
    display: flex;
    text-align: center;
}
.bar-item{
    flex: 1;
    display: flex;
}
.bar-left>div{
    flex: 1;
}
.bar-right>div{
    flex: 1;
}
 .bar-left .text {
    font-size: 13px;

  }
  .bar-right{
      font-size: 15px;
          color: red;
    line-height: 49px;
  }
  .bar-left .icon{
      display: block;
      width: 22px;
      height: 22px;
      margin: 5px auto 3px;
      background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
  }
    .bar-left .service {
    background-position:0 -54px;
  }

  .bar-left .shop {
    background-position:0 -98px;
  }
    .bar-right .cart {
    background-color: #ffe817;
    color: #333;
  }

  .bar-right .buy {
    background-color: #f69;
  }
  .backTop{
    position: absolute;
    left: 225px;
    bottom: 20px;
  }
</style>