import axios from 'axios';

export async function getUser() {
  try {
    const response = await axios.get('/api/user');
    console.log(response);
  } catch (e) {
    console.error(e);
  }
}

export async function getTodo() {
  try {
    const response = await axios.get('/api/todo');
    console.log(response);
  } catch (e) {
    console.error('error!!!', e);
  }
}
