import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoState } from '../context/ToDoContext';
import { Input } from '../../styles/CommonStyle';

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px 32px 72px 32px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const InputBox = styled.input`
  ${Input}
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const state = useTodoState();
  const dispatch = useTodoDispatch();
  // const nextId = useTodoNextId();
  const res = Math.max.apply(
    Math,
    state.map(function (o) {
      return o.id;
    })
  );

  const onToggle = () => setOpen(!open);
  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault(); //새로고침 방지
    dispatch({
      type: 'CREATE',
      todo: {
        id: res + 1,
        text: value,
        done: false,
      },
    });
    setValue('');
    setOpen(false);
    // nextId.current += 1;
  };

  useEffect(() => {
    return () => {
      setValue('');
    };
  }, [open]);

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <InputBox
              autoFocus
              placeholder='할 일 입력 후, 엔터 ㄱ'
              onChange={onChange}
              value={value}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(TodoCreate);
