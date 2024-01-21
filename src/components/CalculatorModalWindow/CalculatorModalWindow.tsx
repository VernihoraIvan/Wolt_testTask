// import React from 'react'
import ReactDom from "react-dom";
import DatePickerComponent from "../DatePicker/DatePicker";

function CalculatorModalWindow() {
  const portal = document.getElementById("portal")!;

  return ReactDom.createPortal(
    <div className="h-screen w-screen fixed top-0 left-0 flex justify-center items-center ">
      <div className=" h-3/4 w-1/2 flex justify-center items-center flex-col gap-4 bg-white rounded-3xl">
        <h2 className="mb-20 text-xl">Delivery Fee Calculator</h2>
        <div>
          <ul className="flex justify-between items-start flex-col gap-4">
            <li className="w-full">
              <label
                className="flex-row justify-between flex gap-10"
                htmlFor="cartValue"
              >
                Cart Value
                <input
                  className="bg-indigo-50 rounded-lg "
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
                  className="bg-indigo-50 rounded-lg "
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
                  className="bg-indigo-50 rounded-lg "
                  type="text"
                  name="amountOfItems"
                  id="amountOfItems"
                />
              </label>
            </li>
            <li className="w-full">
              {/* <label htmlFor="time">
                Time:
                <input type="date" id="time" name="time" />
              </label> */}
              <DatePickerComponent />
            </li>
          </ul>
        </div>
        <button className="pr-3 pl-3 pt-1 pb-1 bg-sky-400 rounded-md hover:bg-sky-500 transition ease-in-out delay-250">
          Calculate delivery price
        </button>
        <p>Delivery price: </p>
      </div>
    </div>,
    portal
  );
}

export default CalculatorModalWindow;
