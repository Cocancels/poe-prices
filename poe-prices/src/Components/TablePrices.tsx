import { useDispatch, useSelector } from "react-redux";
import { chaosId, chaosImg, divineId, divineImg } from "../utils/consts";
import { divineEquivalent } from "../utils/divineEquivalent";
import { setItems } from "../Reducers/itemSlice";
import { getDivinePrice, getItemsPrices } from "../Services/pricesService";
import { useEffect, useState } from "react";
import { setDivinePrice } from "../Reducers/divineSlice";
import { useParams } from "react-router-dom";

export const TablePrices = () => {
  const param = useParams();

  const itemType: string = param.itemType
    ? param.itemType.charAt(0).toUpperCase() + param.itemType.slice(1)
    : "";

  const items = useSelector(
    (state: any) => state.items[itemType.toLowerCase()]
  );
  const divinePrice = useSelector((state: any) => state.divinePrice.price);
  const dispatch = useDispatch();

  const [itemPrices, setItemPrices] = useState(items);
  const [page, setPage] = useState(1);

  const fetchItemsData = async () => {
    if (items && items.length > 0) return;

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

  useEffect(() => {
    setItemPrices(items);
  }, [items]);

  return (
    <div className="h-full">
      <table className="table-auto m-auto w-9/12 bg-white text-gray-800 h-5/6">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Id</th>
            <th className="px-4 py-2">Icon</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Price (Chaos)</th>
            <th className="px-4 py-2">Price (Divine)</th>
          </tr>
        </thead>
        <tbody>
          {itemPrices &&
            itemPrices.length > 0 &&
            itemPrices
              .slice(
                page * 10 - 10,
                page * 10 > itemPrices.length ? itemPrices.length : page * 10
              )
              .map((item: any) => {
                return (
                  <TableLine
                    key={item.id}
                    item={item}
                    divinePrice={divinePrice}
                  />
                );
              })}
        </tbody>
      </table>
      {itemPrices && (
        <div className="flex items-center justify-between m-auto w-9/12 bg-white text-gray-800  pt-5">
          <button
            className={
              (page === 1
                ? "bg-blue-400 cursor-default"
                : "bg-blue-500 hover:bg-blue-700") +
              "  text-white font-bold py-2 px-4 rounded w-4/12 place-self-start"
            }
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Previous page
          </button>

          <p className="text-center">
            Page {page} of {Math.ceil(itemPrices.length / 10)}
          </p>

          <button
            className={
              (page === Math.ceil(itemPrices.length / 10)
                ? "bg-blue-400 cursor-default"
                : "bg-blue-500 hover:bg-blue-700") +
              "  text-white font-bold py-2 px-4 rounded w-4/12 place-self-start"
            }
            onClick={() => setPage(page + 1)}
            disabled={page === Math.ceil(itemPrices.length / 10)}
          >
            Next page
          </button>
        </div>
      )}
    </div>
  );
};

interface TableLineProps {
  item: any;
  divinePrice: number;
}

const TableLine = (props: TableLineProps) => {
  const { item, divinePrice } = props;

  return (
    <tr
      key={item.detailsId}
      className="hover:bg-gray-100"
      style={{ height: "20px" }}
    >
      <td className="border-b px-4 py-2">{item.id}</td>
      <td className="border-b px-4 py-2">
        <img className="w-8 h-8" src={item.icon} alt={item.id} />
      </td>
      <td className="border-b px-4 py-2">{item.name}</td>
      <td className="border-b px-4 py-2">
        <div className="flex items-center">
          <p className="mr-1">{item.chaosValue}</p>
          <img className="w-6 h-6" src={chaosImg} alt={`${chaosId}`} />
        </div>
      </td>
      <td className="border-b px-4 py-2">
        <div className="flex items-center">
          {divinePrice && divineEquivalent(item.chaosValue, divinePrice)}
          <img className="w-6 h-6" src={divineImg} alt={`${divineId}`} />
        </div>
      </td>
    </tr>
  );
};
