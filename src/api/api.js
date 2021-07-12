import axios from 'axios';

// User Axios
export async function login(userData) {
  try {
    const response = await axios.post(
      'http://localhost:8080/api/login',
      userData
    );
    if (response.status >= 200 && response.status <= 204) {
    }
    return response;
  } catch (e) {
    console.error(e);
  }
}
export async function signup(userData) {
  axios
    .post('http://localhost:8080/api/signup', userData)
    .then((response) => {
      if (response.status >= 200 && response.status <= 204) {
        alert('가입에 성공하셨습니다!');
        this.props.history.push('/');
      }
    })
    .catch(() => {
      alert('이미 가입된 아이디입니다.');
    });
}
//  User Axios End

// TodoList Axios
export async function getTodo() {
  try {
    const response = await axios.post('http://localhost:8080/api/todo');
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error('error!!!', e.response.data);
  }
}

// TodoList Axios End
