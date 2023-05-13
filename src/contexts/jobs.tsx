import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { Job } from '../interfaces';

interface ContextProps {
  jobs: Job[];
  setJobs: Dispatch<SetStateAction<Job[]>>;
}

const Context = createContext<ContextProps>({
  jobs: [
    {
      jobId: 0,
      employerId: 0,
      employerName: '',
      employerProfileId: null,
      employerProfileName: null,
      jobTitle: '',
      locationName: '',
      minimumSalary: 0,
      maximumSalary: 0,
      currency: 'GBP',
      expirationDate: '',
      date: '',
      jobDescription: '',
      applications: 0,
      jobUrl: '',
    },
  ],
  setJobs: () => {},
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
