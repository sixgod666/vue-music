<template>
    <div class="slider">
        <div class="slider-group">
            <slot></slot>
        </div>
        <div class="slider-dots"></div>
    </div>
</template>

<script>
    export default {
        name: 'slider',
        props: {
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

<style scoped>

</style>
