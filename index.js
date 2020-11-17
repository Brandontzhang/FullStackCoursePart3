const { response } = require('express')
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
require('dotenv').config({ path: './.env' })
const Phone = require('./models/phone')

// Cors
app.use(cors())
// parse req.body
app.use(express.json())
// server output
morgan.token('body', function (req, res) { return JSON.stringify(req.body) })
app.use(morgan(':method :url :status :res[content-length] :response-time ms :body'))
// parse build
app.use(express.static('build'))

app.put('/api/persons/:id', (req, res, next) => {
    const person = req.body

    Phone.findByIdAndUpdate(req.params.id, person, { new: true })
        .then(updatedPerson => {
            res.json(updatedPerson)
        })
        .catch(err => next(err))
})

const createErrorHandling = (error, request, response, next) => {
    response.send(error.JSON)
}

app.use(createErrorHandling)

app.get('/api/persons', (req, res) => {
    Phone.find()
        .then(phones => {
            res.json(phones)
        })
})

app.get('/info', (req, res) => {
    const size = Phone.find().then(phones => {
        res.send(`<p>Phonebook has info for ${phones.length} people </p> \n ${new Date()}`)
    })
})

app.get('/api/persons/:id', (req, res, next) => {
    Phone.findById(req.params.id).then(person => {
        if (person) {
            res.json(person)
        } else {
            response.status(404).end()
        }
    })
        .catch(err => { next(err) })
})

app.post('/api/persons', (req, res) => {
    const person = req.body

    const newPerson = new Phone({ ...person })
    newPerson.save()
        .then(res => {
            console.log(res)
        })
        .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
    Phone.findByIdAndRemove(req.params.id)
        .then(results => {
            res.status(204).end()
        })
        .catch(err => next(err))
})

const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }

    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})