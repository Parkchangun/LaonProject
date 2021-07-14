import { login, signup } from './api';

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
