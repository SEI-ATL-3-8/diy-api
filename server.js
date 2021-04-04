const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())

const router = require('./routes/bookRoutes')
app.use('/books', router)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

