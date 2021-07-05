<template>
    <div class="cart-bar">
        <div class="left">
            <Buttoncheck class="but" :ischecked='ischecked' @click.native="checkall"></Buttoncheck>
            <span>全选</span>
        </div>
        <div class="center">
            合计：<span>{{'¥'+ sellprice}}</span>
        </div>
        <div class="right">
            <span>去结算({{checklength}})</span>
        </div>
    </div>
</template>

<script>
import Buttoncheck from 'components/content/buttoncheck/Buttoncheck'

export default {
    name: 'Cartbar',
    components: {
        Buttoncheck,
    },
    computed: {
        sellprice() {
            return this.$store.state.cartlist.filter(item => {
                return item.checked
            }).reduce((prevalue, item) => {
                return prevalue + item.price * item.count
            }, 0).toFixed(2)
        },
        checklength() {
            return this.$store.state.cartlist.filter(item => item.checked).length
        },
        ischecked() {
            if(this.$store.state.cartlist.length === 0) {
                return false
            } else {
                return !(this.$store.state.cartlist.filter(item => !item.checked).length)
            }
        },
    },
    methods: {
        checkall() {
            if(this.ischecked) {
                this.$store.state.cartlist.forEach(item => item.checked = false)
            } else {
                this.$store.state.cartlist.forEach(item => item.checked = true)
            }
        }
    }
}
</script>

<style scoped>
    .cart-bar {
        height: 40px;
        background-color: #eee;
        position: absolute;
        bottom: 49px;
        width: 100%;
        display: flex;
        box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
    }
    .left {
        display: flex;
        align-items: center;
        width: 80px;
    }
    .but {
        margin: auto 10px;
    }
    .center {
        margin: auto 15px;
        color: red;
        font-weight: 600;
        flex: 1;
    }
    .center>span {
        font-size: 24px;
    }
    .right {
        line-height: 40px;
        width: 80px;
        background-color: red;
        color:white;
        text-align: center;
    }
</style>