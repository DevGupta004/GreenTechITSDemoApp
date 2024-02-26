// MyContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context
const MyContext = createContext();

// Create a custom hook to consume the context
export const useMyContext = () => useContext(MyContext);

// Create a provider component
export const MyProvider = ({ children }) => {
  const [data, setData] = useState('Initial Data');

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};
