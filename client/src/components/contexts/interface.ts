export interface filter {
  keywords: string,
    cities: any[],
    salary: number
}

export interface job {
    employerName: string,
    locationName: string,
    minimumSalary: number,
    maximumSalary: number,
    expirationDate: string,
    date: string,
    jobTitle: string,
    jobDescription: string
}
