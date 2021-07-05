<template>
  <div id="cart">
    <Navbar class="nav-bar">
      <div slot="center">购物车({{cartlength}})</div>
      <div slot="right" class="delete">删除</div>
    </Navbar>
    <Scroll class="content"
            :pullupload="true" 
            :probetype="3" 
            ref="scroll">
      <Cartlist></Cartlist>
    </Scroll>
    <Cartbar></Cartbar>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'
import Scroll from 'components/common/scroll/Scroll'

import Cartbar from './childcomps/Cartbar.vue'
import Cartlist from './childcomps/Cartlist.vue'


export default {
    name: "cart",
    components: {
      Navbar,
      Cartlist,
      Scroll,
      Cartbar
    },
    computed: {
      cartlength() {
        return this.$store.state.cartlist.length
      },
    },
}
</script>

<style scoped>
    #cart {
      height: 100vh;
      position: relative;
    }
    .nav-bar {
      background-color: #ff8198;
      color: #fff;
    }
    .content {
      position: absolute;
      top: 42px;
      bottom: 89px;
      overflow: hidden;
      left: 0;
      right: 0;
    }
    
</style>