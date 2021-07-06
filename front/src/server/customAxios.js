import axios from 'axios';

export default function customAxios(url, callback) {
  axios({
    url: '/api' + url,
    method: 'post',

    /*    
      실제 배포 시 baseURL, withCredentials 주석처리
        */
    baseURL: 'http://localhost:8080',
    withCredentials: true,
  }).then(function (response) {
    callback(response.data);
  });
}
