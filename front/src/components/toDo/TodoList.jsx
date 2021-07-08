import React, { useEffect } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState, useTodoDispatch } from '../context/ToDoContext';
import ProgressBar from '@ramonak/react-progress-bar';
import { MainBlock } from '../../styles/CommonStyle';
import { getTodo } from '../../api/api';

const TaskBlock = styled.div`
  .tasks-left {
    color: #20c997;
    font-size: 1.2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }
`;

const TodoBlock = styled.div`
  ${MainBlock}
`;

function TodoList() {
  const todos = useTodoState();
  const dispatch = useTodoDispatch();
  const undoneTasks = todos.filter((todo) => !todo.done);
  const doneTasks = todos.filter((todo) => todo.done);

  const getTodoData = async () => {
    dispatch({ type: 'LOAD', getTodo });
  };

  useEffect(() => {
    getTodoData();
  }, []);

  return (
    <TodoBlock>
      <TaskBlock>
        <div className='tasks-left'>할 일 {undoneTasks.length}개 남음</div>
        {/* <progress value={doneTasks.length} max={todos.length}></progress> */}
        <ProgressBar
          completed={(doneTasks.length / todos.length) * 100}
          height='10px'
          isLabelVisible={false}
          bgColor='#20c997'
        />
      </TaskBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoBlock>
  );
}

export default TodoList;
