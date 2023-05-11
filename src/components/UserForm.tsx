import { FormGroup } from "@blueprintjs/core";
import { MouseEvent, ReactElement } from "react";
import { Cities, CustomButton, Numeric, ToggleDarkMode } from ".";

interface Props {
  defaultValue: number;
  onValueChange: (valueAsNumber: number, valueAsString: string, inputElement: HTMLInputElement | null) => void;
  buttonOnClick: (event: MouseEvent<HTMLElement>) => void;
}

export function UserForm({ defaultValue, onValueChange, buttonOnClick }: Props): ReactElement {
  return (
    <FormGroup inline>
      <div>
        <p>Current Location</p>
        <Cities />
      </div>
      <div>
        <p>Current Salary</p>
        <div id="user-salary">
          <Numeric defaultValue={defaultValue} fill={false} onValueChange={onValueChange} />
        </div>
      </div>
      <div id="user-buttons">
        <ToggleDarkMode />
        <CustomButton onClick={buttonOnClick} text="Start" icon="key-enter" variant="primary" />
      </div>
    </FormGroup>
  );
}
