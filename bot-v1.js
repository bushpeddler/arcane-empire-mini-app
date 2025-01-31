const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.start((ctx) => ctx.reply("Welcome to Arcane Empires!"));
bot.launch().then(() => {
  console.log("Bot is running!");
});