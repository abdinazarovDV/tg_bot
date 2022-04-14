require('dotenv').config();

const { env } = process;

module.exports = {
    TOKEN: '5387423813:AAHuSGDHLUPkujZER8Q1DtvvAnTD7WkBt9k' || env.BOT_TOKEN,
    PORT: 4001,
    JWT_KEY: '123456789'
}