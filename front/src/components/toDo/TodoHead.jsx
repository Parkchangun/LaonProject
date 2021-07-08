import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
  padding-top: 2rem;
  padding-left: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e9ecef;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);
  background-color: #5da0e4;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #343a40;
    font-size: 21px;
  }
`;

function TodoHead() {
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
    </TodoHeadBlock>
  );
}

export default TodoHead;
