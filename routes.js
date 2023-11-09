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

appRouter.post("/consoles/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name) {
    res.status(418).send({ message: "We need a Name!" });
  }
  res.send({ console: `Console with name ${name} and ID of ${id}` });
});
