import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import { DatePicker } from "@mui/x-date-pickers";
import { useThemeContext } from "../../utilities/useModalContext";
import dayjs, { Dayjs } from "dayjs";

interface DateTimeProps {
  onChangeTime: (timeValue: Dayjs) => void;
  onChangeDate: (timeValue: Dayjs) => void;
}

export default function DateTimeComponent({
  onChangeDate,
  onChangeTime,
}: DateTimeProps) {
  const handleTimeChange = (timeValue: Dayjs | null): void => {
    if (timeValue) {
      onChangeTime(timeValue);
    }
  };

  const handleDateChange = (dateValue: Dayjs | null): void => {
    if (dateValue) {
      onChangeDate(dateValue);
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
        <div
          className={` ${themeStyle} pickerContainer  w-full flex gap-2 flex-col`}
        >
          <DatePicker
            defaultValue={dayjs()}
            label="Set delivery date"
            disablePast={true}
            className="datePicker w-full text-slate-400"
            onChange={handleDateChange}
            format="DD-MM-YYYY"
          />
          <TimeField
            className="timePicker w-full"
            onChange={handleTimeChange}
            format="HH:mm"
            label="Set delivery time"
            inputProps={inputAttribute}
            defaultValue={dayjs()}
          />
        </div>
      </DemoContainer>
    </LocalizationProvider>
  );
}
