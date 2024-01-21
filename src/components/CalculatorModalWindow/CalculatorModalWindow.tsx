// import React from 'react'
import ReactDom from "react-dom";
import DatePickerComponent from "../DatePicker/DatePicker";
import TimePickerComponent from "../Timepicker/TimePicker";
import { useState } from "react";
import { calcTotalPrise } from "../../utilities/calcTotalPrise";
import { DateValueType } from "react-tailwindcss-datepicker";

function CalculatorModalWindow() {
  const portal = document.getElementById("portal")!;

  const [cartValue, setCartValue] = useState(0);
  const [deliveryDistance, setDeliveryDistance] = useState(0);
  const [amountOfItems, setAmountOfItems] = useState(0);
  const [date, setDate] = useState({} as DateValueType);
  const [time, setTime] = useState({} as DateValueType);
  const [fee, setFee] = useState(0);

  const onChangeDate = (value: DateValueType) => {
    setDate(value);
  };
  const onChangeTime = (value: DateValueType) => {
    setTime(value);
  };
  const onSubmit = () => {
    setFee(
      calcTotalPrise({
        cartValue,
        deliveryDistance,
        amountOfItems,
        date,
        time,
      })
    );
  };
  // const fee = 0 |
  return ReactDom.createPortal(
    <div className="h-screen w-screen fixed top-8 left-0 flex justify-center items-center ">
      <div className=" h-3/4 w-1/2 flex justify-center items-center flex-col gap-4 bg-white rounded-3xl">
        <h2 className="mb-20 text-xl">Delivery Fee Calculator</h2>
        <div>
          <ul className="flex justify-between items-start flex-col gap-4">
            <li className="w-full">
              <label
                className="flex-row justify-between flex gap-10 "
                htmlFor="cartValue"
              >
                Cart Value
                <input
                  onChange={(e) => setCartValue(Number(e.target.value))}
                  className="bg-indigo-50 rounded-lg px-2 outline-sky-400"
                  type="text"
                  name="cartValue"
                  id="cartValue"
                />
              </label>
            </li>
            <li className="w-full">
              <label
                className="flex-row justify-between flex gap-10"
                htmlFor="deliveryDistance"
              >
                Delivery Distance
                <input
                  onChange={(e) => setDeliveryDistance(Number(e.target.value))}
                  className="bg-indigo-50 rounded-lg px-2 outline-sky-400"
                  type="text"
                  name="deliveryDistance"
                  id="deliveryDistance"
                />
              </label>
            </li>
            <li className="w-full">
              <label
                className="flex-row justify-between flex gap-10"
                htmlFor="amountOfItems"
              >
                Amount of Items
                <input
                  onChange={(e) => setAmountOfItems(Number(e.target.value))}
                  className="bg-indigo-50 rounded-lg px-2 outline-sky-400"
                  type="text"
                  name="amountOfItems"
                  id="amountOfItems"
                />
              </label>
            </li>
            <li className="  w-full focus-visible:outline-sky-400 active:outline-sky-400 outline-sky-400 li_item_pickers">
              <DatePickerComponent onChange={onChangeDate} />
              <TimePickerComponent onChange={onChangeTime} />
            </li>
          </ul>
        </div>
        <button
          onClick={onSubmit}
          tabIndex={2}
          className="pr-3 pl-3 pt-1 pb-1 bg-sky-400 rounded-md hover:bg-sky-500 transition ease-in-out delay-250"
        >
          Calculate delivery price
        </button>
        <p>Delivery price: {fee || 0} $</p>
      </div>
    </div>,
    portal
  );
}

export default CalculatorModalWindow;
