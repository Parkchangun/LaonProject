import { createContext, useContext, useReducer } from 'react';

const token = null;
// const token = '11123';
const initialUser = { token };

function userReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
    case 'SIGNUP':
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const UserStateContext = createContext();
const UserDispatchContext = createContext();

export function UserProvider({ children }) {
  const [userState, dispatch] = useReducer(userReducer, initialUser);

  return (
    <UserStateContext.Provider value={userState}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

export function useUserState() {
  const context = useContext(UserStateContext);
  if (!context) {
    throw new Error('Cannnot Find UserStateProvider');
  }
  return context;
}
export function useUserDispatch() {
  const context = useContext(UserDispatchContext);
  if (!context) {
    throw new Error('Cannnot Find UserDispatchProvider');
  }
  return context;
}
