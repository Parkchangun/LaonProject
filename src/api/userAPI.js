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
  if (history === undefined) {
    await login(userData);
    console.log('LOGIN END');
    return;
  }

  await signup(userData);
  console.log('SIGNUP END');
  history.push('/');
  return;
};
