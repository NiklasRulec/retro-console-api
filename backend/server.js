import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import { appRouter } from "./routes.js";

dotenv.config({
  path: path.join(path.resolve(), "..", ".env"),
});

const app = express();
const PORT = 3000;

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("MongoDB Verbindung erfolgreich.");
  })
  .catch((err) => {
    console.error("Fehler beim Verbinden mit MongoDB:", err.message);
  });

app.use(express.json());
app.use(cors());
app.use("/api", appRouter);

app.get("/api/status", (req, res) => {
  res.send({ status: "Ok" });
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
