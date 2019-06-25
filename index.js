const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const friends = require('./data.json')


const config = {
    name: "Dockerized API",
    port: 3000,
    host: '0.0.0.0' // ES IGUAL A LOCAL HOST SE PUEDE CAMBIAR POR LA IP DEL SERVIDOR

};

const app = express() // esta linea de codico indica que esta constante es igual a nuesta api

app.use(bodyParser.json())
app.use(cors())

///////////////////////////////////////////////////////////

app.get('/', (req, res) => {

    res.status(200).send("Hola Mundo!")


})

///////////////////////////////////////////////////////////

app.get('/friends', (req, res) => {

    res.status(200).send(friends)
})

////////////////////////////////////////////////////////////

app.post('/friends', (req, res) => {

    let new_friend = {

        name: req.body.name,
        school: req.body.school

    }

    friends.push(new_friend)
    res.status(200).send({
        message: "Registrado!!",
        item: new_friend
    })
})
///////////////////////////////////////////////////////////

app.listen(config.port, config.host, () => {

    console.log(`Running on http://${config.host}:${config.port}`)

})
