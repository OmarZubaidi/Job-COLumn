export interface Filter {
  keywords: string;
  cities: string[];
  salary: number;
}

export interface Job {
  jobId: number;
  employerId: number;
  employerName: string;
  employerProfileId: number | null;
  employerProfileName: string | null;
  jobTitle: string;
  locationName: string;
  minimumSalary: number;
  maximumSalary: number;
  currency: string;
  expirationDate: string;
  date: string;
  jobDescription: string;
  applications: number;
  jobUrl: string;
  id: number;
}

export type Option = 'Location' | 'Salary' | 'Expiry Date' | 'Posted Date' | 'Job Title';

export interface Sort {
  category: Option;
  order: 'asc' | 'desc';
}

export interface User {
  location: string;
  salary: number;
}
