import { Select2 } from '@blueprintjs/select';
import { ReactNode, SyntheticEvent } from 'react';
import { filterer, renderer } from '../helpers';

interface Props {
  children: ReactNode;
  filterable?: boolean;
  items: string[];
  onItemSelect: (item: string, event?: SyntheticEvent<HTMLElement>) => void;
  text: string;
}

export function CustomSelect({ children, filterable, items, onItemSelect, text }: Props) {
  return (
    <Select2
      activeItem={text}
      filterable={filterable}
      itemPredicate={filterer}
      itemRenderer={renderer}
      items={items}
      onItemSelect={onItemSelect}
    >
      {children}
    </Select2>
  );
}
