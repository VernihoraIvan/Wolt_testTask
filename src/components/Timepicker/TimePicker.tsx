// import React from "react";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import TimePicker from "react-time-picker";

import { useState } from "react";

function TimePickerComponent() {
  const [time, setTime] = useState("10:00");

  const onChange = (value) => {
    setTime(value);
  };
  console.log(time);
  return <TimePicker className="ml-28" onChange={onChange} value={time} />;
}

export default TimePickerComponent;
