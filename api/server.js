const express = require('express');

const helmet = require('helmet');


const server = express();

// const cors = require('cors');
// server.use(cors({
//     origin: 'http://localhost:3000',
//     credentials: true,
// }
// ));

server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
    res.status(200).json({ api: "API is working" });
})

module.exports = server;