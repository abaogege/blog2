<template>
<div class="articles">
    <router-link v-cloak :to="'/blog-details/'+id" class="articles-link">

        <h2 class="title">标题：{{title}}</h2>
        <img class="img" v-show="imgSrc" :src="imgSrc">

        <p class="shortDescription">描述：{{shortDescription}}</p>
    </router-link>
    <p class="tags">标签：
        <router-link :to="'/1'" :tag="'span'" class="tags-span" v-for="(item,index) in tags" :key="index"> {{item}}&nbsp;</router-link>
    </p>

    <span class="createTime">发布时间：{{createTime}}</span>
    <span class="authorName">作者：{{authorName}}</span>
    <span class="views">查看：{{views}}</span>
    <span class="comments">评论：{{comments}}</span>

</div>
</template>

<script>
export default {
    name: "ListDetail",
    data() {
        return {
            // post:this.props
        };
    },
    props: {
        id: Number,
        title: String,
        createTime: String,
        shortDescription: {
            type: String,
            default: "暂无描述"
        },
        imgSrc: String,
        views: {
            type: Number,
            default: 0
        },
        comments: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        tags: Array,
        authorName: String
    }
};
</script>

<style scoped>
.articles {
    color: #666;
    text-decoration: none;
    margin-bottom: 20px;
    background-color: rgb(250, 239, 239);
    padding: 30px;
    transition: transform 0.5s;
}

.articles-link {
    display: block;
    color: #666;
    text-decoration: none;
}

.articles:hover {
    box-shadow: 4px 4px 17px 3px #af9d9d;
    transform: translate(-2px, -2px);

}

.title {
    color: #333;
}

.img {
    width: 100%;
}

.tags-span {
    color: red;
    cursor: pointer;

}

.shortDescription {}
</style>
