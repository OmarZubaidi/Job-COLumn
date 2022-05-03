import { MenuItem } from '@blueprintjs/core';
import { item } from './interfaces';

export function filterer (query: string, item: item) {
  if (item?.name) {
    return item.name
      .toLowerCase()
      .indexOf(query.toLowerCase()) >= 0;
  }
}

// TODO types
export function renderer (item: item, { handleClick, modifiers }) {
  if (!modifiers.matchesPredicate) return null;
  console.log(handleClick);
  return (
    <MenuItem
      key={item?.name ? item.name : item}
      onClick={handleClick}
      selected={modifiers.active}
      text={item?.name ? item.name : item}
    />
  )
}
