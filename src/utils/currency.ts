export const formatPrice = (
  amount: number,
  currency: { code: string; symbol: string; rate: number }
): string => {
  const convertedAmount = amount * currency.rate;
  
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  return `${currency.symbol}${formatter.format(convertedAmount)}`;
};