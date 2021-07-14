import TodoCreate from '../toDo/TodoCreate';
import TodoList from '../toDo/TodoList';
import { TodoProvider } from '../context/ToDoContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NowUserBox = styled.div`
  position: absolute;
  top: 3rem;
  right: 3rem;
  background: black;
  color: white;

  a {
    text-decoration: none;
    color: white;
  }
`;

function ToDoContainer({ history }) {
  const userName = localStorage.getItem('token');
  if (!userName) history.push('/');

  const checkOut = () => {
    localStorage.removeItem('token');
    history.push('/');
  };
  return (
    <>
      {userName && (
        <>
          <NowUserBox>
            <div>{userName}</div>
            <Link to='/' onClick={checkOut}>
              로그아웃
            </Link>
          </NowUserBox>
          <TodoProvider>
            <TodoList />
            <TodoCreate />
          </TodoProvider>
        </>
      )}
    </>
  );
}
export default ToDoContainer;
