import http from '../../request';



/**
 * 获取天气信息
 */
function getArticleList (value) {
  return new Promise((resolve, reject) => {
    http("get", '/api/city', { city: value }).then(res => {
      resolve(res);
    }, error => {
      console.log("网络异常~", error);
      reject(error)
    })
  })
}

export {
  getArticleList
}