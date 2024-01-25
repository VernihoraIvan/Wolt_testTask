import { toast } from "react-toastify";

export interface arguements {
  cartValue: number;
  deliveryDistance: number;
  amountOfItems: number;
  date: string | undefined;
  time: number | undefined;
}
export const determineWarning = ({
  cartValue,
  deliveryDistance,
  amountOfItems,
  date,
  time,
}: arguements) => {
  if (
    cartValue <= 0 ||
    deliveryDistance <= 0 ||
    amountOfItems <= 0 ||
    !date ||
    !time
  ) {
    return "Please, fill all inputs";
  }
  if (isNaN(cartValue) || isNaN(deliveryDistance) || isNaN(amountOfItems)) {
    return "Please, use numbers";
  }
  if (cartValue && deliveryDistance && amountOfItems && (!date || !time)) {
    return "Please, choose a delivery date";
  }

  if (
    cartValue > 0 &&
    deliveryDistance > 0 &&
    amountOfItems > 0 &&
    date &&
    time
  ) {
    toast.success("Order is ready!");
    return "show";
  }
  if (date && time && (!cartValue || !deliveryDistance || !amountOfItems)) {
    return "Please, use numbers";
  }
};

export const toShowFee = ({
  cartValue,
  deliveryDistance,
  amountOfItems,
  date,
  time,
}: arguements) => {
  if (cartValue && deliveryDistance && amountOfItems && date && time) {
    return true;
  }
};
