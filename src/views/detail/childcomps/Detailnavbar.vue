<template>
    <div class="detail-navbar">
        <!-- 导航栏 -->
        <Navbar>
            <div slot="left" class="detail-navbar-left" @click="backclick">
                <img src="~assets/img/common/back.svg" alt="">
            </div>
            <div slot="center" class="detail-navbar-center">
                <div  v-for="(item, index) in naberitem" :key="index" 
                    class="detail-navbar-center-item"
                    :class="{active: index === active}"
                    @click="activeclick(index)">
                    {{item}}
                </div>
            </div>
        </Navbar>
    </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'

export default {
    name: "Detailnavbar",
    components: {
        Navbar,
    },
    data() {
        return {
            active: 0,
            naberitem: ['商品','参数','评论','推荐']
        }
    },
    methods: {
        activeclick(index) {
            this.active = index
        },
        //返回
        backclick() {
            this.$router.back()
        },
    }
}
</script>

<style scoped>
    .detail-navbar .detail-navbar-center {
        display: flex;
    }
    .detail-navbar-center-item {
        flex: 1;
    }
    .detail-navbar-left img {
        margin-top: 10px;
    }
    .active {
        color: var(--color-high-text);
    }
</style>