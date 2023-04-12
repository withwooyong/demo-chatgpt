// node express server
// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;
// const bodyParser = require('body-parser');
// const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  // apiKey: process.env.OPENAI_API_KEY,
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

// app.use(bodyParser.json());
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

async function getChatbotResponse(userMessage) {
  const prompt = `User: ${userMessage}\nChatbot:`;
  const response = await openai.createCompletion({
    model: 'davinci',
    prompt: prompt,
    temperature: 0.9,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ['\n'],
  });
  return response.data.choices[0].text.trim();
}

const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.setPrompt('You> ');
readLine.prompt();

readLine.on('line', async (line) => {
  const botResponse = await getChatbotResponse(line);
  console.log(`Chatbot> ${botResponse}`);
  readLine.prompt();
});
