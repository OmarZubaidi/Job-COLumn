import { MenuItem } from '@blueprintjs/core';
import { ItemModifiers } from '@blueprintjs/select';
import { MouseEventHandler } from 'react';

// To display only the queried items
export function filterer(query: string, item: string): boolean {
  return item.toLowerCase().indexOf(query.toLowerCase()) >= 0;
}

// To display each item in the list
export function renderer(
  item: string,
  { handleClick, modifiers }: { handleClick: MouseEventHandler<HTMLElement>; modifiers: ItemModifiers }
) {
  if (!modifiers.matchesPredicate) return null;
  return <MenuItem key={item} onClick={handleClick} selected={modifiers.active} text={item} />;
}
