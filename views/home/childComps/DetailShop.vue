<template>
    <div class="DetailShop">
            <div class="shopTop">
                <img  :src="shopInfo.logo" alt="">
                <span>{{shopInfo.name}}</span>
            </div>
            <div class="shopMiddle">
                <div class="shop-middle-item shop-middle-left">
                    <div class="info-sells">
                        <div class="sells-count">
                            {{shopInfo.sells|sellCountFilter}}
                        </div>
                        <div class="sells-text">
                            总销量
                        </div>
                    </div>
                    <div class="info-goods">
                        <div class="goods-count">
                                {{shopInfo.goodsCount}}
                        </div>
                        <div class="goods-text">
                            全部宝贝
                        </div>
                    </div>
                </div>
                <div class="shop-middle-item shop-middle-right">
                        <table>
                            <tr v-for="(item,index) in shopInfo.score" :key="index">
                                <td>{{item.name}}</td>
                                <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
                                <td class="better" :class="{'better-more':item.isBetter}">{{item.isBetter?"高":"低"}}</td>
                            </tr>
                        </table>
                </div>
            </div>
            <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
            </div>
    </div>
</template>
<script>
export default {
    name:'DetailShop',
    props:{
        shopInfo:{}
    },
    filters:{
        sellCountFilter:function(value){
            if(value<10000)return value;
            //tofixed(1)四舍五入保留小数点后一位
            return (value/10000).toFixed(1)+'万'
        }
    }
}
</script>
<style scoped>
 .DetailShop{
       padding: 0px 8px;
       border-bottom: 5px solid #f2f5f8;
   }
.shopTop{
    line-height: 80px;
    /*display:flex; align-items:center 使div元素垂直居中*/
    display: flex;
    align-items: center;
}
  .shopTop img{

      border: gray solid 1px;
       height: 40px;
       width: 40px;
       border-radius: 50%;
   }
   .shopTop span{
       margin-left: 5px;
   }
    .shopMiddle{
        /* margin-top: 15px; */
        /*并列且垂直居中对齐*/
        display: flex;
        align-items: center;
    }
   .shop-middle-item{
       flex: 1;
   }
   .shop-middle-left{
       display: flex;
       justify-content: space-evenly;
       color: #333;
       text-align: center;
       border-right: solid 1px rgba(0,0, 0, 0.1);
   }
   .sells-count, .goods-count {
    font-size: 18px;
  }

  .sells-text, .goods-text {
    margin-top: 10px;
    font-size: 12px;
  }
  .shop-middle-right{
      font-size: 13px;
      color: #333;
  }
  .shop-middle-right table{
      width: 120px;
      margin-left: 30px;
  }
  .shop-middle-right table td{
      padding: 5px 0;
  }
   .shop-middle-right .score {
    color: #5ea732;
  }

  .shop-middle-right .score-better {
    color: #f13e3a;
  }
   .shop-middle-right .better{
       color: #5ea732;
   }
   .shop-middle-right .better-more{
            color: #f13e3a;
   } 
   .shop-bottom{
       margin-top: 10px;
            text-align: center;
            padding-bottom: 20px;
   }
   .enter-shop{
       /*display: inline-block;设置这个属性后不再独占一行*/
       display: inline-block;
       background-color: lightgray ;
       font-size: 14px;
       width: 120px;
       /* 居中 */
       height: 30px;
       line-height: 30px;
       border-radius: 10px;
   }
</style>