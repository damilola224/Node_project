require('dotenv').config();
const http = require('http');
const app = require('./app/app');
// const bcrypt = require('bcrypt');
require('./config/dbConnect');

const PORT = process.env.PORT || 2026;

//SERVER
const server = http.createServer(app);
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
