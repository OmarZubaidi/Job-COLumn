import { Classes, Button, IconName, Intent, MaybeElement } from "@blueprintjs/core";
import { MouseEvent } from "react";

interface Props {
  ariaLabel?: string;
  icon: IconName | MaybeElement;
  id?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  text?: string;
  variant: "primary" | "secondary";
}

export function CustomButton({ ariaLabel, icon, id, onClick, text, variant }: Props) {
  return (
    <Button
      aria-label={ariaLabel}
      className={Classes.SMALL}
      fill={false}
      icon={icon}
      id={id}
      intent={variant as Intent}
      onClick={onClick}
      outlined={variant === "secondary"}
    >
      {text}
    </Button>
  );
}
