const express = require('express')
const app = express()
const port = 8080
const { createConnection } = require('mysql2');
const connection = createConnection({
    host: 'db',
    user: 'root',
    password: 'password', 
    database: 'my_db',
  });

app.get('/', (req, res) => {
    connection.connect((err) => {
        if (err) throw err;
        console.log('Connected to MySQL db');
        res.send('Connected to MySQL db')
    });
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
