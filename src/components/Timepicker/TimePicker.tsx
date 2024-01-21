import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import TimePicker from "react-time-picker";

import { useState } from "react";

interface Props {
  onChange: (newValue: string) => void;
}

function TimePickerComponent({ onChange }: Props) {
  const [time, setTime] = useState("10:00");

  const onChangeHandler = (value: string) => {
    setTime(value);
    onChange(value);
  };
  // console.log(time);
  return (
    <TimePicker className="ml-28" onChange={onChangeHandler} value={time} />
  );
}

export default TimePickerComponent;

// import React, { useState } from "react";
// import TimePicker from "react-time-picker";
// import "react-time-picker/dist/TimePicker.css";
// import "react-clock/dist/Clock.css";
// import { useState } from "react";

// function TimePickerComponent() {
//   const [time, setTime] = useState<string>("10:00");

//   const onChange = (value: string | Date | null): void => {
//     if (value !== null && typeof value !== "string") {
//       // Assuming value is a Date
//       setTime(value.toTimeString().slice(0, 5));
//     }
//   };

//   console.log(time);

//   return <TimePicker className="ml-28" onChange={onChange} value={time} />;
// }

// export default TimePickerComponent;
