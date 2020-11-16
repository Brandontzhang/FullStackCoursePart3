const { response } = require('express')
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

app.use(cors())
app.use(express.json())
morgan.token('body', function(req, res) {return JSON.stringify(req.body)})
app.use(morgan(':method :url :status :res[content-length] :response-time ms :body'))

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456",
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "040-123456",
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "040-123456",
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "040-123456",
    }
]

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/info', (req, res) => {
    res.send(`<p>Phonebook has info for ${persons.length} people </p> \n ${new Date()}`)
})

app.get('/api/persons/:id', (req, res) => {
    const personId = req.params.id
    const person = persons.find(p => p.id == parseInt(personId))

    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.post('/api/persons', (req, res) => {
    const person = req.body

    if (persons.find(p => p.name === person.name)) {
        res.send("Name must be unique")
        res.status(400).end()
    } else if (!person.number || !person.name || !person) {
        res.send("Information is missing")
        res.status(204).end()
    } else {

        person.id = Math.floor(Math.random() * 100)
        persons = persons.concat(person)

        res.send(person)
    }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})