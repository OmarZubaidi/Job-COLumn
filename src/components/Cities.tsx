import { ReactElement } from 'react';
import CITIES from '../api/cities.json';
import { useUserContext } from '../contexts';
import { CustomButton, CustomSelect } from '.';

export function Cities(): ReactElement {
  const { user, setUser } = useUserContext();
  const { location } = user;

  function onItemSelect(city: string) {
    setUser({
      ...user,
      location: city,
    });
  }

  return (
    <CustomSelect items={CITIES.map((city) => city.name)} onItemSelect={onItemSelect}>
      <CustomButton text={location} icon="locate" variant="secondary" />
    </CustomSelect>
  );
}
