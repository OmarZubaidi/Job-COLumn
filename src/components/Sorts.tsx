import { useState } from "react";
// import { useSortContext } from '../contexts/sort';
import { CustomButton, CustomSelect } from ".";

export function Sorts() {
  // TODO bring back contexts
  // const [sort, setSort] = useSortContext();
  const [sort, setSort] = useState({ category: "Location" });
  const { category } = sort;

  const options = ["Location", "Salary", "Expiry Date", "Posted Date", "Job Title"];

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
