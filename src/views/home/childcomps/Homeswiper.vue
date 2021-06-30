<template>
    <Swiper>
        <Swiperitem v-for="(item, index) in banners" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="" @load="imgload">
            </a>
        </Swiperitem>
    </Swiper>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper'
import Swiperitem from 'components/common/swiper/Swiperitem'

export default {
    name: 'Homeswiper',
    props: {
        banners: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        Swiper,
        Swiperitem
    },
    data() {
        return {
            isload: false
        }
    },
    methods: {
        imgload() {
            if (!this.isload) {
                this.$emit('imgload')
                this.isload = true
            }
        }
    }
}
</script>

<style>

</style>