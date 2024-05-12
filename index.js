import express from "express";
import initRoutes from "./routes/index.js";

const app = express();
app.use(express.json());

initRoutes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});
