<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right" @click="del"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        methods: {
            del() {
                this.$emit('del')
            }
        },
    }
</script>

<style scoped>
    .nav-bar {
        display: flex;
        line-height: 42px;
        height: 42px;
        text-align: center;
        box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
    }

    .left, .right {
        width: 60px;
    }

    .center {
        flex: 1;
    }
</style>