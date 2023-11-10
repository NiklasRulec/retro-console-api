import { Router } from "express";
import Console from "./ConsoleModel.js";

export const appRouter = Router();

appRouter.get("/consoles", async (req, res) => {
  try {
    const consoles = await Console.find();
    res.json(consoles);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

appRouter.get("/consoles/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const console = await Console.findOne({ name: name });
    res.json(console);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
