import { ReactElement, ReactNode } from 'react';

interface Props {
  href: string;
  children: ReactNode;
}

export function CustomAnchor({ children, href }: Props): ReactElement {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
