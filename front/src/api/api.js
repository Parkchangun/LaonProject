import axios from 'axios';

export async function getUser() {
  const response = await axios.get('localhost:/8080/api/user');
  return response.data;
}

export async function getTodo() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
}
