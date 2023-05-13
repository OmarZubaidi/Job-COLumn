import { MultiSelect2 } from '@blueprintjs/select';
import CITIES from '../api/cities.json';
import { useFilterContext } from '../contexts';
import { filterer, renderer } from '../helpers';

interface Props {
  className?: string;
}

export function MultiCity({ className }: Props) {
  const { filters, setFilters } = useFilterContext();
  const { cities } = filters;

  function onItemSelect(city: string) {
    let newCities = [];

    if (cities.includes(city)) newCities = cities.filter((selectedCity) => selectedCity !== city);
    else newCities = cities.concat(city).sort();

    setFilters({
      ...filters,
      cities: newCities,
    });
  }

  function tagRenderer(city: string) {
    return <>{city}</>;
  }

  function onRemove(city: string) {
    setFilters({
      ...filters,
      cities: cities.filter((selectedCity) => selectedCity !== city),
    });
  }

  return (
    <MultiSelect2
      className={className}
      fill
      itemPredicate={filterer}
      itemRenderer={renderer}
      items={CITIES.map((city) => city.name)}
      onItemSelect={onItemSelect}
      onRemove={onRemove}
      placeholder="Desired City/Cities"
      resetOnSelect
      selectedItems={cities}
      tagRenderer={tagRenderer}
    />
  );
}
