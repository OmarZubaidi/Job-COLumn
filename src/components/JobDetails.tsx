import { decode } from "he";
import { useUserContext } from "../contexts";
import { numberFormatter } from "../helpers";
import { Job } from "../interfaces";
import { CustomAnchor, CustomButton, Map } from ".";
import "./details.scss";

interface Props {
  job: Job;
}

export function JobDetails({ job }: Props) {
  const { date, employerName, expirationDate, jobDescription, jobUrl, locationName, minimumSalary, maximumSalary } =
    job;
  const { user } = useUserContext();

  return (
    <div className="details">
      {/* Salary and Apply button */}
      <div className="details-row">
        <div className="job-salary">
          £{numberFormatter(minimumSalary)} - £{numberFormatter(maximumSalary)}
        </div>
        <div>
          <CustomAnchor href={jobUrl}>
            <CustomButton ariaLabel="Apply" icon="open-application" text="Apply" variant="primary" />
          </CustomAnchor>
        </div>
      </div>
      {/* Dates */}
      <div className="details-row">
        <div>Posted on {date}</div>
        <div>Expires on {expirationDate}</div>
      </div>
      {/* Company name */}
      <div className="details-row">
        <div>Employer: {employerName}</div>
      </div>
      {/* Map */}
      <div className="details-row map">
        <Map userLocation={user.location} jobLocation={locationName} />
      </div>
      {/* Job description */}
      <div className="description">
        {/* This gets rid of the '$#number;' in the job description */}
        {decode(jobDescription)}
      </div>
    </div>
  );
}
