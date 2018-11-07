import axios from 'axios'

export function getArticleDetail(param) {
  const url = '/api/article-detail'
  return axios.get(url, {}).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function gerArticleList(param){
    const url = '/api/article-list'

    return axios.get(url, {}).then((res) => {
        return Promise.resolve(res.data)
      })
}