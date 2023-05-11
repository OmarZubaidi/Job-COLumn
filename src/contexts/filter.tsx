import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { Filter } from "../interfaces";

interface ContextProps {
  filters: Filter;
  setFilters: Dispatch<SetStateAction<Filter>>;
}

const Context = createContext<ContextProps>({
  filters: {
    keywords: "",
    cities: [],
    salary: 0,
  },
  setFilters: () => {},
});

interface Props {
  children: ReactNode;
}

export function FilterProvider({ children }: Props) {
  const [filters, setFilters] = useState<Filter>({
    keywords: "",
    cities: [],
    salary: 0,
  });

  return <Context.Provider value={{ filters, setFilters }}>{children}</Context.Provider>;
}

export function useFilterContext() {
  return useContext(Context);
}
