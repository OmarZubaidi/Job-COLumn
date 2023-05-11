const jobsUrl = "https://raw.githubusercontent.com/OmarZubaidi/OmarZubaidi/main/Job-COLumn-Data/jobs.json";

export async function getAllJobs() {
  try {
    const jobs = await fetch(jobsUrl);
    return await jobs.json();
  } catch (error) {
    console.error(error);
  }
}
