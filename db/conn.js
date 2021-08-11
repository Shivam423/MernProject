const mongoose = require('mongoose');
const DB = process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}).then( () => {
    console.log('Connected to database ')
})
.catch( (err) => {
    console.error(`Error connecting to the database. \n${err}`);
})