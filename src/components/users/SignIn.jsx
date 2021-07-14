import React from 'react';
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
import { userAction } from '../../api/userAPI';

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

export default function SignIn({ history }) {
  console.log(history);
  const token = localStorage.getItem('token');
  console.log(token);
  if (token) {
    history.push('/todo');
  }
  // const [user, setUser] = useState({
  //   userID: '',
  //   password: '',
  // });
  // const dispatch = useUserDispatch();

  // const onChange = (e) =>
  //   setUser({
  //     ...user,
  //     [e.target.name]: e.target.value,
  //   });
  console.log('test');
  const enterPress = (e) => {
    if (e.key === 'Enter') onSubmit();
  };
  const onSubmit = () => {
    // alert(`id = ${user.userID} pw = ${user.password}`);
    // dispatch({ type: 'LOGIN', user });
    userAction(history);
  };

  return (
    <>
      {!token && (
        <SignBox>
          <TitleBox>로그인</TitleBox>
          <InsertForm>
            <InputWrap>
              <InputBox
                id='userID'
                name='userID'
                placeholder='ID'
                autoFocus
                required={true}
              ></InputBox>
              <InputBox
                id='password'
                type='password'
                name='password'
                placeholder='PW'
                // onChange={onChange}
                // value={user.password}
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
        </SignBox>
      )}
    </>
  );
}
