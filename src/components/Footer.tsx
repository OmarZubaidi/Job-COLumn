import { ReactElement } from 'react';
import { CustomAnchor } from '.';

export function Footer(): ReactElement {
  return (
    <footer>
      <p>
        Powered by <CustomAnchor href="https://www.reed.co.uk/">Reed</CustomAnchor> and{' '}
        <CustomAnchor href="https://www.numbeo.com/">Numbeo</CustomAnchor>.
      </p>
      <p>
        Jobs API last updated on <span className="rose">May 13 2023 08:18:26</span> UTC.
      </p>
    </footer>
  );
}
