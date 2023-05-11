import { MultiSelect } from "@blueprintjs/select";
import CITIES from "../api/cities.json";
import { useFilterContext } from "../contexts";
import { filterer, renderer } from "../helpers";
import { City } from "../interfaces";

// TODO no any
interface Props {
  className?: string;
  defaultValue?: any;
}

export function MultiCity({ className, defaultValue }: Props) {
  const { filters, setFilters } = useFilterContext();
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
  // TODO remove ts-ignore
  return (
    <MultiSelect
      className={className}
      fill
      itemPredicate={filterer}
      itemRenderer={renderer}
      // @ts-ignore
      items={CITIES}
      // TODO remove ts-ignore
      // @ts-ignore
      onItemSelect={onItemSelect}
      // @ts-ignore
      onRemove={onRemove}
      placeholder="Desired City/Cities"
      resetOnSelect
      // @ts-ignore
      selectedItems={cities}
      // @ts-ignore
      tagRenderer={tagRenderer}
    />
  );
}
