import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 30rem;
  height: 45rem;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
