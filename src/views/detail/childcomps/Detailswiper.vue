<template>
    <Swiper class="detail-swiper">
        <Swiperitem v-for="(item, index) in detailswiperimg" 
            :key="index" class="detail-swiper-item">
            <img :src="item" alt="">
        </Swiperitem>
    </Swiper>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper'
import Swiperitem from 'components/common/swiper/Swiperitem'

export default {
    name: 'Detailswiper',
    components: {
        Swiper,
        Swiperitem
    },
    props: {
        detailswiperimg: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>
    .detail-swiper {
        height: 340px;
        overflow: hidden;
    }
</style>