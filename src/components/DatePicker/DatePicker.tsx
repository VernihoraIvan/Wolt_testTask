import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

function DatePickerComponent() {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    // console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <div className="flex flex-row justify-between items-center">
      <p className="mr-16">Time</p>
      <Datepicker
        useRange={false}
        asSingle={true}
        value={value}
        onChange={handleValueChange}
      />
    </div>
  );
}

export default DatePickerComponent;
