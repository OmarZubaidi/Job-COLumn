import { useEffect, useState } from "react";
import { Spinner } from "@blueprintjs/core";
// import { useFilteredJobsContext } from '../contexts/filteredJobs';
// import { useJobsContext } from '../contexts/jobs';
// import { getAllJobs } from "../api";
import JOBS from "../api/jobs.json";
import { JobListing, Sidebar } from "../components";
import { Job } from "../interfaces";
import "./jobs.scss";

export function Jobs() {
  // TODO bring back contexts
  // const [, setJobs] = useJobsContext();
  // const [filteredJobs, setFilteredJobs] = useFilteredJobsContext();
  const [isLoading, setIsLoading] = useState(true);
  // TODO deploy jobs JSON to GitHub pages
  useEffect(() => setIsLoading(true), []);
  // Get all jobs once
  // useEffect(() => {
  //   getAllJobs().then((result) => {
  //     setIsLoading(false);
  //     setJobs(result.slice(0, 200));
  //     setFilteredJobs(result.slice(0, 200));
  //   });
  // }, []);

  const filteredJobs: Job[] = JOBS;

  return (
    <main>
      <Sidebar />
      <div className="all-jobs">
        {filteredJobs.length ? (
          filteredJobs.map((job) => <JobListing key={job.jobId} job={job} />)
        ) : isLoading ? (
          <Spinner />
        ) : (
          "No jobs. Lower your expectations."
        )}
      </div>
    </main>
  );
}
