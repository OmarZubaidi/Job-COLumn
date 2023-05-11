import { ReactElement } from "react";
import CITIES from "../api/cities.json";
import { useUserContext } from "../contexts";
import { City } from "../interfaces";
import { CustomButton, CustomSelect } from ".";

export function Cities(): ReactElement {
  const { user, setUser } = useUserContext();
  const { location } = user;

  // Select's onItemSelect
  function onItemSelect(city: City) {
    setUser({
      ...user,
      location: city.name,
    });
  }

  return (
    // TODO remove ts-ignore
    // @ts-ignore
    <CustomSelect items={CITIES} leftIcon="locate" onItemSelect={onItemSelect} text={location}>
      <CustomButton text={location} icon="locate" variant="secondary" />
    </CustomSelect>
  );
}
