const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controllers/messages_controller')

const app = express()

app.use(bodyParser.json())

app.use(express.static('../public/build'))
app.use( express.static( __dirname + '/../public/build' ) );

app.post('/api/messages', controller.create)
app.get('/api/messages', controller.read)
app.put('/api/messages/:id', controller.update)
app.delete('/api/messages/:id', controller.delete)

const port = 3001;
app.listen(port, () => {console.log(`Server listening on port ${port}`)})