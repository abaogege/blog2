<template>
<div>
    <p>标题：{{articleDetail.title}}</p>
    <p>作者{{articleDetail.authorName}}</p>
    <p>查看：{{articleDetail.views}}</p>
    <p>点击：{{articleDetail.clicks}}</p>
    <p>标签：<span v-for="(item,index) in articleDetail.tags" :key=index> {{item}} </span></p>
    <p>内容 <br>
        {{articleDetail.content}}
    </p>
</div>
</template>

<script>
import {
    getArticleDetail
} from '@/api/article'

export default {
    created() {
        // console.log(this.$route.params.id)
        this.articleId = this.$route.params.id
        console.log(this.articleId)
        this._getArticleDetail()
    },
    data() {
        return {
            articleDetail: {}
        }
    },
    methods: {
        _getArticleDetail() {
            getArticleDetail().then(res => {
                if (res.success) {
                    this.articleDetail = res.data
                }
            })
        }
    }
}
</script>
