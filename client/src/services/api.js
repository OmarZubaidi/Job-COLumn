// Package imports
import axios from 'axios';

// Local imports
const rootUrl = 'https://job-column.herokuapp.com';

export async function getAllJobs() {
  try {
    const jobs = await axios.get(`${rootUrl}/jobs`);
    return jobs.data;
  } catch (error) {
    console.error('Error getting all jobs:', error.message);
  }
}
