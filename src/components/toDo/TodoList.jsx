import React, { useEffect } from 'react';
import styled from 'styled-components';
import ProgressBar from '@ramonak/react-progress-bar';
import { MainBlock } from '../../styles/CommonStyle';
import TodoItem from './TodoItem';
import { useTodoState, useTodoDispatch } from '../context/ToDoContext';
import { readTodo } from '../../api/todoAPI';

const TodoBlock = styled.div`
  ${MainBlock}
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    width: 8px;
    background-color: #20c997;
    border-radius: 16px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 16px;
    background-color: rgba(0, 0, 0, 0.3);
  }
  border: 5px solid white;
`;

const TaskBlock = styled.div`
  .tasks-left {
    color: #20c997;
    font-size: 1.2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }
`;

function TodoList() {
  const todos = useTodoState();
  const dispatch = useTodoDispatch();
  const undoneTasks = todos.filter((todo) => !todo.done);
  const doneTasks = todos.filter((todo) => todo.done);

  console.log(todos);

  //로그인 후 최초 다운로드
  useEffect(() => {
    console.log('effect');
    (async () => {
      const todo = await readTodo();
      console.log(todo);
      dispatch({ type: 'LOAD', todo });
    })();
  }, []);

  return (
    <TodoBlock>
      <TaskBlock>
        <div className='tasks-left'>할 일 {undoneTasks.length}개 남음</div>
        <ProgressBar
          completed={(doneTasks.length / todos.length) * 100}
          height='10px'
          isLabelVisible={false}
          bgColor='#20c997'
        />
      </TaskBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.listNum}
          id={todo.listNum}
          content={todo.content}
          done={todo.done}
        />
      ))}
    </TodoBlock>
  );
}

export default TodoList;
