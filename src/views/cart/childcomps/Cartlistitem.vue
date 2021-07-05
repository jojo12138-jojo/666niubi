<template>
  <div class="shop-info">
    <div class="item-selector">
        <Buttoncheck :ischecked='shopinfo.checked' @click.native="but"></Buttoncheck>
    </div>
    <div class="item-img">
        <img :src="shopinfo.image" alt="">
    </div>
    <div class="item-info">
        <div class="item-title">{{shopinfo.title}}</div>
        <div class="item-desc">{{shopinfo.desc}}</div>
        <div class="item-tab">
            <div class="item-proce">¥{{shopinfo.price}}</div>
            <div class="item-right">
                <div class="but" @click="jian(shopinfo.iid)">-</div>
                <div class="item-count">{{shopinfo.count}}</div>
                <div class="but" @click="jia(shopinfo.iid)">+</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Buttoncheck from 'components/content/buttoncheck/Buttoncheck'

export default {
    name: 'Cartlistitem',
    components: {
        Buttoncheck
    },
    props: {
        shopinfo: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        jia(iid) {
            this.$store.state.cartlist.find(item => item.iid === iid).count++
        },
        jian(iid) {
            if(this.$store.state.cartlist.find(item => item.iid === iid).count >=2) {
                this.$store.state.cartlist.find(item => item.iid === iid).count--
            }
        },
        but() {
            this.shopinfo.checked = !this.shopinfo.checked
        }
    }
}
</script>

<style scoped>
    .shop-info {
        height: 120px;
        display: flex;
        align-items: center;
        margin: 5px auto;
        border-bottom: 1px solid #ccc;
        font-size: 14px;
    }
    .item-selector {
        width: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .item-img {
        text-align: center;
    }
    .item-img img {
        width: 90px;
        height: 100px;
        border-radius: 5px;
    }
    .shop-info>div {
        flex: auto;
    }
    .item-info {
        margin: 0 10px;
        width: 60%;
        height: 100px;
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .item-title {
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        width: 100%;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 20px;
        color: rgb(0, 0, 0);
    }
    .item-desc {
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        width: 100%;
    }
    .item-tab {
        display: flex;
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    .item-proce {
        font-size: 18px;
        font-weight: 800;
        color: orangered;
    }
    .item-tab>div {
        flex: auto;
    }
    .item-right {
        display: flex;
        position: absolute;
        right: 0;
    }
    .item-right>div {
        flex: auto;
        line-height: 24px;
        font-size: 18px;
        font-weight: 400;
    }
    .but{
        width: 24px;
        height: 24px;
        margin: 0 12px;
        border: 1px solid #666;
        text-align: center;
        border-radius: 15px;
    }
</style>