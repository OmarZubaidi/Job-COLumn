// Package imports
import { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider ({ children }) {

  const [user, setUser] = useState({
    location: 'London',
    salary: 20_000
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext () {
  return useContext(UserContext);
}
