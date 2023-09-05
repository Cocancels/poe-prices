import { useSelector } from "react-redux";
import { chaosId, divineEquivalent, divineId } from "../utils";
import { chaosImg, divineImg } from "../utils/consts";
import { useState } from "react";

interface TablePricesProps {
  divinePrice: any;
  itemType: string;
}

export const TablePrices = (props: TablePricesProps) => {
  const { divinePrice, itemType } = props;

  const items = useSelector((state: any) => state.items[itemType]);

  return (
    <table className="table-auto text-center">
      <thead>
        <tr>
          <th className="px-4 py-2">Id</th>
          <th className="px-4 py-2">Icon</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Price (Chaos)</th>
          <th className="px-4 py-2">Price (Divine)</th>
        </tr>
      </thead>
      <tbody>
        {items &&
          items.length > 0 &&
          items.map((item: any) => {
            return (
              <tr key={item.detailsId} className="h-24">
                <td>{item.id}</td>
                <td>
                  <img src={item.icon} alt={item.id} />
                </td>
                <td>{item.name}</td>
                <td>
                  <div className="flex justify-center">
                    <p>{item.chaosValue}</p>
                    <img
                      className="w-6 h-6"
                      src={chaosImg}
                      alt={`${chaosId}`}
                    />
                  </div>
                </td>
                <td>
                  <div className="flex justify-center">
                    {divinePrice &&
                      divineEquivalent(item.chaosValue, divinePrice)}
                    <img
                      className="w-6 h-6"
                      src={divineImg}
                      alt={`${divineId}`}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
