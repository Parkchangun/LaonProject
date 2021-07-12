import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { signup } from '../../api/api';
import {
  MainBlock,
  Input,
  flexCenterAlign,
  Button,
  Positive,
  Negative,
} from '../../styles/CommonStyle';
import { useTodoDispatch } from '../context/ToDoContext';
import { useUserDispatch } from '../context/UserContext';

const SignBox = styled.div`
  ${MainBlock}
  ${flexCenterAlign}
  flex-direction: column;
  justify-content: space-around;
`;

const TitleBox = styled.div`
  margin-top: 2rem;
  font-size: 1.5rem;
`;

const InsertForm = styled.div`
  ${flexCenterAlign}
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 80%;
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
    ${Negative}
  }
`;

function SignUp() {
  // const [id, setID] = useState('');
  // const [pw, setPW] = useState('');
  const [user, setUser] = useState({
    userID: '',
    password: '',
  });
  const dispatch = useUserDispatch();

  const onChange = (e) =>
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  const enterPress = (e) => {
    if (e.key === 'Enter') onSubmit();
  };
  const onSubmit = (e) => {
    alert(`id = ${user.userID} pw = ${user.password}`);
    dispatch({ type: 'SIGNUP', user });
  };

  return (
    <SignBox>
      <TitleBox>회원가입</TitleBox>
      <InsertForm>
        <InputWrap>
          <InputBox
            name='userID'
            placeholder='ID'
            onChange={onChange}
            value={user.userID}
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
          <ButtonBox onClick={onSubmit}>가입하기</ButtonBox>
          <ButtonBox>
            <Link to='/'>취소하기</Link>
          </ButtonBox>
        </ButtonWrap>
      </InsertForm>
    </SignBox>
  );
}

export default SignUp;
