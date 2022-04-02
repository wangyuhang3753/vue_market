<template>
   
        <el-carousel class="swiperClass">
            <el-carousel-item class="swiperClass" ref="swiperItem" v-for="(item,index) in topImages" :key="index">
                <a href="">
                    <img :src="item" width="30%" height="300" alt="" @load="imagesLoad">
                </a>
            </el-carousel-item>
        </el-carousel>
  
</template>
<script>
export default {
    name:'detailSwiper',
    props:{
        topImages:{
            type:Array,
            default(){
                return []
            }
        },
        goodsInfo:{
            type:Object,
            default(){
                return null
            }
        }
    },
    created(){
        
    //   this.$refs.swiperItem.children[1].width=200
        
        
    },
    methods:{
        imagesLoad(){
            this.$emit('imagesLoad')
        }
    }
    
}
</script>
<style  scoped>
.swiperClass{
    height: 100%;
    overflow: hidden;
}


</style>