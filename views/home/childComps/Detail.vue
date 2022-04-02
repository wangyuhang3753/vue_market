<template>
    <div class="detail" >
        <detail-nav-bar ref="navbar" class="navbar" @titleClick='titleClick'></detail-nav-bar>
        <scroll class="content" ref="scroll"  :probe-type="3"  @scroll='scrollposition'>
        <detail-swiper class="detailSwiper" @imagesLoad='imagesLoad' :topImages="topImages"></detail-swiper>
        <detail-info :goods="goods"/>
        <detail-shop :shopInfo="shop"/>
        <detail-comment-info ref="commentInfo" :commentInfo="commentInfo"/>
        <detail-goods-info :goodsInfo="goodsDetail" @detailImageLoad='detailImageLoad'/>
        <detail-param-info ref="paramInfo" :paramInfo="goodsParam"></detail-param-info>
        <good-list ref="recommend" :goods="recommendInfo"/>
        </scroll>

        <backtop @click.native="backtopClick" v-show="currentBack"/>
        <detail-bottom-bar @addToCart="addToCart"/>
            <div>

    </div>
    </div>

            
</template>
<script>
import{Message} from 'element-ui'
import Scroll from '../../../src/components/common/scroll/scroll.vue';
import Backtop from '../../../src/components/content/backTop/backtop.vue';
import GoodList from '../../../src/components/content/goods/GoodList.vue';
import {getDetail,goodsInfo,shop,GoodsParam,getRecommend} from './../../../network/detail'
import DetailBottomBar from './DetailBottomBar.vue';
import DetailCommentInfo from './DetailCommentInfo.vue';
import DetailGoodsInfo from './DetailGoodsInfo.vue';
import DetailInfo from './DetailInfo.vue';
import DetailNavBar from './detailNavBar.vue';
import DetailParamInfo from './detailParamInfo.vue';
import DetailShop from './DetailShop.vue';
import DetailSwiper from './detailSwiper.vue';
export default {
  components: { DetailNavBar, DetailSwiper, DetailInfo, DetailShop, Scroll, DetailParamInfo, DetailGoodsInfo, DetailCommentInfo, GoodList, DetailBottomBar, Backtop },
    name:'Detail',
    data(){
        return{
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            goodsParam:{},
            goodsDetail:{},
            commentInfo:{},
            recommendInfo:[],
            ImageLoadListener:null,
            themeIndex:[],
            getThemeTopy:null,
            themeIndexCopy:[],
            currentBack:false
            }
        
    },
    created(){
        //注意路由传参字符串的命名
        // console.log(this.$route.params.id);
        this.iid=this.$route.params.id
        // 2.根据iid请求详情数据
        getDetail(this.iid).then(res=>{
            console.log(res);
         this.topImages=res.result.itemInfo.topImages
        //  console.log(this.topImages);
        //获取商品基本信息.实例化类对象
        this.goods=new goodsInfo(res.result.itemInfo,res.result.columns,res.result.shopInfo.services);
        this.shop=new shop(res.result.shopInfo)
        this.goodsParam=new GoodsParam(res.result.itemParams.info,res.result.itemParams.rule)
        this.goodsDetail=res.result.detailInfo
        //获取评论信息
        if(res.result.rate.list)
        {
        this.commentInfo=res.result.rate.list[0]
        }

       
        })
         getRecommend().then(res=>{
             this.recommendInfo=res.data.list
         console.log(this.recommendInfo);
        })
        //对获取模块的offsetTop进行防抖操作
        this.getThemeTopy=this.debounce(()=>{
            this.themeIndex=[]
            this.themeIndex.push(0)
             this.themeIndex.push(this.$refs.paramInfo.$el.offsetTop);
             this.themeIndex.push(this.$refs.commentInfo.$el.offsetTop);
             this.themeIndex.push(this.$refs.recommend.$el.offsetTop);
            //  console.log(this.themeIndex);
        },200)

    },
    methods:{
        imagesLoad(){
                this.$refs.scroll.refresh()
        },
        //防抖函数
          debounce(func,delay){
          let timer=null
          return function(...args){
            if(timer)clearTimeout(timer)
            timer=setTimeout(() => {
              func.apply(this,args)
            }, delay);
          }
          },
          detailImageLoad()
          {
             const refresh=this.debounce(this.$refs.scroll.refresh,200)
             refresh()
       
             this.getThemeTopy()
           
         },
         //点击不同的标题,定位到不同的区域
         titleClick(index)
         {
            //  switch(index)
            //  {
            //    case 0:this.themeIndex[0]=0;break;
            //    case 1:this.themeIndex[1]=this.$refs.paramInfo.$el.offsetTop;break;
            //    case 2:this.themeIndex[2]=this.$refs.commentInfo.$el.offsetTop;break;
            //    case 3:this.themeIndex[3]=this.$refs.recommend.$el.offsetTop;break;
            //  }
             this.$refs.scroll.scrollTo(0,-this.themeIndex[index]+44,300)
             
         },
         scrollposition(position)
         {
            //  console.log(-this.themeIndex[0]);
             //监听不到position是因为没有传入probetype
            //  console.log(position.y);
            if(position.y<=-this.themeIndex[0]+200&&position.y>-this.themeIndex[2]+44)
            {
                this.$refs.navbar.currentIndex=0
            }
            else if(position.y<=-this.themeIndex[2]+44&&position.y>-this.themeIndex[1]+44)
            {
                this.$refs.navbar.currentIndex=2
            }
            else if(position.y<=-this.themeIndex[1]+44&&position.y>-this.themeIndex[3]+44)
            {
                this.$refs.navbar.currentIndex=1
            }
            else{
                this.$refs.navbar.currentIndex=3
            }
            
            -position.y>818-44?this.currentBack=true:this.currentBack=false
            
         },
         backtopClick(){
             this.$refs.scroll.scrollTo(0,0,500)
         },
         addToCart(){
            
            
             const product={}
             product.image=this.topImages[0]
             product.title=this.goods.title
             product.desc=this.goods.desc
             product.price=this.goods.realPrice
             product.iid=this.iid
             this.$store.dispatch('addCart',product).then(res=>{
                //  console.log(res);
                this.$message.success(res)
             })
             
             
         }
    },
    mounted(){
            const refresh=this.debounce(this.$refs.scroll.refresh,200)
            this.ImageLoadListener=()=>{
                refresh()
                 
           }
           this.$bus.$on('ItemImageLoad',this.ImageLoadListener)

    },
    destroyed(){
        this.$bus.$off('ItemImageLoad',this.ImageLoadListener)
    }
}
</script>
<style scoped>
        .detail{
            position: relative;
            height: 100vh;
        }
        .navbar{
            position: relative;
                z-index: 9;
                background-color: #fff;
        }

        .content{
            height: calc(100% - 44px);
            /* overflow: hidden; */
            /* position: absolute;
            top: 44px;
            bottom: 49px;
            left: 0;
            right: 0; */
        }
        .mesgBox{
            width: 50px;
            height: 50px;
            margin-top: 500px;
        }
</style>
