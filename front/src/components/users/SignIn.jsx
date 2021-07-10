import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  MainBlock,
  Input,
  flexCenterAlign,
  Button,
  Positive,
  Negative,
} from '../../styles/CommonStyle';
import { useTodoDispatch } from '../context/ToDoContext';

const LoginBox = styled.div`
  ${MainBlock}
  ${flexCenterAlign}
`;

const InsertForm = styled.div`
  width: 30rem;
  height: 20rem;
  ${flexCenterAlign}
  flex-direction: column;
  justify-content: space-between;
`;

const InputWrap = styled.div`
  ${flexCenterAlign}
  flex-direction: column;
  width: 100%;
`;
const InputBox = styled.input`
  ${Input}
  & + & {
    margin-top: 20px;
  }
`;

const ButtonWrap = styled.div`
  ${flexCenterAlign}
  flex-direction: column;
  width: 100%;
`;
const ButtonBox = styled.button`
  ${Button}
  cursor: pointer;
  ${Positive}
  & + & {
    margin-top: 20px;
  }
`;

export default function SiginIn() {
  // const [id, setID] = useState('');
  // const [pw, setPW] = useState('');
  const [user, setUser] = useState({
    id: '',
    password: '',
  });
  const dispatch = useTodoDispatch();

  // const chnageID = (e) => setID(e.target.value);
  // const changePW = (e) => setPW(e.target.value);
  const onChange = (e) =>
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  const enterPress = (e) => {
    if (e.key === 'Enter') onSubmit();
  };
  const onSubmit = (e) => {
    alert(`id = ${user.id} pw = ${user.password}`);
  };

  return (
    <LoginBox>
      <InsertForm>
        <InputWrap>
          <InputBox
            name='id'
            placeholder='ID'
            onChange={onChange}
            value={user.id}
          ></InputBox>
          <InputBox
            type='password'
            name='password'
            placeholder='PASSWORD'
            onChange={onChange}
            value={user.password}
            onKeyPress={enterPress}
          ></InputBox>
        </InputWrap>
        <ButtonWrap>
          <ButtonBox onClick={onSubmit}>로그인</ButtonBox>
          <ButtonBox>
            <Link to='/signup'>회원가입</Link>
          </ButtonBox>
        </ButtonWrap>
      </InsertForm>
    </LoginBox>
  );
}
