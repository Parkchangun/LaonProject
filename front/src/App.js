import React from 'react';
import { createGlobalStyle } from 'styled-components';
import MainTemplate from './components/toDo/MainTemplate';
import { TodoProvider } from './components/context/ToDoContext';
import { UserProvider } from './components/context/UserContext';
import { BrowserRouter } from 'react-router-dom';
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
  #root {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function App() {
  return (
    <UserProvider>
      <TodoProvider>
        <GlobalStyle />
        <BrowserRouter>
          <MainTemplate />
        </BrowserRouter>
      </TodoProvider>
    </UserProvider>
  );
}

export default App;
