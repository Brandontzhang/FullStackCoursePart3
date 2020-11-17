const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator')

const password = "BZ101311"
const url = process.env.MONGODB_URL
console.log(process.env.MONGODB_URL)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(result => {
        console.log("Connected to MongoDB")
    })
    .catch(error => {
        console.log('error connecting to MongoDb', error.message)
    })

const phoneSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        required: true,
        unique: true
    },
    number: {
        type: String,
        minlength: 2,
        required: true
    }
})

phoneSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Phone', phoneSchema)