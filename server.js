/*=============== SETUP ===============*/
// server setup
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// routing table
const rowdy = require('rowdy-logger');
const routesReport = rowdy.begin(app);

// route module
const bookRoutes = require('./routes/bookRoutes');

// allow json body for input routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/*=============== ROUTES ===============*/

app.use('/books', bookRoutes);

/*=============== SERVER ===============*/

app.listen(PORT, () =>
{
    console.log(`server listening on port ${PORT}`);
    routesReport.print();
})