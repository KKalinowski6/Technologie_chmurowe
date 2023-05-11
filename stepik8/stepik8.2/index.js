const express = require('express')
const redis = require('redis')

const app = express()
const client = redis.createClient({url: "redis://redis:6379"})

app.use(express.json())
client.connect()
client.on('connect', function() {
  console.log('Connected!');
});

app.get('/', async (req, res) => {
  const msg = await client.get("message")
  res.send(msg)
});

app.post('/', async (req, res) => {
  await client.set("message", "Hello!")
  res.send("Added")
});

app.listen(3000, () => {
  console.log('App listening on port 3000')
});
