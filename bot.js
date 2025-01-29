const { Telegraf } = require('telegraf');
require('dotenv').config();

if (!process.env.TELEGRAM_BOT_TOKEN) {
  throw new Error("TELEGRAM_BOT_TOKEN is not defined in .env");
}

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.start((ctx) => ctx.reply("Welcome to Arcane Empires!"));

(async () => {
  try {
    await bot.launch();
    console.log("Bot is running!");
  } catch (error) {
    console.error("Failed to launch bot:", error);
  }
})();