const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send(`testando`))
app.get('/break', (req, res) => {
  res.send('Quebrando...')
  process.exit(1)
})
app.listen(port, () => console.log(`Example p listenig on port ${port}!`));

