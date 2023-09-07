import { Routes, Route } from "react-router";
import { Currencies } from "../Pages/Currencies";
import { Items } from "../Pages/Items";

export const RouterController = () => {
  return (
    <>
      <Routes>
        <Route path="/currency" element={<Currencies />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    </>
  );
};
