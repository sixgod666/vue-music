<template>
    <div class="slider">
        <div class="slider-group" :style=groupStyle>
            <a v-for="(item, i) in list" :key="item.id+i" :href="item.linkUrl" :style="{width:width+'px'}">
                <img :src="item.picUrl" alt="">
            </a>
        </div>
        <div class="slider-dots"></div>
    </div>
</template>

<script>
    export default {
        name: 'slider',
        data(){
            return {
                width: document.body.clientWidth,
                left: document.body.clientWidth,
                index: 1
            }
        },
        watch: {
            index: function() {
                if(this.index === -1) {
                    this.index = this.list.length - 2
                }else if(this.index === this.list.length) {
                    this.index = 1
                }
            }
        },
        mounted(){
            if(this.autoScroll) clearInterval(this.autoScroll)
            this.autoScroll = setInterval(() => {
                this.index++
            }, 1000)
        },
        computed: {
            list: function() {
                return [this.items[this.items.length-1]].concat(this.items).concat([this.items[0]])
            },
            groupStyle: function() {
                return {
                    width: (this.items.length+2)*this.width + 'px',
                    transition: (this.index===0 || this.index === this.items.length + 2)? 'all 0 ease-out' : 'all .3s ease-out',
                    left: -this.index*this.width + 'px'
                }
            }
        },
        props: {
            items: {
                type: Array
            },
            loop: {
                type: Boolean,
                default: true
            },
            autoPlay: {
                type: Boolean,
                default: true
            },
            interval: {
                type: Number,
                default: 4000
            }
        }
    }
</script>

<style lang="stylus">
    .slider {
        width 100%
        overflow hidden
        position relative
        padding-top 40%
        .slider-group {
            position absolute
            font-size 0
            top 0
            left 0
            bottom 0
            transition all .4s ease-out
            a {
                display inline-block
                img {
                    width 100%
                }
            }
        }
    }
</style>
