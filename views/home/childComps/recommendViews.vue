<template>
    <div  class="recommend">
        <div v-for="item in recommends" class="recommenditem"  :key="item.index">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                    <div class="title">{{item.title}}</div>
                </a>
        </div>
    </div>
</template>


<script>

export default ({
        name:"recommondViews",
        props:{
            recommends:{
                type:Array,
                default(){
                    return []
                }
            }
        }
})
</script>
<style scoped>
        .recommend{
            display: flex;
         
             text-align: center; 
             margin-top: 15px;
             height: 100px;
           /* box-shadow: 0 10px 10px rgba(100, 100,100,.1); */
        }
        .recommenditem{
            flex: 1;
     
        }
         .recommenditem img{
             width:65px;
             height: 65px;
         }
         .title{
             margin-top: 10px;
         }
</style>
