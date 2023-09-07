import { Routes, Route } from "react-router";

import { TablePrices } from "./TablePrices";

export const RouterController = () => {
  return (
    <>
      <Routes>
        <Route path="/items/:itemType" element={<TablePrices />} />
      </Routes>
    </>
  );
};
