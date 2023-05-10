const rootUrl = "http://localhost:3000/Job-Column";

export async function getAllJobs() {
  try {
    const jobs = await fetch(`${rootUrl}/jobs`);
    return await jobs.json();
  } catch (error) {
    console.error(error);
  }
}
