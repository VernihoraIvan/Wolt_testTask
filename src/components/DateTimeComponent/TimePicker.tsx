import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import { DatePicker } from "@mui/x-date-pickers";
import { useThemeContext } from "../../utilities/useModalContext";

interface DateTimeProps {
  onChangeTime: (timeValue: number | undefined) => void;
  onChangeDate: (timeValue: string | undefined) => void;
}

interface TimeValue {
  $H?: number;
  $d?: string;
}

export default function DateTimeComponent({
  onChangeDate,
  onChangeTime,
}: DateTimeProps) {
  const [value, setData] = useState<TimeValue>({
    $H: 0,
    $d: "",
  });

  const handleTimeChange = (timeValue: TimeValue | null): void => {
    if (timeValue) {
      setData((prev) => ({ ...prev, time: timeValue.$H }));
      onChangeTime(timeValue.$H);
    }
  };

  const handleDateChange = (dateValue: TimeValue | null): void => {
    if (dateValue) {
      setData((prev) => ({ ...prev, date: dateValue.$d }));
      onChangeDate(dateValue.$d);
    }
  };

  const { lightTheme } = useThemeContext();
  let themeStyle: string = " text-slate-black";
  if (!lightTheme) {
    themeStyle = "	text-slate-400";
  }

  const inputAttribute: object = { "data-test-id": "fee" };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker", "TimeField"]}>
        <div className={` ${themeStyle} pickerContainer  w-full`}>
          <DatePicker
            disablePast={true}
            className="datePicker w-full text-slate-400"
            onChange={handleDateChange}
            value={value}
            label="Choose a delivery date"
            format="DD-MM-YYYY"
          />
          <TimeField
            className="timePicker w-full"
            onChange={handleTimeChange}
            format="HH:mm"
            label="Choose a delivery time"
            inputProps={inputAttribute}
          />
        </div>
      </DemoContainer>
    </LocalizationProvider>
  );
}
