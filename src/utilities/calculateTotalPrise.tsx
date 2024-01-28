export interface FeeInput {
  cartValue: number;
  deliveryDistance: number;
  amountOfItems: number;
  date: string;
  time: number;
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

const isRushHours = (date: string, time: number): boolean => {
  if (!date || !time) {
    return false;
  }
  const day: string = date.toString().slice(0, 3);

  return day === "Fri" && time >= 13 && time <= 18;
};

export const calcTotalPrise = ({
  cartValue,
  deliveryDistance,
  amountOfItems,
  date,
  time,
}: FeeInput) => {
  let totalFee: number = 0;

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

  return totalFee;
};
