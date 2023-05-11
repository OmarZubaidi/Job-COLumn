import { Job } from "../interfaces";

const jobsUrl = "https://raw.githubusercontent.com/OmarZubaidi/OmarZubaidi/main/Job-COLumn-Data/jobs.json";

export async function getAllJobs() {
  try {
    const jobs = await fetch(jobsUrl);
    const json: Job[] = await jobs.json();
    return [...new Set(json)];
  } catch (error) {
    console.error(error);
  }
}
