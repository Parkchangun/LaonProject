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

export default function SiginIn() {
  // const [id, setID] = useState('');
  // const [pw, setPW] = useState('');
  const [user, setUser] = useState({
    id: '',
    pw: '',
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
    alert(`id = ${user.id} pw = ${user.pw}`);
  };

  return (
    <LoginBox>
      <InsertForm>
        <InputBox
          name='id'
          placeholder='ID'
          onChange={onChange}
          value={user.id}
        ></InputBox>
        <InputBox
          type='password'
          name='pw'
          placeholder='PW'
          onChange={onChange}
          value={user.pw}
          onKeyPress={enterPress}
        ></InputBox>
        <button onClick={onSubmit}>로그인</button>
        <Link to='/signup'>
          <button>가입하기</button>
        </Link>
      </InsertForm>
    </LoginBox>
  );
}
