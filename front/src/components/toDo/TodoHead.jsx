import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../context/ToDoContext';
import ProgressBar from '@ramonak/react-progress-bar';

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;

  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
  progress {
    width: 100%;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);
  const doneTasks = todos.filter((todo) => todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className='day'>{dayName}</div>
      <div className='tasks-left'>할 일 {undoneTasks.length}개 남음</div>
      {/* <progress value={doneTasks.length} max={todos.length}></progress> */}
      <ProgressBar
        completed={(doneTasks.length / todos.length) * 100}
        height='10px'
        isLabelVisible={false}
        bgColor='#20c997'
      />
    </TodoHeadBlock>
  );
}

export default TodoHead;
