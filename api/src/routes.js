const express = require('express');
const ClassesControler = require('./controlers/ClassesControlles.js');

const routes = express.Router();
const classesControler = new ClassesControler();


routes.post("/aula", classesControler.create);

module.exports = routes;