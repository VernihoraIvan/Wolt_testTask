import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

export default function BasicDatePicker() {
  const [value, setData] = useState<string | null>("");
  // console.log(value);
  const handleChange = (value: string | null) => {
    setData(value);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          onChange={handleChange}
          value={value}
          label="Basic date picker"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
