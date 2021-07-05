<template>
    <div id="detail">
        <!-- 导航栏 -->
        <Detailnavbar class="detail-nav"></Detailnavbar>
        <Scroll class="content" 
            :pullupload="true" 
            :probetype="3" 
            ref="scroll"
            @pullingUp="loadmore"
            @scrollclick="contentscroll">
            <!-- 轮播图 -->
            <Detailswiper :detailswiperimg='resswiperimg'></Detailswiper>
            <!-- 商品信息 -->
            <Detailshopinfo :goods='goods'></Detailshopinfo>
            <!-- 商店信息 -->
            <Detailspinfo :shop='shop'></Detailspinfo>
            <Detailinfo :detailinfo='detailinfo' @imgload='imgload'></Detailinfo>
        </Scroll>
        <Detailbar @shoppush='shoppush'></Detailbar>
        <Backtop @click.native="backclick" v-show="istop"/>
    </div>
</template>

<script>
import Detailswiper from './childcomps/Detailswiper'
import Detailnavbar from './childcomps/Detailnavbar'
import Detailshopinfo from './childcomps/Detailshopinfo'
import Detailspinfo from './childcomps/Detailspinfo'
import Detailinfo from './childcomps/Detailinfo'
import Detailbar from './childcomps/Detailbar'

import Backtop from 'components/content/backtop/Backtop'
import Scroll from 'components/common/scroll/Scroll'

import {getdetail, goods, shop} from 'network/detail'

export default {
    name: "detail",
    components: {
        Detailnavbar,
        Detailswiper,
        Detailshopinfo,
        Detailspinfo,
        Detailinfo,
        Scroll,
        Detailbar,
        Backtop,
    },
    data() {
        return {
          iid: null,
          resswiperimg: [],
          goods: {},
          shop: {},
          detailinfo: {},
          istop: false,
        }
    },
    created() {
        this.keepid()

        //请求的方法传入iid
        this.fgetdetail(this.iid)
    },
    methods: {
        //把商品id保存下来
        keepid() {
            this.iid = this.$route.params.iid
        },
        //请求商品数据，传出iid
        fgetdetail(iid) {
            getdetail(iid).then(res => {
                const data = res.data.result
                //轮播图图片信息
                this.resswiperimg = data.itemInfo.topImages
                //商品信息
                this.goods = new goods(data.itemInfo, data.columns, data.shopInfo.services)
                //商店信息
                this.shop = new shop(data.shopInfo)
                //下面的图片
                this.detailinfo = data.detailInfo
            })
        },
        loadmore() {
            this.$refs.scroll.refresh()
        },
        shoppush() {
            //获取购物车所需要展示的信息
            const product = {}
            product.image = this.resswiperimg[0]
            product.title = this.goods.title
            product.desc = this.goods.desc
            product.price = this.goods.realprice
            product.iid = this.iid

            //将商品添加到购物车
            this.$store.commit('addcart', product)
        },
        // 回到顶部
        backclick() {
            this.$refs.scroll.scrollTo(0, 0, 500)
        },
        //监听滚动位置
        contentscroll(position) {
            //判断是否显示 返回顶部
            this.istop = (-position.y) > 1000
        },
        imgload() {
            this.$refs.scroll.refresh()
        }
    }
}
</script>

<style scoped>
    #detail {
        position: relative;
        z-index: 9;
        background-color: #fff;
        height: 100vh;
    }
    .content {
        position: absolute;
        top: 42px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
    .detail-nav {
        position: relative;
        z-index: 9;
        background-color: #fff;
    }
</style>