<template>
            <div class="goodlist"  >
                    <good-list-item v-for="item in goods" :goodsItem="item" :key="item.index"/>
            </div>
   
</template>
<script>
import GoodListItem from './GoodListItem.vue'
export default {
    name:"GoodList",
    components:{
        GoodListItem
    },
        props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style>
  .goodlist{
      /* 均等份布局 */
      display: flex;
      /* 根据元素的宽度来决定一行多少个 */
      flex-wrap: wrap;
      /* justify-content是四周留白 */
       justify-content: space-around;
        padding: 2px;
        /* 解决goodlist内容覆盖tabbar和tabcontrol问题：设置z-index，设置显示的优先级 */
        
  }
</style>