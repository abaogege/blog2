import Mock from 'mockjs'

Mock.mock('/api/article-detail','get',{
    "success":true,
    "data":{
        "title|1-10":"测试标题",
        "createTime":Mock.Random.date('yyyy-MM-dd'),
        "views|1-1000":1000,
        "comments|1-1000":1000,
        "tags|3":["原创","转载","心得","技术","冷知识"],
        "authorName":"abao",
        "content|100-200":"测试内容"
    }
})

Mock.mock('/api/article-list','get',{
    "success":true,
    "data|10":[{
        "id|+1":1,
        "title|1-10":"测试标题",
        "createTime":Mock.Random.date('yyyy-MM-dd'),
        "shortDescription|1-10":"测试简介测试简介测试简介测试简介测试简介测试简介",
        "imgSrc":function(){
            if(Math.random() >0.5){
                return ''
            }else{
                return '/static/images/test.jpg'
            }
        },
        "views|1-1000":1000,
        "comments|1-1000":1000,
        "isPublished":true,
        "tags|3":["原创","转载","心得","技术","冷知识"],
        "authorName":"abao"

    }]
})
