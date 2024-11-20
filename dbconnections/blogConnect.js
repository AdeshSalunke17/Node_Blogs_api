const mongoose = require('mongoose');

async function connectDB() {
    return mongoose.connect('mongodb://127.0.0.1:27017/blogs');
}

module.exports = {
    connectDB
}