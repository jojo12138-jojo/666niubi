<template>
    <div class="detail-bar">
        <div class="left">
            <div>
                <div class="kf"></div>
                <span>客服</span>
            </div>
            <div>
                <div class="dp"></div>
                <span>店铺</span>
            </div>
            <div @click="shoucang">
                <div class="sc"  :class="{dsc: issc}"></div>
                <span>收藏</span>
            </div>
        </div>
        <div @click="shoppush" class="push-shop">加入购物车</div>
        <div class="sell">购买</div>
    </div>
</template>

<script>
export default {
    name: 'Detailbar',
    data() {
        return {
            issc: false
        }
    },
    methods: {
        shoppush() {
            this.$emit('shoppush')
        },
        shoucang() {
            this.issc = !this.issc
        }
    },
}
</script>

<style scoped>
    .push-shop {
        text-align: center;
        line-height: 49px;
        background-color: yellow;
        color: black;
        padding: 0 10px;
    }
    .sell {
        text-align: center;
        line-height: 49px;
        background-color: #ff8198;
        color: black;
        padding: 0 30px;
    }
    .detail-bar {
        height: 49px;
        width: 100%;
        position: absolute;
        bottom: 0;
        display: flex;
        text-align: center;
        align-items: center;
        background-color: white;
    }
    .left {
        display: flex;
        height: 100%;
        flex: 1;
    }
    .left>div {
        flex: 1;
        height: 100%;
        width: 33%;
        align-items: center;
    }
    .left>div>div {
        width: 28px;
        height: 28px;
        margin: 2px auto;
    }
    .left>div>span {
        font-size: 14px;
    }
    .kf {
        background-image: url("~assets/img/detail/detail_bottom.png");
        background-repeat: no-repeat;
        background-position: 2px -54px;
        background-size: 86%;
    }
    .dp {
        background-image: url("~assets/img/detail/detail_bottom.png");
        background-repeat: no-repeat;
        background-position: 2px -104px;
        background-size: 86%;
    }
    .sc {
        background-image: url("~assets/img/detail/detail_bottom.png");
        background-repeat: no-repeat;
        background-position: 2px 6px;
        background-size: 86%;
    }
    .dsc {
        background-position: 2px -24px;
    }
</style>