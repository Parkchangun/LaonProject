import React from 'react';
import styled from 'styled-components';
import TodoHead from './MainHeader';

import ToDoContainer from './ToDoContainer';
import { Route } from 'react-router';
import SignIn from '../users/SignIn';
import SignUp from '../users/SignUp';

const MainTemplateBlock = styled.div`
  width: 30rem;
  height: 45rem;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  position: relative;
`;

function MainTemplate() {
  return (
    <MainTemplateBlock>
      <TodoHead />
      <Route exact path='/' component={SignIn} />
      <Route path='/todo' component={ToDoContainer} />
      <Route path='/signup' component={SignUp} />
    </MainTemplateBlock>
  );
}

export default MainTemplate;
