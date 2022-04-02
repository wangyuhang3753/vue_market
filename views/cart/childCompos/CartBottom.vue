<template>
    <div class="CartBottom">
        <div class="AllChecked  son">
            <el-checkbox v-model="checked" @click.native="AllChecked" >全选</el-checkbox>
        </div>
        <div class="CalcAll son">
            总计:￥{{AllCalc}}
        </div>
        <div class="ToCount  son">
           <p>
               去结算({{cartLength}})
               </p> 
        </div>
    </div>
</template>
<script>
export default {
    name:'CartBottom',
    data(){
        return{
            AllCalc:0,
            checked:false,
            ClickTimes:0
        }
    },
    computed:{
        cartLength(){
                return this.$store.state.cartList.length
                }
            },
            methods:{
                /*el-checkbox本来没有click事件，要用只能加.native用原生的*/
                AllChecked(){
                        this.ClickTimes+=1
                        if(this.ClickTimes%2===1){
                            for(let i=0;i<this.$store.state.cartList.length;i++){
                                this.$store.state.cartList[i].checked=true;
                                this.AllCalc+=parseInt(this.$store.state.cartList[i].price)*this.$store.state.cartList[i].count
                            }
                            this.checked=!this.checked
                        }
                        else{
                             for(let i=0;i<this.$store.state.cartList.length;i++){
                                this.$store.state.cartList[i].checked=false;
                                this.AllCalc-=parseInt(this.$store.state.cartList[i].price)*this.$store.state.cartList[i].count
                            }
                            this.checked=!this.checked
                        }
                }
            }
                
        

}
</script>
<style scoped>
.CartBottom{
  height: 40px;
    display: flex;
  position: relative;
  background-color:lightgray;
}
.AllChecked{
    width: 50px;
    display: flex;
    margin-left: 10px;
    align-items: center;
}
.son{
    flex: 1;
}
.CalcAll{
    margin-top: 10px;
}
.ToCount{
     /* margin-top: 10px; */
     background-color: red;
}
.ToCount p{
    margin-top: 10px;
    margin-left: 30px;
}
</style>