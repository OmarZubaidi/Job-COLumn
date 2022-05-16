// Local imports
import { siteName } from './siteName';

// Site description
export const introduction = (
  <div className='welcome-text'>
    <p>{siteName} is a job board that considers the cost of living.</p>
    <p>
      It compares the minimum salary in a listed job with your current salary!
      Magic!
    </p>
  </div>
);

export const functionality = (
  <div className='welcome-text'>
    <p>You'll be able to filter by:</p>
    <ul>
      <li>keywords</li>
      <li>location</li>
      <li>minimum salary</li>
    </ul>
    <p>You can also sort by any of:</p>
    <ul>
      <li>location name</li>
      <li>salary</li>
      <li>expiration date</li>
      <li>job title</li>
    </ul>
  </div>
);

export const privacyDisclosure = (
  <div className='welcome-text'>
    To use this app, provide your current location and salary to compare the
    consumer price index (CPI) with that of the one in each job's location.
  </div>
);
