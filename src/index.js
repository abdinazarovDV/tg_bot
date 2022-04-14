const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const config = require('./config.js');
const { swaggerDocument } = require('./swagger.js');
const { botEmit } = require('./lib/bot.js');
botEmit();

const PORT = config.PORT;
const app = express();

const swaggerSpec = swaggerJSDoc(swaggerDocument);

const msgRouter = require('./routes/msg.js');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());

app.use("/sendMessage", msgRouter);

app.listen(PORT, () => console.log("server at http://localhost:" + PORT));