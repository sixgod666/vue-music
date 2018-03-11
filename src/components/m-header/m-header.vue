<template>
  <div class="m-header">
    <div class="logo"></div>
    <h1 class="text">Koala Music</h1>
  </div>
</template>

<script>
export default {
  name: 'm-header'
}
</script>

<style lang="stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
.m-header {
  position relative
  height: 44px
  font-size: 0
  text-align: center
  color: $color-theme
  .logo {
    display: inline-block
    width: 30px
    height 32px
    background-size 30px 32px
    vertical-align top
    margin-top 6px
    margin-right 9px
    bg-image('logo')
  }
  .text {
    display inline-block
    font-size $font-size-large
    vertical-align top
    line-height 44px
  }
}
</style>
