import { ReactElement } from "react";
import { CustomAnchor } from ".";

export function Footer(): ReactElement {
  return (
    <footer>
      <p>
        Powered by <CustomAnchor href="https://www.reed.co.uk/">Reed</CustomAnchor> and{" "}
        <CustomAnchor href="https://www.numbeo.com/">Numbeo</CustomAnchor>.
      </p>
      <p>
        Jobs API last updated on <span className="rose">May 10, 2023 at 19:36:23</span>
      </p>
    </footer>
  );
}
