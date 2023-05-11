export interface City {
  name: string;
  index: number;
  latitude: number;
  longitude: number;
}

export interface Filter {
  keywords: string;
  // TODO string or City?
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
}

export interface Sort {
  category: "Location" | "Salary" | "Expiry Date" | "Posted Date" | "Job Title";
  order: "asc" | "desc";
}

export interface User {
  location: string;
  salary: number;
}
