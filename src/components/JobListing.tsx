import { Dialog, Icon } from '@blueprintjs/core';
import { useState } from 'react';
import CITIES from '../api/cities.json';
import { useUserContext } from '../contexts';
import { numberFormatter } from '../helpers';
import { Job } from '../interfaces';
import { JobDetails } from '.';
import './jobListing.scss';

interface Props {
  job: Job;
}

export function JobListing({ job }: Props) {
  const { jobTitle, minimumSalary, maximumSalary, date, expirationDate, employerName, locationName } = job;

  const { user } = useUserContext();
  const [isOpen, setIsOpen] = useState(false);

  // Salary math
  // Non-null assertions since data is filtered beforehand
  const userIndex = CITIES.find((city) => city.name === user.location)!.index;
  const jobIndex = CITIES.find((city) => city.name === locationName)!.index;
  const isBetter = minimumSalary / user.salary / (jobIndex / userIndex) > 1;

  return (
    <div
      className={`job-listing lighten-darken ${isBetter && 'rose'}`}
      onClick={() => setIsOpen(true)}
      style={{ cursor: 'pointer' }}
    >
      <Dialog
        isCloseButtonShown={false}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        title={jobTitle}
      >
        <JobDetails job={job} />
      </Dialog>
      {/* Title */}
      <div className="job-listing-row">
        <div className="job-listing-title">{jobTitle}</div>
      </div>
      {/* Salary */}
      <div className="job-listing-row">
        <div className="job-listing-salary">
          £{numberFormatter(minimumSalary)} - £{numberFormatter(maximumSalary)}
        </div>
      </div>
      {/* Dates */}
      <div className="job-listing-row job-listing-info">
        <div>Posted on {date}</div>
        <div>Expires on {expirationDate}</div>
      </div>
      {/* Company and location */}
      <div className="job-listing-row job-listing-info">
        <div>{employerName}</div>
        <div>
          <Icon icon="map-marker" /> {locationName}
        </div>
      </div>
    </div>
  );
}
