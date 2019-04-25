const morgan = require('morgan');
const express = require('express')
const app = express();
const layout = require('./views/layout');
const {db} = require('./models')

const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');
app.use('/wiki', wikiRouter);

const PORT = 3000;
app.use(morgan("dev"));
db.authenticate().
    then(() => {
        console.log('connected to the database');
    })
app.get('/', (req,res) => {
    res.send(layout('test'));
})
app.get('/', (req,res) => {

    res.redirect('/wiki')
})
app.use('/', (req, res) =>{
    res.status(404).send('Sorry 404')
})

const init = async () => {
    await db.sync();
    app.listen(PORT,()=> {
        console.log('listening');
    })
}

init();


