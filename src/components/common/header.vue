<template>
<div id="header">
    <ul>
        <router-link v-for="item in list" :key="item.index" :to="item.link" :tag="'li'">
            {{ item.title }}
        </router-link>

    </ul>
</div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            list: [{
                title: "首页",
                index: 0,
                link: "/"
            }, {
                title: "列表",
                index: 1,
                link: "/list"
            }, {
                title: "关于",
                index: 2,
                link: "/"
            }, {
                title: "作品",
                index: 3,
                link: "/list"
            }, {
                title: "留言",
                index: 4,
                link: "/"
            }, {
                title: "大事记",
                index: 5,
                link: "/list"
            }]
        }
    }
}
</script>

<style scoped>
ul {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
}

li {
    width: 15%;
    text-align: center;
    list-style: none;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

}
</style>
