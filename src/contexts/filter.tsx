import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { Filter } from '../interfaces';
import { defaultFilter, defaultFunction } from '.';

interface ContextProps {
  filters: Filter;
  setFilters: Dispatch<SetStateAction<Filter>>;
}

const Context = createContext<ContextProps>({
  filters: defaultFilter,
  setFilters: defaultFunction,
});

interface Props {
  children: ReactNode;
}

export function FilterProvider({ children }: Props) {
  const [filters, setFilters] = useState<Filter>({
    keywords: '',
    cities: [],
    salary: 0,
  });

  return <Context.Provider value={{ filters, setFilters }}>{children}</Context.Provider>;
}

export function useFilterContext() {
  return useContext(Context);
}
