export const formatCurrency = (currency) => {
  console.log(currency);
  if (isNaN(currency)) currency = 0;
  return currency.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
  });
};
