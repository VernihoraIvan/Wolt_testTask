import { useState } from "react";
import { FeeInput, calcTotalPrise } from "../../utilities/calculateTotalPrise";
import DateTimeComponent from "../DateTimeComponent/DateTimePicker";
import "react-toastify/dist/ReactToastify.css";
import { showNotification } from "../../utilities/showNotification";
import Input from "../Input/Input";
import { useThemeContext } from "../../utilities/useModalContext";
import Button from "../Button/Button";
import dayjs, { Dayjs } from "dayjs";

function CalculatorModalWindow() {
  const [cartValue, setCartValue] = useState<number>(-1);
  const [deliveryDistance, setDeliveryDistance] = useState<number>(-1);
  const [amountOfItems, setAmountOfItems] = useState<number>(-1);
  const [date, setDate] = useState<Dayjs>(dayjs());
  const [time, setTime] = useState<Dayjs>(dayjs());
  const [isShown, setIsShown] = useState<boolean>(false);

  let fee: number = 0;

  const allStateValues: FeeInput = {
    cartValue,
    deliveryDistance,
    amountOfItems,
    date,
    time,
  };

  const onChangeDate = (dateValue: Dayjs): void => {
    setDate(dateValue);
    setIsShown(false);
  };

  const onChangeTime = (timeValue: Dayjs): void => {
    setTime(timeValue);
    setIsShown(false);
  };

  const onSubmit = (): void => {
    setIsShown(showNotification(allStateValues));
    calcTotalPrise(allStateValues);
  };

  if (cartValue && deliveryDistance && amountOfItems && date && time) {
    fee = Number(calcTotalPrise(allStateValues).toFixed(2));
  }

  const { lightTheme } = useThemeContext();
  let themeStyle: string = " bg-white";
  if (!lightTheme) {
    themeStyle = "bg-bgDarkTheme	text-slate-400";
  }

  return (
    <div
      className={`xs:w-11/12 mt-20 max-w-lg max-h-xl py-10 px-18 flex justify-center items-center flex-col gap-4 ${themeStyle} rounded-3xl shadow-xl mx-auto my-auto`}
    >
      <h1 className="mb-10 text-xl">Delivery Fee Calculator</h1>
      <div className="w-8/12	">
        <ul className="flex justify-between items-start flex-col gap-4">
          <li className="w-full relative">
            <Input
              attribute={"cartValue"}
              inputName={"Cart Value"}
              onInputChange={setCartValue}
              setIsShown={setIsShown}
            />
            <span className="absolute top-0 -right-5 xs:right-6">€</span>
          </li>
          <li className="w-full relative">
            <Input
              attribute={"deliveryDistance"}
              inputName={"Delivery Distance"}
              onInputChange={setDeliveryDistance}
              setIsShown={setIsShown}
            />
            <span className="absolute top-0 -right-5 xs:right-6">m</span>
          </li>
          <li className="w-full">
            <Input
              attribute={"amountOfItems"}
              inputName={"Amount of Items"}
              onInputChange={setAmountOfItems}
              setIsShown={setIsShown}
            />
          </li>
          <li className="w-full focus-visible:outline-sky-400 active:outline-sky-400 outline-sky-400 li_item_pickers">
            <DateTimeComponent
              onChangeTime={onChangeTime}
              onChangeDate={onChangeDate}
            />
          </li>
        </ul>
      </div>
      <Button onClick={onSubmit} />
      <p data-test-id="fee">Delivery price:{isShown && ` ${fee} €`} </p>
    </div>
  );
}

export default CalculatorModalWindow;
