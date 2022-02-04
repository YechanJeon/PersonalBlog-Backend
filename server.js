const express = require('express')
const app = express()
app.use(express.json())

const port = 3000

app.get('/' , (req,res) => {
    res.json({ok : 1})
})

app.listen(port , () => console.log('server on'))