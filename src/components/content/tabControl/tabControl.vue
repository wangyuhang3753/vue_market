<template>
    <div class="tabControl">
            <div class="tabControlItem" v-for="(item,index) in titles" :key="index" :class="{active:index===currentIndex}" @click="tabClick(index)">
                    <span>{{item}}</span>
            </div>
    </div>
</template>

<script>
export default {
    name:'tabControl',
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }

        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        tabClick(index){
            this.currentIndex=index
            // 父传子props，子传父$emit
            this.$emit('tabClick',index)
        }
    }
}
</script>
<style>
   .tabControl{
       display: flex;
       text-align: center;
       font-size: 14px;
       z-index: 10;
   }
   .tabControlItem{
       flex: 1;
       height: 44px;
       line-height: 44px;
   }
   .active{
       color: palevioletred;
       
   }
   .active span{
        border-bottom: 3px solid palevioletred;
   }
   .tabControlItem span{
       padding: 3px;
   }
</style>