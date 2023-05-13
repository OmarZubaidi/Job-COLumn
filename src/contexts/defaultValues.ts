import { Filter, Job, Sort, User } from '../interfaces';

export const defaultFilter: Filter = {
  keywords: '',
  cities: [],
  salary: 0,
};

export const defaultFunction = () => {};

export const defaultJobs: Job[] = [
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
    id: 0,
  },
];

export const defaultSort: Sort = {
  category: 'Job Title',
  order: 'asc',
};

export const defaultTheme: boolean = true;

export const defaultUser: User = {
  location: 'London',
  salary: 20_000,
};
