<template>
    <div class="shop-info">
        <div class="shop-top">
            <img :src="shop.logo" alt="">
            <span class="title">{{shop.name}}</span>
        </div>
        <div class="shop-middle">
            <div class="shop-middle-item shop-middle-left">
                <div class="info-sells">
                    <div class="sell-count number">
                        {{shop.sells}}
                        <!-- {{shop.sells | sellCountFilter}} -->
                    </div>
                    <div class="sells-text">总销量</div>
                </div>
                <div class="info-goods">
                    <div class="goods-count number">
                        {{shop.goodscount}}
                    </div>
                    <div class="goods-text">全部宝贝</div>
                </div>
            </div>
            <div class="shop-middle-item shop-middle-right">
                <table>
                    <tr v-for="(item, index) in shop.score" :key="index">
                        <td class="text-right">{{item.name}}</td>
                        <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
                        <td class="better" :class="{'better-more': item.isBetter}">
                            <span>{{item.isBetter ? '高':'低'}}</span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="btbox">
            <div class="btbox-bt">进店逛逛</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Detailspinfo',
    props: {
        shop: {
            type: Object,
            default() {
                return {}
            }
        }
    },
}

</script>
    
<style scoped>
    .shop-info {
        padding-top: 26px;
        padding-left: 8px;
        padding-right: 8px;
        color: #222222;
        border-bottom: 5px solid #f2f5f8;
    }
    .shop-top {
        display: flex;
        margin-bottom: 20px;
    }
    .shop-top img {
        height: 60px;
        display: inline-block;
        vertical-align: middle;
        border-radius: 30px;
    }
    .shop-top .title {
        display: inline-block;
        line-height: 60px;
        margin-left: 14px;
        font-size: 18px;
    }
    .shop-middle {
        display: flex;
        font-size: 14px;
    }
    
    .shop-middle .shop-middle-item {
        flex: 1;
        text-align: center;
    }
    .shop-middle-left {
        display: flex;
    }
    .shop-middle-left>div {
        align-self:center;
        flex: 1;
    }
    .number {
        font-size: 18px;
        font-weight: 660;
        margin-bottom: 10px;
    }
    .info-goods {
        border-right: 1px solid rgb(216, 209, 209);
    }
    .shop-middle-right table {
        width: 100%;
        height: 100%;
    }
    .shop-middle-right table tr td {
        text-align: left;
        line-height: 30px;
    }
    .shop-middle-right table tr .text-right {
        text-align: center;
    }
    .score{
        color: yellowgreen;
    }
    .score-better {
        color: tomato;
    }
    .better>span {
        color: white;
        background-color: yellowgreen;
    }
    .better-more>span {
        background-color: tomato;
    }
    .btbox {
        width: 100%;
        margin-top: 16px;
        padding-bottom: 24px;
    }
    .btbox-bt {
        border-radius: 15px;
        background-color: whitesmoke;
        text-align: center;
        line-height: 40px;
        width: 60%;
        margin: auto;
        font-size: 16px;
    }
</style>