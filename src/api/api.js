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
export const createTodo = async (todoData) => {
  try {
    const response = await axios.post(
      'http://localhost:8080/api/create',
      todoData
    );
    console.log(response);
    return response.data;
  } catch (e) {
    console.error('error!!!', e.response);
  }
};

export const getTodo = async () => {
  const userID = localStorage.getItem('token');
  console.log(userID);
  try {
    const response = await axios.post('http://localhost:8080/api/read', userID);
    console.log(response);
    return response.data;
  } catch (e) {
    console.error('error!!!', e.response);
  }
};

export const updateTodo = async (todoData) => {
  try {
    const response = await axios.post(
      'http://localhost:8080/api/update',
      todoData
    );
    console.log('UPDATE DATA: ', response);
    return response.data;
  } catch (e) {
    console.error('error!!!', e.response);
  }
};

export const deleteTodo = async ({ listNum, userID }) => {
  console.log('delete: ', listNum, userID);
  try {
    const response = await axios.post('http://localhost:8080/api/delete', {
      listNum: listNum,
      userID: userID,
    });
    console.log('UPDATE DATA: ', response);
    return response.data;
  } catch (e) {
    console.error('error!!!', e.response);
  }
};

// TodoList Axios End
