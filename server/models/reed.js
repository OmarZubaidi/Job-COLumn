// Package imports
const axios = require('axios');

// API key encoding
const reedApiToken = process.env.REED_API_KEY;
const encodedApiKey = btoa(`${reedApiToken}:`);

// Cost of Living indices
const indices = require('./cities.json');
const keywords = ['software'];
let jobPostings = [];
const promises = [];

module.exports = async function getJobsFromReed() {
  console.log('getJobsFromReed()');
  for (let i = 0; i < 100; i++) {
    let promise = getData(searchUrlCreator(keywords.join('+'), i)).then(
      (response) => {
        jobPostings.push(
          ...response.results.filter((job) => {
            return (
              job.minimumSalary &&
              // If it's not in the database, can't do CPI math
              indices.map((city) => city.name).includes(job.locationName)
            );
          })
        );
      }
    );
    promises.push(promise);
  }

  return Promise.allSettled(promises).then((_) => {
    console.log(jobPostings.length + ' jobs');
    return JSON.stringify(jobPostings);
  });
};

// -----------------------------------------------------------------------------

// Get the data
async function getData(url) {
  try {
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${encodedApiKey}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Creates the URL for the GET request of the job postings search.
 * @param keywords String: Separate the keywords using '+'
 * @param page Number: 0 indexed.
 * @returns String: The URL.
 */
function searchUrlCreator(keywords, page = 0) {
  const initialUrl = `https://www.reed.co.uk/api/1.0/search?keywords=${keywords}&fullTime=true`;
  const offset = 100 * page;

  let url = initialUrl;
  // If getting the next page
  url = offset ? url + `&resultsToSkip=${offset}` : url;
  return url;
}
