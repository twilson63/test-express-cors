const app = require('express')()
const cors = require('cors')

app.use(cors())

app.post('/', (req, res) => {
  res.send(200, {ok: true})
})

app.listen(4000)
