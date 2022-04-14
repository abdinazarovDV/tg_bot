const { Pool } = require('pg')
const { PG } = require('../config.js')
const pool = new Pool({
    user: "inmjyoem",
    password: "Krbuay7VQ2Q4Wv7srH08F8cMe96diLUx",
    database: "inmjyoem",
    host: "tai.db.elephantsql.com"
})

module.exports.fetch = async (SQL, ...params) => {
    const client = await pool.connect()
    try {
        const { rows: [row] } = await client.query(SQL, params.length ? params : null)
        return row
    }
    finally {
        client.release()
    }
}

module.exports.fetchAll = async (SQL, ...params) => {
    const client = await pool.connect()
    try {
        const { rows } = await client.query(SQL, params.length ? params : null)
        return rows
    }
    finally {
        client.release()
    }
}