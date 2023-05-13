import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { Job } from '../interfaces';
import { defaultFunction, defaultJobs } from '.';

interface ContextProps {
  filteredJobs: Job[];
  setFilteredJobs: Dispatch<SetStateAction<Job[]>>;
}

const Context = createContext<ContextProps>({
  filteredJobs: defaultJobs,
  setFilteredJobs: defaultFunction,
});

interface Props {
  children: ReactNode;
}

export function FilteredJobsProvider({ children }: Props) {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);

  return <Context.Provider value={{ filteredJobs, setFilteredJobs }}>{children}</Context.Provider>;
}

export function useFilteredJobsContext() {
  return useContext(Context);
}
