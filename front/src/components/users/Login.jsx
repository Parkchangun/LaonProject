import React, { useState } from 'react';
import styled from 'styled-components';
import { MainBlock, Input, flexCenterAlign } from '../../styles/CommonStyle';

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

export default function Login() {
  return (
    <LoginBox>
      <InsertForm>
        <InputBox placeholder='ID'></InputBox>
        <InputBox type='password' placeholder='PW'></InputBox>
      </InsertForm>
    </LoginBox>
  );
}
