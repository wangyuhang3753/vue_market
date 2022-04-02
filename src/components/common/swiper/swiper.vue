<template>
    <div>
      <el-carousel height="300px">
        <el-carousel-item v-for="(img,index) in banners" :key="index" >
          <a :href="banners[index].link">
            <img :src="banners[index].image" />
            </a>
           <!-- 循环图片 -->
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
export default {
    name:'swiper',
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }

        }
    }
}
</script>
<style scoped>
 
img {
width:100%;
}
</style>
