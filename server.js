import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import { appRouter } from "./routes.js";

dotenv.config({
  path: path.join(path.resolve(), ".", ".env"),
});

const app = express();
const PORT = process.env.PORT;
const AppDistPath = new URL("./dist/", import.meta.url);
const AppIndex = new URL("./dist/index.html", import.meta.url);

mongoose.connect(process.env.DB);

app.use(express.json());
app.use(express.static(AppDistPath.pathname));
app.use(cors());
app.use("/api", appRouter);

app.get("/*", (req, res) => {
  res.sendFile(AppIndex.pathname);
});

app.get("/api/status", (req, res) => {
  res.send({ status: "Ok" });
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
