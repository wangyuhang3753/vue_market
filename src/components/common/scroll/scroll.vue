<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {
      probeType:{
        type:Number,
        default:0
      },
      pullupLoad:{
        type:Boolean,
        default:false
      }
      // probeType: {
      //   type: Number,
      //   default: 0
      // },
      // pullUpLoad: {
      //   type: Boolean,
      //   default: false
      // }
    },
    data() {
      return {
        scroll: null,
        message: '哈哈哈'
      }
    },
    mounted() {
      // 1.创建BScroll对象
      //this.$refs.wrapper获取当前页面的wrapper
      //后面多加对象就要多传参数，导致scroll无效
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
        probeType:this.probeType,
        pullUpLoad:this.pullupLoad,
        //首次加载better-scroll不能滚动的原因是:better-scroll的属性disableTouch属性默认为true,改为false就好了
        disableTouch:false
      })
      this.scroll.on('scroll',(position)=>{
        // console.log(position);
        this.$emit('scroll',position)
      })
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })
      // console.log(this.scroll);
      // 2.监听滚动的位置
      // this.scroll.on('scroll', (position) => {
      //   // console.log(position);
      //   this.$emit('scroll', position)
      // })

      // 3.监听上拉事件
      // this.scroll.on('pullingUp', () => {
      //   this.$emit('pullingUp')
      // })
    },
    methods: {
      // scrollTo(x, y, time=300) {
      //   this.scroll.scrollTo(x, y, time)
      // },
      // finishPullUp() {
      //   this.scroll.finishPullUp()
      // }
      refresh(){
         this.scroll&&this.scroll.refresh()


      },
      scrollTo(x,y,time=300){
        this.scroll&&this.scroll.scrollTo(x,y,time)
      },
      //计算机没有黑魔法，有错误一定是代码问题
      finishPullUp(){
        this.scroll.finishPullUp()
      },
      getScrollY(){
        return this.scroll?this.scroll.y:0
      }
    }
  }
</script>

<style scoped>

</style>
