import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { Sort } from "../interfaces";

interface ContextProps {
  sort: Sort;
  setSort: Dispatch<SetStateAction<Sort>>;
}

const Context = createContext<ContextProps>({
  sort: {
    category: "Job Title",
    order: "asc",
  },
  setSort: () => {},
});

interface Props {
  children: ReactNode;
}

export function SortProvider({ children }: Props) {
  const [sort, setSort] = useState<Sort>({
    category: "Job Title",
    order: "asc",
  });

  return <Context.Provider value={{ sort, setSort }}>{children}</Context.Provider>;
}

export function useSortContext() {
  return useContext(Context);
}
