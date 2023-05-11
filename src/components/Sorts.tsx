import { useSortContext } from "../contexts";
import { CustomButton, CustomSelect } from ".";

export function Sorts() {
  const { sort, setSort } = useSortContext();
  const { category } = sort;

  const options = ["Location", "Salary", "Expiry Date", "Posted Date", "Job Title"];

  // TODO no any
  function onItemSelect(option: any) {
    setSort({
      ...sort,
      category: option,
    });
  }

  return (
    <CustomSelect
      // TODO remove ts-ignore
      // @ts-ignore
      activeItem={category}
      filterable={false}
      items={options}
      leftIcon="select"
      onItemSelect={onItemSelect}
    >
      <CustomButton text={category} icon="select" variant="secondary" />
    </CustomSelect>
  );
}
