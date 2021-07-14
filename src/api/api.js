import axios from 'axios';

// User Axios
export const login = async (userData) => {
  try {
    const response = await axios.post(
      'http://localhost:8080/api/login',
      userData
    );
    console.log(response.data);
    console.log('LOGIN ASYNC');
    return response.data;
    // if (response.status >= 200 && response.status <= 204) {
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
  const userID = localStorage.getItem('token');
  console.log(typeof userID);
  try {
    const response = await axios.post('http://localhost:8080/api/todo', userID);

    console.log(response);
  } catch (e) {
    console.error('error!!!', e.response);
  }
};

export const createTodo = async (todoData) => {
  try {
    const response = await axios.post(
      'http://localhost:8080/api/post',
      todoData
    );
    console.log(response);
  } catch (e) {
    console.error('error!!!', e.response);
  }
};

// TodoList Axios End
