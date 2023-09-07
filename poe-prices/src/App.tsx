import "./App.css";
import { Dashboard } from "./Components/Dashboard";
import { BrowserRouter } from "react-router-dom";
import { RouterController } from "./Components/RouterController";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Dashboard>
          <RouterController />
        </Dashboard>
      </BrowserRouter>
    </div>
  );
}

export default App;
