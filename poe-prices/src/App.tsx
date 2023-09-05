import "./App.css";
import { Currencies } from "./Pages/Currencies";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Items } from "./Pages/Items";

const router = createBrowserRouter([
  {
    path: "/items",
    element: <Items />,
  },
  {
    path: "/currencies",
    element: <Currencies />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
