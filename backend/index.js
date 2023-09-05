import express from "express";
import cors from "cors";
import { formatCurrencyData } from "./utils/formatItemData.js";
const app = express();
app.use(cors({ origin: "*" }));

app.use(express.json());

app.get("/api/items/:type", async (req, res) => {
  const { type } = req.params;
  let url = "";

  if (type === "Currency" || type === "Fragment") {
    url = `https://poe.ninja/api/data/currencyoverview?league=Ancestor&type=${type}`;
  } else {
    url = `https://poe.ninja/api/data/itemoverview?league=Ancestor&type=${type}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (type === "Currency" || type === "Fragment") {
      res.json(formatCurrencyData(data));
    } else {
      res.json(data.lines);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

app.get("/api/divine-price", async (req, res) => {
  try {
    const response = await fetch(
      `https://poe.ninja/api/data/currencyoverview?league=Ancestor&type=Currency`
    );
    const data = await response.json();
    const divinePrice = data.lines.find(
      (line) => line.currencyTypeName === "Divine Orb"
    ).chaosEquivalent;
    res.json(divinePrice);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
