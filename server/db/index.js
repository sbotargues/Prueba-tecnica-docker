const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/docker-node-mongo',{useNewUrlParser:true})
.then(()=>console.log('connected to db'))
.catch((err)=>console.log(err))

const db = mongoose.connection;

module.exports = db;
