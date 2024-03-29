import { NumericInput } from '@blueprintjs/core';
import { GBP } from '.';

interface Props {
  className?: string;
  defaultValue?: number;
  onValueChange: (valueAsNumber: number, valueAsString: string, inputElement: HTMLInputElement | null) => void;
  placeholder?: string;
}

export function Numeric({ className, defaultValue, onValueChange, placeholder }: Props) {
  return (
    <NumericInput
      className={className}
      defaultValue={defaultValue}
      fill={true}
      leftElement={<GBP />}
      majorStepSize={10000}
      min={0}
      onValueChange={onValueChange}
      placeholder={placeholder}
      stepSize={1000}
    />
  );
}
