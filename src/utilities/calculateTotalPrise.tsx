import { Dayjs } from "dayjs";

export interface FeeInput {
  cartValue: number;
  deliveryDistance: number;
  amountOfItems: number;
  date: Dayjs;
  time: Dayjs;
}

const countDeliveryFee = (deliveryDistance: number): number => {
  let result: number = 2;

  if (deliveryDistance <= 1000) {
    return result;
  }

  return (result += Math.ceil((deliveryDistance - 1000) / 500));
};

const countBulkFee = (amountOfItems: number): number => {
  let result: number = 0;

  if (!amountOfItems || amountOfItems <= 4) {
    return result;
  } else if (amountOfItems <= 12) {
    return (result = (amountOfItems - 4) * 0.5);
  } else {
    return (result = (amountOfItems - 4) * 0.5 + 1.2);
  }
};

const isRushHours = (date: Dayjs, time: Dayjs): boolean => {
  if (!date || !time) {
    return false;
  }
  const day: number = date.day();
  const hour: number = time.hour();

  return day === 5 && hour >= 13 && hour <= 18;
};

export const calcTotalPrise = ({
  cartValue,
  deliveryDistance,
  amountOfItems,
  date,
  time,
}: FeeInput) => {
  let totalFee: number = 0;
  const minCartValue = 10;
  if (!(amountOfItems || cartValue) || cartValue >= 200) {
    return totalFee;
  }

  totalFee += countDeliveryFee(deliveryDistance) + countBulkFee(amountOfItems);

  if (isRushHours(date, time)) {
    totalFee *= 1.2;
  }

  if (totalFee > 15) {
    totalFee = 15;
  }
  if (cartValue < minCartValue) {
    totalFee += minCartValue - cartValue;
  }

  return totalFee;
};
