const express = require('express');
const blogRouter = require('./routes/blog');
const { connectDB } = require('./dbconnections/blogConnect');

const PORT = 2000;
const app = express();
app.use(express.json());
app.use('/blogs', blogRouter);
 
// connecting to db

connectDB()
.then( () => {
    console.log('db connected successfully...');
})
.catch(e => {
    console.log('error occured during db connection : error => ', e);
})
app.listen(PORT , () => {
    console.log('server running succesfully...');
    
})