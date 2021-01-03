const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const bcrypt = require('bcrypt');
const v4 = require('uuid').v4;
const jwt = require('jsonwebtoken');
const jwtSecret = 'SUPERSECRETE20220';

const saltRound = 10;
const url = "mongodb://localhost:27017";
const dbName = 'simple-login-db';

const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});