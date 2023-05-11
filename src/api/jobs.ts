const rootUrl = "http://localhost:3000/Job-Column";

export async function getAllJobs() {
  try {
    // TODO replace rootUrl with JSON deployed on GitHub pages
    const jobs = await fetch(`${rootUrl}/jobs`);
    return await jobs.json();
  } catch (error) {
    console.error(error);
  }
}
