import { MenuItem } from "@blueprintjs/core";
import { MouseEventHandler } from "react";

// To display only the queried items
// TODO any could be City? Maybe a string?
export function filterer(query: string, item: any): boolean {
  if (item?.name) item = item.name;
  return item.toLowerCase().indexOf(query.toLowerCase()) >= 0;
}

// To display each item in the list
// TODO no any
export function renderer(
  item: any,
  { handleClick, modifiers }: { handleClick: MouseEventHandler<HTMLElement>; modifiers: any }
) {
  if (!modifiers.matchesPredicate) return null;
  return (
    <MenuItem
      key={item?.name ? item.name : item}
      onClick={handleClick}
      selected={modifiers.active}
      text={item?.name ? item.name : item}
    />
  );
}
