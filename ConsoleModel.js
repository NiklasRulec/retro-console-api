import { Schema, model } from "mongoose";

export const consoleSchema = new Schema({
  name: { type: String },
});

export const Console = model("Console", consoleSchema);

export default Console;
