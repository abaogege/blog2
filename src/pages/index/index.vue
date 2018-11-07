<template>
<div class="index-wrapper">
    <div class="w" id="index">
        <Aside></Aside>
        <div class="right-aside">
            <router-view>

            </router-view>
        </div>
    </div>
</div>
</template>

<script>
import Aside from '@/components/common/aside'
// import BlogList from '@/components/blog/bloglist'
export default {
    name: "Index",
    components: {
        Aside,
    }
}
</script>

<style scoped>
#index {
    display: flex;
    position: relative;

    /* background-color: orchid; */
    /* min-height: 800px; */
    justify-content: space-between;
}

.right-aside {
    width: 900px;
    /* background-color: mediumturquoise; */
}
</style>
