import Vue from 'vue'
import Vuex from 'vuex'

//安装插件
Vue.use(Vuex)
//创建store对象
const store = new Vuex.Store({
    state: {
        cartlist: []
    },

    //mutations 作用修改state中的状态
    //mutations 中的每一个方法尽可能完成的事件比较单一一点
    mutations: {
        addcart(state, payload) {
            //payload新添加的商品
            //查找之前数组中是否有该商品
            let oldproduct = state.cartlist.find(item => item.iid === payload.iid)
            //判断数量加一还是添加商品
            if(oldproduct) {
                oldproduct.count += 1
            } else {
                payload.count = 1
                payload.checked = true
                state.cartlist.push(payload)
            }
        }
    },
})
//挂载vue实例
export default store
