
import urlObj from './config.js'

const api = {
  identity: urlObj.baseURL + '/index/GetIdentityList', //获取身份信息列表
  age: urlObj.baseURL + '/index/getAgeList', //获取年龄列表
  games: urlObj.baseURL + '/index/getGamesList', //获取年龄列表
  addInfo:urlObj.baseURL + '/index/addInfo',//提交信息接口
  config:urlObj.baseURL +'/index/getWeiXinCode',//微信config
}

export default api
