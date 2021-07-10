import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  MainBlock,
  Input,
  flexCenterAlign,
  Button,
} from '../../styles/CommonStyle';
import { useTodoDispatch } from '../context/ToDoContext';

const InsertForm = styled.div`
  width: 15rem;
  height: 15rem;
  background-color: orange;
`;

const LoginBox = styled.div`
  ${MainBlock}
  ${flexCenterAlign}
`;

const InputBox = styled.input`
  ${Input}
`;

const ButtonBox = styled.button`
  ${Button}
`;

function SignUp() {
  return (
    <LoginBox>
      <InsertForm>
        <InputBox name='id' placeholder='ID'></InputBox>
        <InputBox type='password' name='pw' placeholder='PW'></InputBox>
        <ButtonBox>가입하기</ButtonBox>
        <Link to='/'>
          <ButtonBox>취소하기</ButtonBox>
        </Link>
      </InsertForm>
    </LoginBox>
  );
}

export default SignUp;
