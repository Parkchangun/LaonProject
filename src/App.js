import React from 'react';
import { createGlobalStyle } from 'styled-components';
import MainTemplate from './components/container/MainTemplate';

// import { UserProvider } from './components/context/UserContext';
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
    // <UserProvider>
    <>
      <GlobalStyle />
      <BrowserRouter>
        <MainTemplate />
      </BrowserRouter>
    </>
    // </UserProvider>
  );
}

export default App;
