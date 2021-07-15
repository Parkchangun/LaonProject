import TodoCreate from '../toDo/TodoCreate';
import TodoList from '../toDo/TodoList';
import { TodoProvider } from '../context/ToDoContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdPersonOutline, MdExitToApp } from 'react-icons/md';
import { flexCenterAlign } from '../../styles/CommonStyle';

const UserNameBox = styled.div`
  position: absolute;
  top: 1rem;
  left: -10rem;
  min-width: 10rem;
  height: 4rem;
  border-radius: 16px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  color: black;
  background-color: white;
  font-size: 2rem;
  ${flexCenterAlign}
  transform: scale(0);
  transform-origin: 100% 0;
  transition: transform 1s;
`;

const NowUserBox = styled.div`
  position: absolute;
  top: 2rem;
  right: 3rem;
  color: white;
  font-size: 2rem;

  & > div {
    ${flexCenterAlign}
    margin-bottom: 1rem;
  }

  svg:hover + ${UserNameBox} {
    transform: scale(1);
  }

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
            <div>
              <MdPersonOutline />
              <UserNameBox>{userName}</UserNameBox>
            </div>
            <Link to='/' onClick={checkOut}>
              <MdExitToApp />
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
