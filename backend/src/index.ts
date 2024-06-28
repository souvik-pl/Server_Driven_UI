import express, { Application, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import { COUNTRY } from "./common/country.enum.js";
import { HOMEPAGE_DATA_INDIA } from "./db/server-driven-ui-data/homepage-india.js";
import { HOMEPAGE_DATA_USA } from "./db/server-driven-ui-data/homepage-usa.js";
import { Product, UISchema } from "./common/common.type.js";
import { PRODUCTS_DATA_INDIA } from "./db/products-data/products-india.js";
import { PRODUCTS_DATA_USA } from "./db/products-data/products-usa.js";

// Use import.meta.url to get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app: Application = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);
app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname, "../public"))); //to serve images from public folder

app.get("/home", (req: Request, res: Response) => {
  const { country } = req.query;
  let responseData: UISchema;

  if (country === COUNTRY.INDIA) {
    responseData = HOMEPAGE_DATA_INDIA;
  } else if (country === COUNTRY.USA) {
    responseData = HOMEPAGE_DATA_USA;
  } else {
    res.status(404).json({ error: "Not found" });
  }

  res.json(responseData);
});

app.get("/products", (req: Request, res: Response) => {
  const { country } = req.query;
  let responseData: Product[];

  if (country === COUNTRY.INDIA) {
    responseData = PRODUCTS_DATA_INDIA;
  } else if (country === COUNTRY.USA) {
    responseData = PRODUCTS_DATA_USA;
  } else {
    res.status(404).json({ error: "Not found" });
  }

  res.json(responseData);
});

app.listen(3000, () => {
  console.log("Server is running on port: 3000");
});
