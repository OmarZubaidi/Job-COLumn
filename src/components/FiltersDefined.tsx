import { H5, Icon, InputGroup } from '@blueprintjs/core';
import { ChangeEventHandler } from 'react';
import { MultiCity, Numeric } from '.';

interface Props {
  keywords: string;
  keywordsOnChange: ChangeEventHandler<HTMLInputElement>;
  numericOnChange: (valueAsNumber: number, valueAsString: string, inputElement: HTMLInputElement | null) => void;
}

export function FiltersDefined({ keywords, keywordsOnChange, numericOnChange }: Props) {
  return (
    <div>
      <H5>
        <Icon icon="filter" /> Filter
      </H5>
      {/* Keywords */}
      <div className="filter-details">
        <div className="filter-label">Keywords</div>
        <InputGroup
          className="filter-value"
          fill
          defaultValue={keywords}
          leftIcon="search"
          onChange={keywordsOnChange}
          placeholder="Keywords"
        />
      </div>
      {/* Locations */}
      <div className="filter-details">
        <div className="filter-label">Locations</div>
        <MultiCity className="filter-value" />
      </div>
      {/* Salary */}
      <div className="filter-details">
        <div className="filter-label">Salary</div>
        <Numeric className="filter-value" onValueChange={numericOnChange} placeholder="Minimum Salary" />
      </div>
    </div>
  );
}
