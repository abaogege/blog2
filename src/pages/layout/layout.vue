<template>
<div id="layout">
    <Header :class="'header'"></Header>

    <router-view :class="'main'"></router-view>

    <Footer :class="'footer'"></Footer>

</div>
</template>

<script>
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'

export default {
    name: "Layout",
    components: {
        Header,
        Footer
    }
}
</script>

<style>
.header {
    width: 100%;
    height: 50px;
    background-color: skyblue;
}

.main {
    min-height: 1000px;
    background-color: hotpink;
}

.footer {
    width: 100%;
    height: 50px;
    background-color: skyblue;
}
</style>
