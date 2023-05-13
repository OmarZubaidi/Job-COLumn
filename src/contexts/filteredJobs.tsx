import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { Job } from '../interfaces';

interface ContextProps {
  filteredJobs: Job[];
  setFilteredJobs: Dispatch<SetStateAction<Job[]>>;
}

const Context = createContext<ContextProps>({
  filteredJobs: [
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
  setFilteredJobs: () => {},
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
