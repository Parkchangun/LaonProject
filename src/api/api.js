import axios from 'axios';

// User Axios
export const login = async (userData) => {
  try {
    const response = await axios.get('http://localhost:8080/api/login', {
      params: {
        userID: userData.userID,
        password: userData.password,
      },
    });
    // if (response.status >= 200 && response.status <= 204) {
    console.log(response);
    console.log('LOGIN ASYNC');
  } catch (e) {
    console.error(e);
  }
};
export const signup = async (userData) => {
  console.log('ASYNC START');
  try {
    await axios.post('http://localhost:8080/api/signup', userData);
    alert('가입 성공@_@');
  } catch (e) {
    alert(`이미 가입된 아이디입니다. ${e}`);
  } finally {
    console.log('ASYNC END');
  }
};
//  User Axios End

// TodoList Axios
export const getTodo = async () => {
  try {
    const response = await axios.post('http://localhost:8080/api/todo');
    console.log(response.data);
  } catch (e) {
    console.error('error!!!', e.response.data);
  }
};

// TodoList Axios End
