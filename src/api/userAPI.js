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
  if (history === undefined) {
    await login(userData);
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
