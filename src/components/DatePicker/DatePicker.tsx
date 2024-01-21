import { useState } from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

interface Props {
  onChange: (newValue: string) => void;
}

function DatePickerComponent({ onChange }: Props) {
  const [value, setValue] = useState<string>("");

  const handleValueChange = (newValue: DateValueType): void => {
    console.log("newValue:", newValue);
    onChange(newValue?.startDate as string);
    setValue(newValue?.startDate as string);
  };

  return (
    <div className="flex flex-row justify-between items-center">
      <p className="mr-16">Time</p>
      <Datepicker
        useRange={false}
        asSingle={true}
        value={{ startDate: value, endDate: "" }}
        onChange={handleValueChange}
      />
    </div>
  );
}

export default DatePickerComponent;
