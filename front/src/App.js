import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/toDo/TodoTemplate';
import TodoHead from './components/toDo/TodoHead';
import TodoList from './components/toDo/TodoList';
import TodoCreate from './components/toDo/TodoCreate';
import { TodoProvider } from './components/context/ToDoContext';
import Login from './components/users/Login';
// import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

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
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        {/* <Login></Login> */}
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
