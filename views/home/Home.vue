<template>

<div  id="home" class="wrapper"  ref="home">
  <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
   <tab-control class="tabControl1" :titles="['流行','新款','精选 ']" @tabClick="tabClick" ref="tabControl1" v-show="isTabFixed"/>
  <scroll class="content"  ref="scroll" :probe-type="3" :pullup-load="true" @pullingUp="loadmoregood" @scroll="scrollposition">
  <homeSwiper class="swiper" :banners="banners" @swiperImageLoad="swiperImageLoad" ></homeSwiper>
  <recommend-views :recommends="recommends"/>
  <feature/>
  <tab-control class="tabControl2" :titles="['流行','新款','精选 ']" @tabClick="tabClick" ref="tabControl2"/>
  <good-list ref="goodslist" :goods="goods[currentType].list"></good-list>
  </scroll>
    <!-- 监听组件根元素的原生时间需要加一个native -->
  <backtop @click.native="backtopClick" v-show="currentBack"/>

</div>


</template>

<script>
// import swiper from "../../src/components/common/swiper/swiper"
import NavBar from "components/common/navbar/NavBar"
import {getHomeMultidata,getHomeGoods} from "../../network/home"
import homeSwiper from './childComps/HomeSwiper'
import RecommendViews from './childComps/recommendViews'
import Feature from './childComps/feature'
import TabControl from 'components/content/tabControl/tabControl'
import GoodList from 'components/content/goods/GoodList.vue'
import Scroll from 'components/common/scroll/scroll.vue'
import Backtop from 'components/content/backTop/backtop.vue'
  export default {
  components: {NavBar,homeSwiper,RecommendViews,Feature,TabControl,GoodList, Scroll, Backtop },
    name: "Home",
    data(){
      return{
           goodstype:'',
           banners:[],
           recommends:[],
           goods:{
             'pop':{page:0,list:[]},
             'new':{page:0,list:[]},
             'sell':{page:0,list:[]},
           },
           currentType:'pop',
           currentBack:false,
           taboffsetTop:0,
           isTabFixed:false,
           saveY:0,
           itemImageListener:null
      }
    },
    //created比mounted先执行
    created(){
      //请求多个数据
     this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

    },
    activated(){
              // scroll的坐标是负数，所以不可以在前面加负号
              // console.log(this.saveY);
              this.$refs.scroll.scrollTo(0,this.saveY,0)
              this.$refs.scroll.refresh()
              //  console.log(this.$refs.scroll);
    },
    deactivated(){
        this.saveY=this.$refs.scroll.getScrollY()
        this.$bus.$off('ItemImageLoad',this.itemImageListener)
    },
    destroyed(){
        console.log("home destroyed");
    },
    mounted(){

       const refresh=this.debounce(this.$refs.scroll.refresh,200)
      // this.debounce(this.$refs.scroll.refresh)
      //对监听事件进行保存
      this.itemImageListener=()=>{
        refresh()
        
      }
    //监听图片是否加载完成
      this.$bus.$on('ItemImageLoad',this.itemImageListener)
    },
    methods:{
      // 防抖函数
      debounce(func,delay){
          let timer=null
          return function(...args){
            if(timer)clearTimeout(timer)
            timer=setTimeout(() => {
              func.apply(this,args)
            }, delay);
          }
      },
      /*事件监听相关方法*/
      tabClick(index){
          switch(index){
              case 0:
                this.currentType="pop"
                break
                case 1:
                  this.currentType="new"
                  break
                  case 2:
                    this.currentType="sell"
                    break
          }
          this.$refs.tabControl1.currentIndex=index
          this.$refs.tabControl2.currentIndex=index
      },
      backtopClick(){
          this.$refs.scroll.scrollTo(0,0,500)
      },
      scrollposition(position){
        // console.log(position);
          // console.log(position);  position的y是负值，所以要取反
          -position.y>591?this.currentBack=true:this.currentBack=false
          this.isTabFixed=(-position.y)>this.taboffsetTop
      },
      loadmoregood(){
          this.getHomeGoods(this.currentType)
        
           
      },
      swiperImageLoad(){
        this.taboffsetTop=this.$refs.tabControl2.$el.offsetTop
          
      },
    
    
      /*下面都是网络请求的方法*/
      getHomeMultidata(){
           getHomeMultidata().then(res=>{
          console.log(res.data.recommend.list);
          this.banners=res.data.banner.list;
          this.recommends=res.data.recommend.list;
        })

      },
      getHomeGoods(type){
        const page=this.goods[type].page+1;
         getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page+=1
          //finishPullUp,scroll的方法使用的是驼峰命名法
            this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: rgb(218, 61, 61);
    color: #fff;
    /* position: fixed;
            left: 0;
        right: 0;
        top: 0;
        z-index: 9; */
  }
  #home{
    /* padding-top: 44px; */
     height: 100vh;
    position: relative;
  }
  .tabControl{
           /* position: sticky;
           top: 44px; */
            /* bottom: 49px; */
       /* position:sticky;可以直接吸顶 */
       background-color: #fff;
       /* z-index: 8; */
  }
  /* .content { */
    /* overflow: hidden; */

    /* position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0; */
  /* } */

  .content {
  /* height:calc(100% - 93px);
    /* overflow: hidden; */
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tabControl1{
  position: fixed;
  left: 0px;
  right: 0px;
  top: 44px;
  }
</style>
