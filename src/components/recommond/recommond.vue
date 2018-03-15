<template>
  <div>
      <slider v-if="recommend.length" :items="recommend"></slider>
  </div>
</template>

<script>
    import getRecommond from 'api/recommond'
    import {ERR_OK} from 'api/config'
    import slider from 'base/slider/slider'
    export default {
        name: 'recommond',
        components: {
            slider
        },
        data(){
            return {
                recommend: []
            }
        },
        created(){
            this._getRecommond()
        },
        methods: {
            _getRecommond(){
                getRecommond().then((res) => {
                    if(res.code === ERR_OK) {
                        this.recommend = res.data.slider
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
