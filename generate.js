import { Configuration, OpenAIApi } from 'openai'
import { writeFileSync } from 'fs'

const configuration = new Configuration ({
    apiKey: 'your-api-key',
})

const openai = new OpenAIApi(configuration)

const prompt = 'a man in a radiological suit dumping chemical barrel into a river with an atomic plan in the background'

const result = await openai.createImage({
    prompt,
    n: 1,
    size: "1024x1024"
})

const url = result.data.data[0].url;
console.log(url)

// Save Image URL to Disk
const imgResult = await fetch()
const blob = await imgResult.blog()
const buffer = Buffer.from(await blob.arrayBuffer())
writeFileSync(`./img/$Date.now()}.png`, buffer)

// To generate image; in terminal run >node generate.js