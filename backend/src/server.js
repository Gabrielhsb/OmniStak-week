const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://gabrielhsb:gabrielhsb@cluster0-6hfac.mongodb.net/semanadev?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

//re.query = acessar query params(para filtros)
//req.params = Acessar route params(para edição e delete)
//req.body = Acessar corpo da requisição ( para criação e edição)
app.use(express.json());
app.use(routes);

app.listen(3333);

