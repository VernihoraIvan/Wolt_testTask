// import ReactDom from "react-dom";
import { useState } from "react";
import { FeeInput, calcTotalPrise } from "../../utilities/calculateTotalPrise";
import DateTimeComponent from "../DateTimeComponent/TimePicker";
import "react-toastify/dist/ReactToastify.css";
import { showNotification } from "../../utilities/showNotification";
import Input from "../Input/Input";
import { useThemeContext } from "../../utilities/useModalContext";

function CalculatorModalWindow() {
  // const portal = document.getElementById("portal")!;

  const [cartValue, setCartValue] = useState<number>(-1);
  const [deliveryDistance, setDeliveryDistance] = useState<number>(-1);
  const [amountOfItems, setAmountOfItems] = useState<number>(-1);
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<number>(0);
  const [isShown, setIsShown] = useState<boolean>(false);

  let fee: number = 0;

  const allStateValues: FeeInput = {
    cartValue,
    deliveryDistance,
    amountOfItems,
    date,
    time,
  };

  const onChangeDate = (dateValue: string | undefined): void => {
    setDate(dateValue as string);
    setIsShown(false);
  };

  const onChangeTime = (timeValue: number | undefined): void => {
    setTime(timeValue as number);
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
    // ReactDom.createPortal
    // (
    // <div className="h-screen w-screen  flex justify-center items-center ">
    <div
      className={` max-w-lg max-h-xl py-10 px-20 flex justify-center items-center flex-col gap-4 ${themeStyle} rounded-3xl shadow-xl mx-auto my-auto`}
    >
      <h1 className="mb-10 text-xl">Delivery Fee Calculator</h1>
      <div>
        <ul className="flex justify-between items-start flex-col gap-4">
          <li className="w-full relative">
            <Input
              attribute={"cartValue"}
              inputName={"Cart Value"}
              onInputChange={setCartValue}
              setIsShown={setIsShown}
            />
            <span className="absolute top-0 -right-5">€</span>
          </li>
          <li className="w-full relative">
            <Input
              attribute={"deliveryDistance"}
              inputName={"Delivery Distance"}
              onInputChange={setDeliveryDistance}
              setIsShown={setIsShown}
            />
            <span className="absolute top-0 -right-5">m</span>
          </li>
          <li className="w-full">
            <Input
              attribute={"amountOfItems"}
              inputName={"Amount of Items"}
              onInputChange={setAmountOfItems}
              setIsShown={setIsShown}
            />
          </li>
          <li className="  w-full focus-visible:outline-sky-400 active:outline-sky-400 outline-sky-400 li_item_pickers">
            <DateTimeComponent
              onChangeTime={onChangeTime}
              onChangeDate={onChangeDate}
            />
          </li>
        </ul>
      </div>
      <button
        type="button"
        onClick={onSubmit}
        tabIndex={0}
        className="pr-3 pl-3 pt-1 pb-1 bg-sky-400 rounded-md hover:bg-sky-500  transition ease-in-out delay-250 active-sky-500 "
      >
        Calculate delivery price
      </button>
      {isShown && <p data-test-id="fee">Delivery price: {fee} € </p>}
    </div>
    // </div>
    // portal
  );
}

export default CalculatorModalWindow;
