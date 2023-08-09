export const useCurrency = () => {
  const formatToCurrency = (value) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(value);
  };

  return { formatToCurrency };
};
