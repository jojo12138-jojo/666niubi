<template>
    <div class="goodslist">
        <Goodslistitem v-for="(item, index) in goods" :key="index" :goodsitem="item"/>
    </div>
</template>

<script>
import Goodslistitem from './Goodslistitem'

export default {
    name: 'Goodlist',
    components: {
        Goodslistitem,
    },
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>
    .goodslist {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 4px;
    }
</style>