import { MultiSelect } from "@blueprintjs/select";
import { useState } from "react";
import CITIES from "../api/cities.json";
// import { useFilterContext } from '../contexts/filter';
import { filterer, renderer } from "../helpers";
import { City } from "../interfaces";

interface Props {
  className?: string;
  defaultValue?: any;
}

export function MultiCity({ className, defaultValue }: Props) {
  // TODO bring back contexts
  // const [filters, setFilters] = useFilterContext();
  const [filters, setFilters] = useState({ cities: ["London", "Manchester"] });
  const { cities } = filters;

  function onItemSelect(city: City) {
    let newCities = [];

    if (cities.includes(city.name)) newCities = cities.filter((selectedCity) => selectedCity !== city.name);
    else newCities = cities.concat(city.name).sort();

    setFilters({
      ...filters,
      cities: newCities,
    });
  }

  function tagRenderer(city: City) {
    return <>{city}</>;
  }

  // TODO is it a City or a string?
  function onRemove(city: City) {
    setFilters({
      ...filters,
      // TODO remove ts-ignore
      // @ts-ignore
      cities: cities.filter((selectedCity) => selectedCity !== city),
    });
  }

  // TODO migrate to MultiSelect2
  return (
    <MultiSelect
      // TODO remove ts-ignore
      // @ts-ignore
      activeItem={cities}
      className={className}
      defaultValue={defaultValue}
      fill
      itemPredicate={filterer}
      itemRenderer={renderer}
      // TODO remove ts-ignore
      // @ts-ignore
      items={CITIES}
      // TODO remove ts-ignore
      // @ts-ignore
      onItemSelect={onItemSelect}
      // TODO remove ts-ignore
      // @ts-ignore
      onRemove={onRemove}
      placeholder="Desired City/Cities"
      resetOnSelect
      // TODO remove ts-ignore
      // @ts-ignore
      selectedItems={cities}
      // TODO remove ts-ignore
      // @ts-ignore
      tagRenderer={tagRenderer}
    />
  );
}
