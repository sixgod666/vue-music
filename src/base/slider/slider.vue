<template>
    <div class="slider">
        <div class="slider-group" :style="{width:100*length+'%'}">
            <a v-for="(item, i) in list" :key="item.id" :href="item.linkUrl" :style="{width:100/length+'%',left: -width*i+'px',transform: 'translateX('+(i==index? '0': -width)+'px)'}">
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
                index: 0
            }
        },
        watch: {
            items: function() {
                if(this.autoScroll) clearInterval(this.autoScroll)
                this.autoScroll = setInterval(() => {
                    this.index = this.index===this.length-1? 0 : ++this.index
                }, 1000)
            }
        },
        mounted(){},
        computed: {
            length: function() {
                return this.items.length
            },
            list: function() {
                return this.items.slice(0, this.items.length)
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
            a {
                display inline-block
                transition all .4s ease-out
                img {
                    width 100%
                }
            }
        }
    }
</style>
