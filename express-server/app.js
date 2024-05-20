const express = require('express')
const logger = require('morgan')

const app = express()

app.use(logger('dev'))
app.use(express.static('public'))
app.use(express.json())



// routing
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/home-page.html`)
})

app.get('/galeria', (req, res) => {
    res.sendFile(`${__dirname}/views/gallery-page.html`)
})

app.get('/api/cookies', (req, res) => {

    const cookiesData = [
        {
            name: 'Oreo',
            country: 'ESP',
            nutrients: { kcal: 390, sugar: 57 }
        },
        {
            name: 'Dinosaurus',
            country: 'ESP',
            nutrients: { kcal: 87, sugas: 44 }
        }
    ]

    res.json(cookiesData)
})



// listen
app.listen(5005, () => {
    console.log('Servidor levantado yabadú')
})