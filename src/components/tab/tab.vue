<template>
    <div class="km-tab">
      <router-link tag="div" class="km-tab-item" to="/recommond">
        <span class="km-tab-text">推荐</span>
      </router-link>
      <router-link tag="div" class="km-tab-item" to="/singer">
        <span class="km-tab-text">歌手</span>
      </router-link>
      <router-link tag="div" class="km-tab-item" to="/rank">
        <span class="km-tab-text">排行</span>
      </router-link>
      <router-link tag="div" class="km-tab-item" to="/search">
        <span class="km-tab-text">搜索</span>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: 'tab'
    }
</script>

<style lang="stylus">
    @import "~common/stylus/variable"
    .km-tab {
      display flex
      height 44px
      line-height 44px
      .km-tab-item {
        flex:1
        color $color-text
        text-align center
        &.router-link-active{
            .km-tab-text{
                color $color-theme
                border-bottom 2px solid $color-theme
            }
        }
      }
    }
</style>
