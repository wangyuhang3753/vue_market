<template>
    <div class="detailNavBar">
        <nav-bar>
            <div class="backImg" slot="left" @click="backClick">
                <img src="@/assets/img/common/back.svg"/>
            </div>
            <div class="title" slot="center">
                <div class="titleItem" v-for="(item,index) in titles"  :key="index"   :class="{active:index===currentIndex}" @click="titleItemClick(index)">
                   <span>{{item}}</span> 
                </div>
            </div>
        </nav-bar>
    </div>
</template>
<script>
import NavBar from '../../../src/components/common/navbar/NavBar.vue'
export default {
  components: { NavBar },
    name:'detailNavBar',
    data(){
        return{
            titles:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    methods:{
        titleItemClick(index){
                this.currentIndex=index
                this.$emit('titleClick',index)
        },
        backClick(){
            this.$router.back()
        }
    }

}
</script>
<style scoped>
  .title{
      display:flex;
       font-size: 14px;
  }
  .titleItem{
        flex: 1;
       
  }
   .active{
       color: palevioletred;
       
   }
  .backImg img{
      margin-top: 12px;
      height: 25px;
  }
 
</style>