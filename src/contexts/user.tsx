import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { User } from '../interfaces';
import { defaultFunction, defaultUser } from '.';

interface ContextProps {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const Context = createContext<ContextProps>({
  user: defaultUser,
  setUser: defaultFunction,
});

interface Props {
  children: ReactNode;
}

export function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User>({
    location: 'London',
    salary: 20_000,
  });

  return <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>;
}

export function useUserContext() {
  return useContext(Context);
}
