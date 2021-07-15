import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../context/ToDoContext';
import { deleteTodo, updateTodo } from '../../api/api';

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;

  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const InsertForm = styled.form`
  flex: 1;
`;

const Text = styled.input`
  font-size: 21px;
  color: #495057;
  border: none;
  outline: none;

  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  &:hover {
    ${Remove} {
      display: flex;
    }
  }
`;

function TodoItem({ id, done, content }) {
  const dispatch = useTodoDispatch();
  const [value, setValue] = useState(content);
  const userID = localStorage.getItem('token');

  //Update Code
  const onToggle = () => {
    (async () => {
      const newList = {
        listNum: id,
        userID: userID,
        content: value,
        done: !done,
      };

      const todo = await updateTodo(newList);

      dispatch({
        type: 'LOAD',
        todo,
      });
    })();
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    (async () => {
      const newList = {
        listNum: id,
        userID: userID,
        content: value,
        done: done,
      };

      const todo = await updateTodo(newList);

      dispatch({
        type: 'LOAD',
        todo,
      });
    })();
  };

  const onRemove = () => {
    (async () => {
      const newList = {
        listNum: id,
        userID: userID,
      };

      const todo = await deleteTodo(newList);

      dispatch({
        type: 'LOAD',
        todo,
      });
    })();
  };

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <InsertForm onSubmit={onSubmit}>
        <Text done={done} value={value} onChange={onChange}></Text>
      </InsertForm>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
