import axios from 'axios';

// User Axios
export const login = async (userData) => {
  try {
    const response = await axios.post(
      'http://localhost:8080/api/login',
      userData
    );
    console.log(response);
    // if (response.status >= 200 && response.status <= 204) {
    console.log('LOGIN ASYNC');
  } catch (e) {
    console.error(`로그인 에러!>>${e}`);
  }
};
export const signup = async (userData) => {
  console.log('ASYNC START');
  try {
    const res = await axios.post('http://localhost:8080/api/signup', userData);
    console.log(res.data);
    return res.data;
  } catch (e) {
    alert(`에러 발생!${e}`);
  } finally {
    console.log('ASYNC END');
  }
};
//  User Axios End

// TodoList Axios
export const getTodo = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/todo');

    console.log(response.data);
  } catch (e) {
    console.error('error!!!', e.response.data);
  }
};

// TodoList Axios End
