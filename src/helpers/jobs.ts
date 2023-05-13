import { Job } from '../interfaces';

interface FilterProps {
  keywords: string;
  cities: string[];
  salary: number;
}

export function filterJobs(jobs: Job[], { keywords, cities, salary }: FilterProps) {
  return jobs.filter((job) => {
    let result = true;
    if (keywords) {
      result &&= keywords
        .split(' ')
        .every(
          (keyword) =>
            job.jobTitle.toLowerCase().includes(keyword.toLowerCase()) ||
            job.jobDescription.toLowerCase().includes(keyword.toLowerCase())
        );
    }
    if (cities.length) {
      result &&= cities.includes(job.locationName);
    }
    if (salary) {
      result &&= job.minimumSalary >= salary;
    }
    return result;
  });
}
