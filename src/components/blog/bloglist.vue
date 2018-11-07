<template>
<div id="blogList">
    <list-detail v-for="item in bloglist" :key="item.id" :id="item.id" :title="item.title" :shortDescription="item.shortDescription" :createTime="item.createTime" :imgSrc="item.imgSrc" :views="item.views" :comments="item.comments" :tags="item.tags" :authorName="item.authorName">

    </list-detail>
</div>
</template>

<script>
import ListDetail from "@/components/blog/listdetail"
import {
    gerArticleList
} from '@/api/article'

export default {
    name: "BlogList",
    created() {
        this._gerArticleList()
    },
    data() {
        return {
            bloglist: []
        }
    },
    methods: {
        _gerArticleList() {
            gerArticleList().then(res => {
                console.log(res)
                if (res.success == true) {
                    this.bloglist = res.data
                }
            })
        }
    },
    components: {
        ListDetail
    }
}
</script>

<style scoped>
#blogList {
    /* flex: 2; */
   
}
</style>
