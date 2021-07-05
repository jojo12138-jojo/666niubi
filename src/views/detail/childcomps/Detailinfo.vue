<template>
    <div v-if="Object.keys(detailinfo).length !== 0" class="datail-info">
        <div class="datail-info-top clearfix">
            <div class="start"></div>
            <div class="info-desc">{{detailinfo.desc}}</div>
            <div class="end"></div>
        </div>
        <div v-for="(item, index) in detailinfo.detailImage" :key="index">
            <div class="info-key">{{item.key}}</div>
            <div class="info-list">
                <img v-for="(itemer, indexer) in item.list" :key="indexer" :src="itemer" @load="imgload" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Detailinfo',
    props: {
        detailinfo: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        imgload() {
            this.$emit('imgload')
        }
    }
}
</script>

<style scoped>
    .clearfix::after{
        content: '';
        display: block;
        clear: both;
    }
    .datail-info-top {
        margin: 12px;
        font-size: 14px;
    }
    .datail-info-top .start {
        width: 100px;
        border-top: 2px solid #666;
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-left: 10px solid black;
    }
    .datail-info-top .end {
        width: 100px;
        border-bottom: 2px solid #666;
        float: right;
        margin-top: 20px;
        padding-top: 10px;
        border-right: 10px solid black;
    }
    .info-list>img {
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    .info-key {
        margin-left: 12px;
        font-size: 16px;
        font-weight: 600;
        color: black;
    }
    .info-list {
        margin: 10px 0;
    }
</style>