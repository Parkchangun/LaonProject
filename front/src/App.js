import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/toDo/TodoTemplate';
import TodoHead from './components/toDo/TodoHead';
import TodoList from './components/toDo/TodoList';
import TodoCreate from './components/toDo/TodoCreate';
import { TodoProvider } from './components/context/ToDoContext';
//server
//import customAxios from './server/customAxios';
//import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    // <Router>
    //   <div className='App'>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to='/'>홈</Link>
    //         </li>
    //         <li>
    //           <Link to='/about'>소개</Link>
    //         </li>
    //         <li>
    //           <Link to='/users'>사용자</Link>
    //         </li>
    //       </ul>
    //     </nav>

    //     {/* <Switch>는 하위 <Route>들을 살펴보고 현재 URL과 일치하는 첫 번째 경로를 렌더링합니다. */}
    //     <Switch>
    //       <Route path='/about'>
    //         <About />
    //       </Route>
    //       <Route path='/users'>
    //         <Users />
    //       </Route>
    //       <Route path='/'>
    //         <Home />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

// function Home() {
//   //IP주소 변수 선언
//   const [ip, setIp] = useState('');

//   //IP주소 값 설정
//   function callback(data) {
//     setIp(data);
//   }

//   //첫 렌더링 마친 후 실행
//   useEffect(() => {
//     //클라이언트의 IP주소를 알아내는 백엔드 함수 호출
//     customAxios('/ip', callback);
//   }, []);

//   return <header className='App-header'>이 기기의 IP 주소는 {ip}</header>;
// }

// function About() {
//   return (
//     <div>
//       <hr />
//       <h2>소개 페이지</h2>
//     </div>
//   );
// }

// function Users() {
//   return (
//     <div>
//       <hr />
//       <h2>사용자 페이지</h2>
//     </div>
//   );
// }

export default App;
