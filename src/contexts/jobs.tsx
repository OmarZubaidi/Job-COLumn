import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { Job } from '../interfaces';
import { defaultFunction, defaultJobs } from '.';

interface ContextProps {
  jobs: Job[];
  setJobs: Dispatch<SetStateAction<Job[]>>;
}

const Context = createContext<ContextProps>({
  jobs: defaultJobs,
  setJobs: defaultFunction,
});

interface Props {
  children: ReactNode;
}

export function JobsProvider({ children }: Props) {
  const [jobs, setJobs] = useState<Job[]>([]);

  return <Context.Provider value={{ jobs, setJobs }}>{children}</Context.Provider>;
}

export function useJobsContext() {
  return useContext(Context);
}
