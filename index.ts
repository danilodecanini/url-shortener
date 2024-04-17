import * as dotenv from "dotenv";
import Elysia from "elysia";
import { urlController } from "./src/shortener.controller";
dotenv.config();

const app = new Elysia();

app.use(urlController as any);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
