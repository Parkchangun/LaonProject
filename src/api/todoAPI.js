import axios from 'axios';

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

export const readTodo = async () => {
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

export const deleteTodo = async (userData) => {
  try {
    const response = await axios.post(
      'http://localhost:8080/api/delete',
      userData
    );
    console.log('UPDATE DATA: ', response);
    return response.data;
  } catch (e) {
    console.error('error!!!', e);
  }
};

// TodoList Axios End
