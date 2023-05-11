import { NumericInput } from "@blueprintjs/core";
import { GBP } from ".";

interface Props {
  className?: string;
  defaultValue?: number;
  fill: boolean;
  onValueChange: (valueAsNumber: number, valueAsString: string, inputElement: HTMLInputElement | null) => void;
  placeholder?: string;
}

export function Numeric({ className, defaultValue, fill, onValueChange, placeholder }: Props) {
  return (
    <NumericInput
      className={className}
      defaultValue={defaultValue}
      fill={fill}
      leftElement={<GBP />}
      majorStepSize={10000}
      min={0}
      onValueChange={onValueChange}
      placeholder={placeholder}
      stepSize={1000}
    />
  );
}
