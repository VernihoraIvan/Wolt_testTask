import { useState } from "react";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import { DatePicker } from "@mui/x-date-pickers";

interface Props {
  onChangeTime: (timeValue: number | undefined) => void;
  onChangeDate: (timeValue: string | undefined) => void;
}

interface MyObjectType {
  $H?: number;
  $d?: string;
}

export default function DateTimeComponent({
  onChangeDate,
  onChangeTime,
}: Props) {
  const [value, setData] = useState<MyObjectType | null>({});

  const handleTimeChange = (timeValue: MyObjectType | null) => {
    if (timeValue) {
      setData((prev) => ({ ...prev, time: timeValue.$H }));
      onChangeTime(timeValue.$H);
    }
  };
  const handleDateChange = (dateValue: MyObjectType | null) => {
    if (dateValue) {
      setData((prev) => ({ ...prev, date: dateValue.$d }));
      onChangeDate(dateValue.$d);
    }
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["TimeField"]}>
        <TimeField
          onChange={handleTimeChange}
          format="HH:mm"
          label="Basic time field"
        />
      </DemoContainer>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          onChange={handleDateChange}
          value={value}
          label="Basic date picker"
          format="DD-MM-YYYY"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
