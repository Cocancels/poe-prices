import { apiGet } from "./apiService";

export const getItemsPrices = async (type: string): Promise<any[]> => {
  const data = await apiGet(`http://localhost:8080/api/items/${type}`);

  return data;
};

export const getDivinePrice = async (): Promise<number> => {
  const data = await apiGet(`http://localhost:8080/api/divine-price`);

  return data;
};
