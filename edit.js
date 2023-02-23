import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
import { createReadStream, writeFileSync } from "fs";

dotenv.config();

const API_KEY = process.env.API_KEY;

const configuration = new Configuration({
  apiKey: API_KEY,
});

const openai = new OpenAIApi(configuration);

const src = './contaminate-your-block.png';
const mask = './contaminate-your-block-mask.png';

const result = await openai.createImageEdit(
  createReadStream(src),
  createReadStream(mask),
  'A programer drawing radioactive art',
  1,
  "1024x1024"
);

const url = result.data.data[0].url;
console.log(url);

// Save Image URL to Disk
const imgResult = await fetch(url);
const blob = await imgResult.blob();
const buffer = Buffer.from(await blob.arrayBuffer());
writeFileSync(`./img/$Date.now()}.png`, buffer);

// To generate image; in terminal run >node edit.js
