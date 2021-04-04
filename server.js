const express = require('express');
const rowdy = require('rowdy-logger');
const cors = require('cors');
const bookRouter = require('./routes/bookRouter');

const app = express();
const port = process.env.PORT || 3000;
const stats = rowdy.begin(app);

app.use(express.json());
app.use(cors())
app.use('', bookRouter);

app.listen(port, () => {
    stats.print();
    console.log('started Server');
})