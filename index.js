const TOKEN = '1899594468:AAGa_Ia0fVvJRqSXEnisk0UkwDVx-uoa8Zg';
const TelegramApi = require('node-telegram-bot-api');

const bot = new TelegramApi(TOKEN, {polling: true});

bot.on('message', async (msg) => {
  const { text = '', chat = {} } = msg;
  const chatId = chat.id;

  bot.sendMessage(chatId, `Ты написал: "${text}"`);
});