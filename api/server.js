const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const usersRouter = require("../users/users-router.js");
const authRouter = require("../auth/auth-router.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/users', usersRouter);
server.use('/api', authRouter);


server.get('/', (req, res) => {
    res.send(`Server Running`)
})

module.exports = server;