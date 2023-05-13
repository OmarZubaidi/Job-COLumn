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
    // TODO remove ts-ignore
    // @ts-ignore
    <CustomSelect items={CITIES.map((city) => city.name)} leftIcon="locate" onItemSelect={onItemSelect} text={location}>
      <CustomButton text={location} icon="locate" variant="secondary" />
    </CustomSelect>
  );
}
