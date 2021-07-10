import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MainBlock, Input, flexCenterAlign } from '../../styles/CommonStyle';
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

function SignUp() {
  return (
    <LoginBox>
      <InsertForm>
        <InputBox name='id' placeholder='ID'></InputBox>
        <InputBox type='password' name='pw' placeholder='PW'></InputBox>
        <button>회원가입</button>
        <Link to='/'>
          <button>취소</button>
        </Link>
      </InsertForm>
    </LoginBox>
  );
}

export default SignUp;
