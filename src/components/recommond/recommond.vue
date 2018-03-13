<template>
  <div>recommond</div>
</template>

<script>
    import getRecommond from 'api/recommond'
    export default {
        name: 'recommond',
        created(){
            getRecommond()
        },
        methods: {
            getRecommond(){
                getRecommond().then((res) => {
                    console.info(res)
                })
            }
        }
    }
</script>

<style scoped>

</style>
