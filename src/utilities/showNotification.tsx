import { toast } from "react-toastify";
import { FeeInput } from "./calculateTotalPrise";

export const showNotification = ({
  cartValue,
  deliveryDistance,
  amountOfItems,
  date,
  time,
}: FeeInput) => {
  let showWarning: boolean = false;

  if (
    cartValue <= 0 ||
    deliveryDistance <= 0 ||
    amountOfItems <= 0 ||
    !date ||
    !time
  ) {
    showWarning = true;
    toast.warn("Please fill in all input fields.", {
      position: "top-right",
    });
  }

  if (isNaN(cartValue) || isNaN(deliveryDistance) || isNaN(amountOfItems)) {
    showWarning = true;
    toast.warn("Please use numbers.", {
      position: "top-right",
    });
  }

  if (cartValue && deliveryDistance && amountOfItems && (!date || !time)) {
    showWarning = true;
    toast.warn("Please choose delivery date and time.", {
      position: "top-right",
    });
  }

  if (showWarning) {
    return false;
  } else {
    toast.success("Order is ready!");
    return true;
  }
};
