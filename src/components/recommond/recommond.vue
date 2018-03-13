<template>
  <div>
      <slider>
          <div v-for="item in recommend" :key="item.id">
              <a :href="item.linkUrl">
                  <img :src="item.picUrl">
              </a>
          </div>
      </slider>
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
