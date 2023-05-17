const express = require('express')
const redis = require('redis')
const Pool = require('pg').Pool

const app = express()
const client = redis.createClient({url: "redis://redis:6379"})

app.use(express.json())
client.connect()
client.on('connect', function() {
  console.log('Connected!');
});

const pool = new Pool({
  user: 'user',
  host: 'db',
  database: 'postgres',
  password: 'password',
  port: 5432,
});

app.get('/messages', async (req, res) => {
  const msg = await client.get("message")
  res.send(msg)
});

app.post('/messages', async (req, res) => {
  await client.set("message", "Hello!")
  res.send("Added")
});

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  pool.query(`INSERT INTO users (name, email) VALUES (${name}, ${email}) RETURNING *`, (err, results) => {
    if (err) {
      throw err
    }
    res.status(201).send(`User added with ID: ${results.rows[0].id}`)
  })
});

app.listen(3000, () => {
  console.log('App listening on port 3000')
});
