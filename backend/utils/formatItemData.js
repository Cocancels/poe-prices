export const formatCurrencyData = (data) => {
  const { lines, currencyDetails } = data;
  const formattedData = lines.map((line) => {
    return {
      ...line,
      id: line.pay ? line.pay.pay_currency_id : line.receive.get_currency_id,
      icon: currencyDetails.find(
        (detail) =>
          detail.id ===
          (line.pay ? line.pay.pay_currency_id : line.receive.get_currency_id)
      ).icon,
      chaosValue: line.chaosEquivalent,
      name: line.currencyTypeName,
    };
  });

  return formattedData;
};
