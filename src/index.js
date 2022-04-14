const express = require('express');
const config = require('./config.js');

const PORT = config.PORT;
const app = express();
const { botEmit } = require('./lib/bot.js')
botEmit();

const msgRouter = require('./routes/msg.js');

app.use(express.json());

app.use("/sendMessage", msgRouter);

app.listen(PORT, () => console.log("server at http://localhost:" + PORT));