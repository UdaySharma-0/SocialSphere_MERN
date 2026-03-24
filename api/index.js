const app = require('../Backend/src/app');
const connectDb = require('../Backend/src/db/db');

// Connect to database
connectDb();

// For Vercel with @vercel/node, exporting an Express app can work.
// If you prefer serverless wrapper, install serverless-http and use:
// const serverless = require('serverless-http');
// module.exports = serverless(app);

module.exports = app;