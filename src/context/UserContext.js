import React, { createContext, useReducer } from 'react';

// 1. Criando o contexto
export const UserContext = createContext();

// 2. Definindo o estado inicial
const initialState = { user: null };

// 3. Definindo o reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
};

// 4. Definindo o Provider
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
  