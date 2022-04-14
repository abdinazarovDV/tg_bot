
module.exports.swaggerDocument = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Nodejs app tg_bot',
            version: '1.0.0'
        },
        servers: [
            {
                api: 'http://localhost:4001/'
            }
        ]
    },
    apis: ['./index.js']
}