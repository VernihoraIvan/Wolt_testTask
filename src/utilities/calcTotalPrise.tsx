import dayjs from "dayjs";

export interface FeeInput {
  cartValue: number;
  deliveryDistance: number;
  amountOfItems: number;
  date: string;
  time: string;
}

const countDeliveryFee = (deliveryDistance: number): number => {
  let result: number = 2;
  if (deliveryDistance <= 1000) {
    return result;
  }
  console.log(
    `countDeliveryFee: ${(result += Math.ceil(
      (deliveryDistance - 1000) / 500
    ))}`
  );
  return (result += Math.ceil((deliveryDistance - 1000) / 500));
};

const countBulkFee = (amountOfItems: number): number => {
  let result: number = 0;
  if (!amountOfItems || amountOfItems <= 4) {
    return result;
  } else if (amountOfItems <= 12) {
    console.log(`countBulkFee ${(result = (amountOfItems - 4) * 0.5)}`);
    return (result = (amountOfItems - 4) * 0.5);
  } else {
    console.log(`countBulkFee ${(result = (amountOfItems - 4) * 0.5 + 1.2)}`);
    return (result = (amountOfItems - 4) * 0.5 + 1.2);
  }
};

const isRushHours = (date: string, time: string): boolean => {
  const formattedTime: number = Number(time.slice(0, 2));
  console.log(`dayjs: ${dayjs(date)}`);
  const formattedDay: string = dayjs(date).toString();
  console.log(`time: ${formattedTime}// day: ${formattedDay}`);
  console.log(formattedDay.slice(0, 3));
  console.log(
    formattedDay.slice(0, 3) === "Fri" &&
      formattedTime >= 13 &&
      formattedTime <= 19
  );
  return (
    formattedDay.slice(0, 3) === "Fri" &&
    formattedTime >= 13 &&
    formattedTime <= 19
  );
};

export const calcTotalPrise = ({
  cartValue,
  deliveryDistance,
  amountOfItems,
  date,
  time,
}: FeeInput) => {
  let totalFee: number = 0;
  if (!amountOfItems || !cartValue) {
    return totalFee;
  }
  if (cartValue >= 200) {
    return cartValue;
  }
  totalFee += countDeliveryFee(deliveryDistance) + countBulkFee(amountOfItems);
  if (isRushHours(date, time)) {
    totalFee *= 1.2;
  }
  if (totalFee > 15) {
    return 15 + cartValue;
  }

  return totalFee + cartValue;
};
