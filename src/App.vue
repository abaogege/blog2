<template>

<div id="app">
    <layout />
</div>

</template>

<script>
import Layout from './pages/layout/layout'

export default {
    name: 'App',
    components: {
        Layout
    }
}
</script>

<style>
@import url(./assets/css/normalize.css);
.w{
    width: 1200px;
    margin: 0 auto;
}
</style>
