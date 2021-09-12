import express from "express";
import cors from "cors";

import api from "./routes/api.mjs";

const app = express();

app.use(cors({
  origin: "http://localhost:3500",
  methods: ["GET"],
}));

app.use("/api", api);

const PORT = process.env.PORT ?? 2500;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
