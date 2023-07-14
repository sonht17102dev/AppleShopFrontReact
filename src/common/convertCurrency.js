export const convertCurrency = (currency) => {
  const formattedCurrency = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  })
    .format(Number(currency))
    .replace("₫", "");
  return formattedCurrency;
};
