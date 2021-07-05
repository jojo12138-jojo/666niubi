<template>
    <div class="button" :class="{check: ischecked}">
        <img src="~assets/img/cart/tick.svg" alt="">
    </div>
</template>

<script>
export default {
    name: 'Buttoncheck',
    props: {
        ischecked: {
            type: Boolean,
            default: false
        } 
    },
    methods: {
    }
}
</script>

<style scoped>
    .button {
        padding: 0 1px;
        border-radius: 50%;
        border: 2px solid #aaa;
    }
    .check {
        border-color: #ff8198;
        background-color: #ff8198;
    }
</style>