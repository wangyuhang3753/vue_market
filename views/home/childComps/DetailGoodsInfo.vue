<template>
    <div class="detailGoodsInfo" v-if="Object.keys(goodsInfo).length!==0">
            <div class="info-desc clear-fix">
            <div class="start">
            </div>
            <div class="desc">{{goodsInfo.desc}}</div>
            <div class="end"></div>
            </div>
            <div class="info-key">{{goodsInfo.detailImage[0].key}}</div>
        <!--v-if解决页面正常显示，但是控制台报错问题，因为传过来的是空对象，所以报错，那么需要用v-if判断对象是否有值了，有了才能加载-->
        <div v-for="(item,index) in goodsInfo.detailImage[0].list" :key="index">
            <img :src="item" alt="" @load="detailImageLoad">
        </div>
    </div>
</template>
<script>
export default {
    name:'detailGoodsInfo',
    props:{
        goodsInfo:{}
    },
    data(){
            return {
                counter:0,
                imagesLength:0
            }
    },
    methods:{
          detailImageLoad(){
            this.$emit('detailImageLoad')
          }


        }
    // },
    //watch监听某一个属性的变化
    // watch:{
    //     detailInfo(){
    //         this.imagesLength=this.goodsInfo.detailImage[0].list.length
    //     }
    // }
}
</script>
<style scoped>
 .goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-desc {
    padding: 0 15px;
  }

  .info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

  .info-desc .start {
    float: left;
  }

  .info-desc .end {
    float: right;
  }

  .info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }

  .info-desc .end::after {
    right: 0;
  }

  .info-desc .desc {
    padding: 15px 0;
    font-size: 14px;
  }

  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }

  .info-list img {
    width: 100%;
  }
</style>
