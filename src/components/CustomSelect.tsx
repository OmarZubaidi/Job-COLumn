import { Select } from "@blueprintjs/select";
import { ReactNode, SyntheticEvent } from "react";
import { filterer, renderer } from "../helpers";

interface Props {
  children: ReactNode;
  filterable: boolean;
  icon: any;
  items: any[];
  onItemSelect: (item: any, event?: SyntheticEvent<HTMLElement>) => void;
  text: string;
}

export function CustomSelect({ children, filterable, icon, items, onItemSelect, text }: Props) {
  // TODO migrate to Select2
  return (
    <Select
      activeItem={text}
      filterable={filterable}
      itemPredicate={filterer}
      itemRenderer={renderer}
      items={items}
      // TODO remove ts-ignore
      // @ts-ignore
      leftIcon={icon}
      onItemSelect={onItemSelect}
    >
      {children}
    </Select>
  );
}
