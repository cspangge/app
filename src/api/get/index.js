// import axios from 'axios';
// import Axios from 'axios';
// import Vue from 'vue';
// import config from '../../config/config';

// 将axios挂载到原型上
// Vue.prototype.$axios = Axios;

// 配置全局的axios默认值（可选）

// // 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//   // 在发送请求之前做些什么
//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });
//
// // 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//   // 对响应数据做点什么
//   return response;
// }, function (error) {
//   // 对响应错误做点什么
//   return Promise.reject(error);
// });

// export default {
//   getProductsData () {
//     return axios.get(config.baseAPI + 'home/products', {
//       params: {
//         token: config.token,
//       },
//     });
//   },
// };

// 返回全部商品
// export function getProductsData () {
//   return axios.post(config.baseAPI + 'home/products', {
//     params: {
//       // token: config.token,
//     },
//   });
// }
// export function getProductsData () {
//   return axios({
//     method: 'post',
//     url: config.baseAPI + 'home/products',
//     // url: 'http://localhost:38080/app/mock/16/api/home/products',
//     // data: {},
//   });
// }
export async function getProductsData () {
  // config.baseAPI
  // const url = '/api/home/products';
  // let params = {
  //   "": ""
  // };
  // const data = new URLSearchParams();
  // for (let key in params) {
  //   data.append(params[key]);
  // }
  // const res = await axios.post(url, data);
  // return res.data;
  return 'abc';
}
