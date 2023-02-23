import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
import { writeFileSync } from "fs";

dotenv.config();

const API_KEY = process.env.API_KEY;

const configuration = new Configuration({
  apiKey: API_KEY,
});

const openai = new OpenAIApi(configuration);

const prompt =
  "a man in a radiological suit, and a woman in a radiological suit with heels, rolling chemical barrels past eachother with an atomic plant in the background";

const result = await openai.createImage({
  prompt,
  n: 1,
  size: "1024x1024",
});

const url = result.data.data[0].url;
console.log(url);

// Save Image URL to Disk
const imgResult = await fetch(url);
const blob = await imgResult.blob();
const buffer = Buffer.from(await blob.arrayBuffer());
writeFileSync(`./img/$Date.now()}.png`, buffer);

// To generate image; in terminal run >node generate.js
