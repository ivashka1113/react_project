export const formatCurrency = (currency) => {
  if (isNaN(currency)) currency = 0;
  return currency.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
  });
};

export const totalPriceItems = (order) => {
  const countToping =
    order.topping && order.topping.filter((item) => item.checked).length;
  const priceTopping = countToping ? order.price * 0.1 * countToping : 0;
  return (order.price + priceTopping) * order.count;
};
