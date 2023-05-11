import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { User } from "../interfaces";

interface ContextProps {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const Context = createContext<ContextProps>({
  user: {
    location: "London",
    salary: 20_000,
  },
  setUser: () => {},
});

interface Props {
  children: ReactNode;
}

export function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User>({
    location: "London",
    salary: 20_000,
  });

  return <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>;
}

export function useUserContext() {
  return useContext(Context);
}
