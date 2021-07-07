import axios from 'axios';

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
};
export default function customAxios(url, callback) {
  axios({
    url: '/api' + url,
    method: 'post',

    /*    
      실제 배포 시 baseURL, withCredentials 주석처리
        */
    baseURL: 'http://localhost:8080',
    withCredentials: true,
  }).then((response) => {
    if (response.data) {
      callback(response.data);
    } else {
      alert('failed');
    }
  });
}
