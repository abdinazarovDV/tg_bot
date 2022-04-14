const { bot } = require('../lib/bot.js');
const { fetchAll } = require('../lib/postgres.js');
const { chat } = require('../database/query.js')

module.exports = class Controllers {
    static async MessageController(req, res, next) {
        try {
            const { message } = req.body;

            const chats = await fetchAll(chat.find, "");

            if (!chats) throw new Error("No groups")

            chats.map(el => {
                bot.sendMessage(el.chat_id, message)
            })

            setTimeout(() => {
                return res
                    .status(200)
                    .json({
                        status: 200,
                        message: "Message sent to all groups"
                    })
            }, 5_000);
        } catch (err) {
            return next(err);
        }
    }
}