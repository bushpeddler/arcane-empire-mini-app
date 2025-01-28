const { Telegraf } = require('telegraf');
require('dotenv').config(); // This will load the .env file

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
bot.launch();