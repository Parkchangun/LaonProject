import React from 'react';
import styled from 'styled-components';
import TodoHead from './toDo/TodoHead';
import TodoList from './toDo/TodoList';
import TodoCreate from './toDo/TodoCreate';
import { useUserState } from './context/UserContext';
import SiginIn from './users/SignIn';
import SignUp from './users/SignUp';
import { Route } from 'react-router';

const TodoTemplateBlock = styled.div`
  width: 30rem;
  height: 45rem;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

function Home() {
  const state = useUserState();
  console.log(state);
  if (state.token === null) {
    return <SiginIn></SiginIn>;
  }
  return (
    <>
      <TodoList />
      <TodoCreate />
    </>
  );
}

function MainTemplate() {
  return (
    <TodoTemplateBlock>
      <TodoHead />
      <Route exact path='/' component={Home} />
      <Route path='/signup' component={SignUp} />
    </TodoTemplateBlock>
  );
}

export default MainTemplate;
