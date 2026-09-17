import express from "express";
import router from "./routes/index.js";
import { errorHandler } from "./middlewares/error-handler.js";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
