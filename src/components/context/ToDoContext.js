import React, { createContext, useContext, useReducer } from 'react';

// const initialTodos = [
//   {
//     id: 100,
//     text: '프로젝트 생성하기',
//     done: true,
//   },
//   {
//     id: 101,
//     text: '컴포넌트 스타일링하기',
//     done: true,
//   },
//   {
//     id: 102,
//     text: 'Context 만들기',
//     done: false,
//   },
//   {
//     id: 103,
//     text: '기능 구현하기',
//     done: false,
//   },
// ];
const initialTodos = [];

function todoReducer(state, action) {
  switch (action.type) {
    case 'LOAD': {
      console.log(action);
      return (state = action.todo);
    }
    // case 'CREATE': {
    //   (async () => {
    //     await createTodo(action.todo);
    //   })();
    //   console.log(state);
    //   return state;
    // }
    // // return state.concat(action.todo);
    // case 'TOGGLE':
    //   return state.map((todo) =>
    //     todo.id === action.id ? { ...todo, done: !todo.done } : todo
    //   );
    // case 'UPDATE':
    //   return state.map((todo) =>
    //     todo.id === action.id ? { ...todo, content: action.value } : todo
    //   );
    // case 'REMOVE': {
    //   const temp = state.filter((todo) => todo.content !== action.content);
    //   return temp.map((todo) =>
    //     todo.id > action.id ? { ...todo, id: todo.id - 1 } : todo
    //   );
    // }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
//const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [todoState, dispatch] = useReducer(todoReducer, initialTodos);
  // const nextId = useRef(1);

  return (
    <TodoStateContext.Provider value={todoState}>
      <TodoDispatchContext.Provider value={dispatch}>
        {/* <TodoNextIdContext.Provider value={nextId}> */}
        {children}
        {/* </TodoNextIdContext.Provider> */}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error('Cannot Find TodoStateProvider');
  }
  return context;
}
export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error('Cannot Find TodoDispatchProvider');
  }
  return context;
}
// export function useTodoNextId() {
//   const context = useContext(TodoNextIdContext);
//   if (!context) {
//     throw new Error('Cannot Find TodoProvider');
//   }
//   return context;
// }
