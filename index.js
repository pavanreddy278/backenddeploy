require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('<h3>Welcome to Twitter!</h3>')
})

app.get('/data',(req,res)=>{
    res.json({ user: 'tobi' })
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
