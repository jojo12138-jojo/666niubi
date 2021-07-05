<template>
    <div class="info" v-if="Object.keys(goods).length !== 0">
        <div class="info-title">{{goods.title}}</div>
        <div class="info-price">
            <span class="n-price">{{goods.newprice}}</span>
            <span class="o-price">{{goods.oldprice}}</span>
            <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
        </div>
        <div class="info-other">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.services[goods.services.length-1].name}}</span>
        </div>
        <div class="info-service">
            <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
                <img :src="goods.services[index-1].icon" alt="">
                <span>{{goods.services[index-1].name}}</span>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Detailshopinfo',
        props: {
            goods: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        mounted() {
        },
    }
</script>

<style scoped>
    .info {
        margin-top: 15px;
        padding: 0 8px;
        color: #999;
        border-bottom: 5px solid #f2f5f8;
    }
    .info-title {
        color: #222;
    }
    .info-price {
        margin-top: 16px;
        position: relative;
    }
    .info-price .n-price {
        font-size: 24px;
        color: var(--color-high-text);
    }
    .info-price .o-price {
        font-size: 13px;
        margin-left: 5px;
        text-decoration: line-through;
        margin-right: 8px;
    }
    .discount {
        border-radius: 15px;
        background-color: #ff8198;
        color: white;
        padding: 2px 4px;
        font-size: 14px;
        margin-bottom: 20px;
        position: relative;
        bottom: 6px;
    }
    .info-other {
        display: flex;
        margin-top: 24px;
        padding-bottom: 8px;
        border-bottom: 1px solid rgb(231, 224, 224);
    }
    .info-other span {
        flex: 1;
        font-size: 13px
    }
    .info-other span:nth-last-child(1) {
        text-align: right;
    }
    .info-other span:nth-last-child(2) {
        text-align: center;
    }
    .info-service {
        display: flex;
        margin-top: 30px;
        margin-bottom: 24px;
        color: #000;
    }
    .info-service span {
        flex: auto;
        font-size: 13px;
        display: inline-block;
        line-height: 13px;
    }
    .info-service span:nth-last-child(1) {
        text-align: right;
    }
    .info-service span:nth-last-child(2) {
        text-align: center;
    }
    .info-service span img {
        width: 13px;
        height: 13px;
        display: inline-block;
        vertical-align: middle;
    }
</style>