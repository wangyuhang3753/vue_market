<template>
    <div>
      <el-carousel height="170px">
        <el-carousel-item v-for="item in banners" :key="item.index" >
          <a :href="item.link">
            <img :src="item.image" @load="swiperImageLoad" />
            </a>
           <!-- 循环图片 -->
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
export default {
    name:'swiper',
    data(){
        return{
          isLoad:false
        }
    },
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }

        }
        
    },
    methods:{
     swiperImageLoad(){
       if(!this.isLoad)
       this.$emit("swiperImageLoad")
       this.isLoad=true
     }
    }
}
</script>
<style scoped>
 
img {
width:100%;
}
</style>
