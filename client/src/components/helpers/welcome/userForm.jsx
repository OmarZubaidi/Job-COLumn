// Package imports
import { FormGroup } from '@blueprintjs/core';

// Local imports
import Cities from '../../small/input/cities';
import Numeric from '../../small/input/numeric';
import Button from '../../small/buttons/primaryButton';
import ToggleDarkMode from '../../small/buttons/toggleDarkMode';

export function userForm({ defaultValue, onValueChange, buttonOnClick }) {
  return (
    <FormGroup inline>
      <div>
        <p>Current Location</p>
        <Cities />
      </div>
      <div>
        <p>Current Salary</p>
        <div id='user-salary'>
          <Numeric
            defaultValue={defaultValue}
            fill={'false'}
            onValueChange={onValueChange}
          />
        </div>
      </div>
      <div id='user-buttons'>
        <ToggleDarkMode />
        <Button onClick={buttonOnClick} text='Start' icon='key-enter' />
      </div>
    </FormGroup>
  );
}
