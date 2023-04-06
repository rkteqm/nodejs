require('dotenv').config();

module.exports = {
    HOST: process.env.host,
    USER: process.env.username,
    PASSWORD: process.env.password,
    DB: process.env.database,
}