const morgan = require('morgan');
const express = require('express')
const app = express();
const layout = require('./views/layout');
const {db} = require('./models')

const PORT = 3000;
app.use(morgan);
db.authenticate().
    then(() => {
        console.log('connected to the database');
    })
app.get('/', (req,res) => {
    res.send(layout('test'));
})

app.listen(PORT,()=> {
    console.log('listening');
})

