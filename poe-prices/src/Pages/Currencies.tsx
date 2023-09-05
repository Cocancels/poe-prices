import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setItems } from "../Reducers/itemSlice";
import { getDivinePrice, getItemsPrices } from "../Services/pricesService";
import { Select } from "../Components/Select";
import { setDivinePrice } from "../Reducers/divineSlice";
import { TablePrices } from "../Components/TablePrices";

export const Currencies = () => {
  const divinePrice = useSelector((state: any) => state.divinePrice.price);
  const items = useSelector((state: any) => state.items);

  const [itemType, setItemType] = useState("Currency");

  const dispatch = useDispatch();

  const fetchItemsData = async () => {
    if (items[itemType.toLowerCase()]) return;

    try {
      const result = await getItemsPrices(itemType);
      dispatch(setItems({ result, itemType }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchDivinePrice = async () => {
    if (divinePrice !== 0) return;

    try {
      const result = await getDivinePrice();
      dispatch(setDivinePrice(result));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDivinePrice();
  }, []);

  useEffect(() => {
    fetchItemsData();
  }, [itemType]);

  return (
    <div>
      <Select
        options={["Currency", "Fragment", "Oil"]}
        value={itemType}
        className="text-center block appearance-none w-1/12 bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        onChange={(event) => setItemType(event.target.value)}
      />

      <TablePrices
        divinePrice={divinePrice}
        itemType={itemType.toLowerCase()}
      />
    </div>
  );
};
