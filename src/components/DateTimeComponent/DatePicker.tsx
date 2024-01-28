import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

export default function BasicDatePicker() {
  const [value, setData] = useState<string>("");
  const handleChange = (value: string | null) => {
    setData(value as string);
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

// setting attribute for testing purposes
const inputParent = document.querySelector(".datePicker");
const input = inputParent?.querySelector("input");
input?.setAttribute("data-test-id", "fee");
