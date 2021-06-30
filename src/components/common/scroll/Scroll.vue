<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'

    export default {
        name: 'Scroll',
        props: {
            probetype: {
                type: Number,
                default: 0
            },
            pullupload: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                scroll: null
            }
        },
        mounted() {
            //创建bscroll对象
            // document.querySelector('.wrapper')  这种不可取，如果有多个wrapper的话不知道拿的究极是哪个wrapper
            this.scroll = new Bscroll(this.$refs.wrapper, {
                //按钮是否可以触发click时事件
                click: true,
                //监听滚动的位置
                probeType: this.probetype,
                //监听上拉拉到最后
                pullUpLoad: this.pullupload
            })

            //监听滚动的位置
            this.scroll.on('scroll', (position) => {
                this.$emit('scrollclick', position)
            })

            //监听上拉加载更多
            this.scroll.on('pullingUp', () => {
                this.$emit('pullingUp')
            })
        },
        methods: {
            //返回顶部方法
            scrollTo(x, y, time=500) {
                this.scroll && this.scroll.scrollTo(x, y, time)
            },
            //上拉加载更多 可以一直执行
            finishPullUp() {
                this.scroll.finishPullUp()
            },
            //刷新
            refresh() {
                this.scroll && this.scroll.refresh()
            },
            //获取y
            getscrolly() {
                return this.scroll ? this.scroll.y : 0
            }
        }
    }
</script>

<style scoper>
    
</style>