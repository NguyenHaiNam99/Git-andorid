const mysql = require('mysql')

const config = {
    host:'localhost',
    port:'3306',
    user:'root',
    password:'hainam2619',
    database:'testdb'
}

const pool = mysql.createPool(config)

module.exports = pool