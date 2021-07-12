import axios from 'axios';

export async function getUser() {
  const response = await axios
    .get('localhost:/8080/api/user')
    .catch((e) => console.log(`getUser axios Error - ${e.Error}`));
  return response.data;
}

export async function getTodo() {
  const response = await axios
    .get('https://jsonplaceholder.typicode.com/users')
    .catch((e) => console.log(`getTodo axios Error - ${e.Error}`));
  return response.data;
}
