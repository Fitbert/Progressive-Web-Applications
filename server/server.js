//imports
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

//middleware
app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Listen -> req, res
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
