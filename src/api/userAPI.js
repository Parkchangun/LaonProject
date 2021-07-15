import axios from 'axios';

const userData = {
  userID: '',
  password: '',
};

export const userAction = async (history) => {
  userData.userID = document.querySelector(`#userID`).value;
  userData.password = document.querySelector(`#password`).value;
  console.log(userData.userID);
  console.log(userData.password);
  console.log(userData);
  console.log(history);
  //Login
  if (history.location.pathname === '/') {
    const token = await login(userData);
    if (token) {
      alert('성공');
      localStorage.setItem('token', token);
      history.push('/todo');
      return;
    }
    alert('실패');
    console.log('LOGIN END');
    return;
  }
  //Sign Up
  const unduplicate = await signup(userData);
  if (unduplicate === false) {
    alert('중복된 아이디입니다!');
    return;
  }
  console.log('SIGNUP END');
  history.push('/');
  return;
};

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
