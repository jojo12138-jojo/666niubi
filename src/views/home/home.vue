<template>
    <div id="home">
        <!-- 导航栏 -->
        <Navbar class="home-nav"><div slot="center">购物街</div></Navbar>

        <Tabcontrol :titles="['流行', '新款', '精选']"  
                @tabClick="tabclick"
                ref="tabcontrolyi"
                @class="tab-control"
                v-show="istabfixed"/>
        
        <!-- 滚动 -->
        <Scroll class="content" 
                ref="scroll" 
                :probetype="3" 
                @scrollclick="contentscroll"
                :pullupload="true"
                @pullingUp="loadmore">

            <!-- 轮播图 -->
            <Homeswiper :banners='banners' @imgload='imgload'/>
            <!-- 热门推荐 -->
            <Homerecview :recommends='recommends'/>
            <!-- 本周流行 -->
            <Weekranking />
            <!-- 有点像选项卡 -->
            <Tabcontrol :titles="['流行', '新款', '精选']"  
                @tabClick="tabclick"
                ref="tabcontroler"/>
            <Goodslist :goods="showgoods"/>
        </Scroll>
        <Backtop @click.native="backclick" v-show="istop"/>
    </div>
</template>

<script>
    
    import Scroll from 'components/common/scroll/Scroll'
    import Navbar from 'components/common/navbar/Navbar'
    
    import Tabcontrol from 'components/content/tabcontrol/Tabcontrol'
    import Goodslist from 'components/content/goodslist/Goodslist'
    import Backtop from 'components/content/backtop/Backtop'
    
    import Homeswiper from './childcomps/Homeswiper'
    import Homerecview from './childcomps/Homerecview'
    import Weekranking from './childcomps/Weekranking'
    
    import {gethomemd, gethomegoods} from 'network/home'
    import {debounce} from 'common/utils'

    export default {
        name: 'home',
        components: {
            Navbar,
            Homeswiper,
            Homerecview,
            Weekranking,
            Tabcontrol,
            Goodslist,
            Scroll,
            Backtop,
        },
        data() {
            return {
                banners: [],
                recommends: [],
                goods: {
                    'pop': {page: 0, list: []},
                    'new': {page: 0, list: []},
                    'sell': {page: 0, list: []},
                },
                currenttype: 'pop',
                istop: false,
                istabfixed: false,
                taboffsettop: 0,
                //记录出去时的位置  Yscroll
            }
        },
        //组件创建完数据还未有 后执行 created
        created() {
            //组件已经创建好了，所以要请求数据
            this.gethomemd()

            this.gethomegoods('pop',)
            this.gethomegoods('new',)
            this.gethomegoods('sell',)
        },
        //计算属性
        computed: {
            showgoods() {
                return this.goods[this.currenttype].list
            }
        },
        //方法
        methods: {
            //获取图片加载完，把高度赋值给taboffsettop
            imgload() {
                this.taboffsettop = this.$refs.tabcontroler.$el.offsetTop
            },
            //事件监听
            tabclick(index) {
                switch(index) {
                    case 0:
                        this.currenttype = 'pop'
                        break
                    case 1:
                        this.currenttype = 'new'
                        break
                    case 2:
                        this.currenttype = 'sell'
                        break
                }
                this.$refs.tabcontrolyi.activeindex = index
                this.$refs.tabcontroler.activeindex = index
            },

            //监听滚动位置，来判断是否显示回到顶部
            contentscroll(position) {
                //判断是否显示 返回顶部
                this.istop = (-position.y) > 1000

                //判断是否吸顶
                this.istabfixed = (-position.y) > this.taboffsettop
            },

            // 回到顶部
            backclick() {
                this.$refs.scroll.scrollTo(0, 0, 500)
            },

            // 上拉加载更多
            loadmore() {
                this.gethomegoods(this.currenttype)
                this.$refs.scroll.refresh()
            },

            //网络请求
            gethomemd() {
                gethomemd().then(res => {
                    this.banners = res.data.data.banner.list
                    this.recommends = res.data.data.recommend.list
                })
            },
            gethomegoods(type) {
                const page = this.goods[type].page + 1
                gethomegoods(type, page).then(res => {
                    this.goods[type].list.push(...res.data.data.list)
                    this.goods[type].page += 1

                    //完成上拉加载更多后可以再次上拉加载更多
                    this.$refs.scroll.finishPullUp()
                })
            },
        },
        //组件创建完，有dom
        mounted() {
            //防抖，减少重复次数   加载30次图片，图片加载完后执行，让scroll的那个高度更新
            const refresh = debounce(this.$refs.scroll.refresh, 150)
            this.$bus.$on('itemimgload', () => {
                refresh()
            })
        },
        //进入
        // activated () {
        //     this.$refs.scroll.scrollTo(0, this.Yscroll, 0)
        //     this.$refs.scroll.refresh()
        // },
        //离开
        // deactivated() {
        //     this.Yscroll = this.$refs.scroll.getscrolly()
        // }
    }
</script>

<style scoped>
    #home {
        height: 100vh;
        position: relative;
    }
    .home-nav {
        background-color: var(--color-tint);
        color: #fff;
    }
    .content {
        position: absolute;
        top: 42px;
        bottom: 49px;
        overflow: hidden;
        left: 0;
        right: 0;
    }
    .tab-control {
        position: relative;
        z-index: 9;
    }
</style>