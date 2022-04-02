import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store=new Vuex.Store({
    //相当于data
    state:{
            cartList:[]
    },
    //相当于计算属性
    getters:{

    },
    //同步操作
    mutations:{
       addCounter(state,payload){
            payload.count++
       },
       addToCart(state,payload){
        state.cartList.push(payload)
       }
    },
    //异步操作
    actions:{
        addCart(context,payload)
        {
        return new Promise((resolve,reject) => {
            let oldProduct=context.state.cartList.find(item=>item.iid===payload.iid)
            if(oldProduct){
                // oldProduct.count+=1
                //resolve回调
                context.commit('addCounter',oldProduct)
                resolve('商品+1')
            }
            else{
                payload.count=1
                //payload可以添加属性
                payload.checked=false
                context.commit('addToCart',payload)
                resolve('添加商品成功');
            }
        })
        

        }
    }
 

})
//挂载到Vue实例上，所以要导出
export default store