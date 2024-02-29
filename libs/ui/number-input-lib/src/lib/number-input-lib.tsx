import { Button, Input, Space } from 'antd';
import React from 'react';
export interface NumberInputProps {
  value?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

export const NumberInput: React.FC<NumberInputProps> = ({
  value,
  min = -1,
  max = 3000,
  onChange,
}) => {
  const step = 1;
  const handleButtonClick = (step: number) => {
    const newValue = value! + step;
    if (min !== undefined && newValue < min) return;
    if (max !== undefined && newValue > max) return;
    onChange?.(newValue);
  };

  const onInputChange = (e: any) => {
    const data = Number(e.target.value);
    if (data <= min || data >= max) return;
    onChange?.(data);
  };

  return (
    <Space.Compact>
      <Button
        type="default"
        disabled={value! <= min}
        onClick={() => handleButtonClick(-step)}
      >
        -
      </Button>
      <Input
        type="number"
        value={value}
        onChange={onInputChange}
        className="w-32 text-center"
        min={min}
        max={max}
      />

      <Button
        type="default"
        disabled={value! >= max}
        onClick={() => handleButtonClick(step)}
      >
        +
      </Button>
    </Space.Compact>
  );
};
