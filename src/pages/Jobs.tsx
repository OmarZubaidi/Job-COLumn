import { useEffect, useState } from "react";
import { Spinner } from "@blueprintjs/core";
import { useFilteredJobsContext, useJobsContext } from "../contexts";
import { getAllJobs } from "../api";
import { JobListing, Sidebar } from "../components";
import "./jobs.scss";

export function Jobs() {
  const { setJobs } = useJobsContext();
  const { filteredJobs, setFilteredJobs } = useFilteredJobsContext();
  const [isLoading, setIsLoading] = useState(true);

  // Get all jobs once
  const limit = 500;
  useEffect(() => {
    getAllJobs().then((result) => {
      setIsLoading(false);
      if (result == null) {
        setJobs([]);
        setFilteredJobs([]);
      } else {
        setJobs(result.slice(0, limit));
        setFilteredJobs(result.slice(0, limit));
      }
    });
  }, [setFilteredJobs, setJobs]);

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
