const TelegramBot = require('node-telegram-bot-api');
const config = require('../config.js');
const { fetch } = require('./postgres.js');
const { chat } = require('../database/query.js');

const options = {
  polling: true
}

const bot = new TelegramBot(config.TOKEN, options);

async function botEmit() {

  const me = await bot.getMe()
  const my_id = me.id;
  const my_username = me.username;

  bot.on('message', async (arg) => {
    try {
      const { id, title } = arg.chat;
      const found = await fetch(chat.find, id)

      if (
        !found &&
        arg.new_chat_member?.id == my_id
      ) {
        const result = await fetch(chat.addChat, id, title);

        if (!result) throw new Error("Didn't write to database")
      }

      else if (
        found &&
        arg.left_chat_member?.id == my_id
      ) {
        const result = await fetch(chat.deleteChat, id)

        if (!result) throw new Error("Didn't delete from database")
      }
    } catch (err) {
      return err.message
    }
  })
}

module.exports = {
  bot,
  botEmit
}
