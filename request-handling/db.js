const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/fast-track-db', {useNewUrlParser: true}, (err) => {
    if (err) return console.log(err);
    return console.log('Connection successful');
});

const {Schema} = mongoose;

const dogSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 2,
    },
    breed: {
        type: String,
        required: true,
        min: 2,
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max: 99,
    },
});

const Dog = mongoose.model('dog', dogSchema);

module.exports = Dog;