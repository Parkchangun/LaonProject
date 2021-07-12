import { createContext, useContext, useReducer } from 'react';
import { login, signup } from '../../api/api';

const token = null;
// const token = '11123';
const initialUser = { token };

function userReducer(state, action) {
  switch (action.type) {
    case 'LOGIN': {
      console.log(action);
      console.log(state);
      // login(action.data);
      return state;
    }
    case 'SIGNUP':
      return signup(action.user);
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
