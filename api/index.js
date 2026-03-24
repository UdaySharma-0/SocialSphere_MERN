const app = require('../Backend/src/app');
const connectDb = require('../Backend/src/db/db');

// Connect to database
connectDb();

module.exports = app;