export const divineEquivalent = (
  chaosEquivalent: number,
  divinePrice: number
): string => {
  return (chaosEquivalent / divinePrice).toFixed(2);
};
