// Package imports
import { createContext, useContext, useState } from 'react';
import {sort} from '../../interfaces'

const Context = createContext(null);

export function SortProvider ({ children }) {
  // States
  const [sort, setSort] = useState<sort | null>({
    category: 'Job Title',
    order: 'asc'
  });

  return (
    <Context.Provider value={[sort, setSort]}>
      {children}
    </Context.Provider>
  );
}

export function useSortContext () {
  return useContext(Context);
}
