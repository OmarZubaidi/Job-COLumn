import { useSortContext } from '../contexts';
import { Option } from '../interfaces';
import { CustomButton, CustomSelect } from '.';

export function Sorts() {
  const { sort, setSort } = useSortContext();
  const { category } = sort;

  const options: Option[] = ['Location', 'Salary', 'Expiry Date', 'Posted Date', 'Job Title'];

  function onItemSelect(option: string) {
    setSort({
      ...sort,
      category: option as Option,
    });
  }

  return (
    <CustomSelect filterable={false} items={options} onItemSelect={onItemSelect}>
      <CustomButton text={category} icon="select" variant="secondary" />
    </CustomSelect>
  );
}
