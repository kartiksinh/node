
const express = require('express');

const app = express();

app.use('/', (req,res, next)=> {
    console.log("this always runs");
    next();
});
app.use('/add-product',(req, res, next) => {
    res.send('<h1>ADD Product Page</h1>');
});
app.use('/',(req, res, next) => {
    console.log("I am in another middleware");
    res.send('<h1>Hello from Express CSS kartik</h1>');
});

app.listen(3000)
