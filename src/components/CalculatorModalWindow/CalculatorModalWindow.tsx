import ReactDom from "react-dom";
import { useState } from "react";
import { calcTotalPrise } from "../../utilities/calcTotalPrise";
import DateTimeComponent from "../DateTimeComponent/TimePicker";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { determineWarning, toShowFee } from "../../utilities/determineWarning";

export interface arguements {
  cartValue: number;
  deliveryDistance: number;
  amountOfItems: number;
  date: string | undefined;
  time: number | undefined;
}

function CalculatorModalWindow() {
  const portal = document.getElementById("portal")!;

  const [cartValue, setCartValue] = useState(-1);
  const [deliveryDistance, setDeliveryDistance] = useState(-1);
  const [amountOfItems, setAmountOfItems] = useState(-1);
  const [date, setDate] = useState<string | undefined>("");
  const [time, setTime] = useState<number | undefined>(0);
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const allStateValues: arguements = {
    cartValue,
    deliveryDistance,
    amountOfItems,
    date,
    time,
  };
  // determineWarning();
  // console.log("determinWarn", determineWarning(allStateValues));
  const isFeeShown = toShowFee({
    cartValue,
    deliveryDistance,
    amountOfItems,
    date,
    time,
  });

  const onChangeDate = (dateValue: string | undefined) => {
    setDate(dateValue);
  };

  const onChangeTime = (timeValue: number | undefined) => {
    setTime(timeValue);
  };

  const onSubmit = () => {
    if (determineWarning(allStateValues) !== "show") {
      toast.warn(determineWarning(allStateValues), {
        position: "bottom-left",
      });
    } else {
      setIsHidden(false);
    }
    calcTotalPrise({
      cartValue,
      deliveryDistance,
      amountOfItems,
      date,
      time,
    });

    // console.log("determinWarn", determineWarning(allStateValues));
  };

  let fee: number = 0;

  if (isFeeShown) {
    fee = calcTotalPrise({
      cartValue,
      deliveryDistance,
      amountOfItems,
      date,
      time,
    });
  }

  return ReactDom.createPortal(
    <div className="h-screen w-screen fixed top-8 left-0 flex justify-center items-center ">
      <div className=" h-3/4 w-1/2 flex justify-center items-center flex-col gap-4 bg-white rounded-3xl">
        <h1 className="mb-20 text-xl">Delivery Fee Calculator</h1>
        <div>
          <ul className="flex justify-between items-start flex-col gap-4">
            <li className="w-full">
              <label
                className="flex-row justify-between flex gap-10 items-center"
                htmlFor="cartValue"
              >
                Cart Value
                <input
                  data-test-id="cartValue"
                  onChange={(e) => setCartValue(Number(e.target.value))}
                  className="bg-indigo-50 rounded-lg px-2 py-1 outline-sky-400 "
                  type="text"
                  name="cartValue"
                  id="cartValue"
                />
              </label>
            </li>
            <li className="w-full">
              <label
                className="flex-row justify-between flex gap-10 items-center"
                htmlFor="deliveryDistance"
              >
                Delivery Distance
                <input
                  data-test-id="deliveryDistance"
                  onChange={(e) => setDeliveryDistance(Number(e.target.value))}
                  className="bg-indigo-50 rounded-lg px-2 py-1 outline-sky-400"
                  type="text"
                  name="deliveryDistance"
                  id="deliveryDistance"
                />
              </label>
            </li>
            <li className="w-full">
              <label
                className="flex-row justify-between flex gap-10 items-center"
                htmlFor="amountOfItems"
              >
                Amount of Items
                <input
                  data-test-id="amountOfItems"
                  onChange={(e) => setAmountOfItems(Number(e.target.value))}
                  className="bg-indigo-50 rounded-lg px-2 py-1 outline-sky-400"
                  type="text"
                  name="amountOfItems"
                  id="amountOfItems"
                />
              </label>
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
        {!isHidden && (
          <p data-test-id="fee">Delivery price: {fee.toFixed(2)}$ </p>
        )}
      </div>
      <ToastContainer />
    </div>,
    portal
  );
}

export default CalculatorModalWindow;
