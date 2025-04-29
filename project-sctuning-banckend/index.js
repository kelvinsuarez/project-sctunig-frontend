const express = require('express');
const {PORT = 3000} = process.env;
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('<h1>Página en proceso</h1>');
  });


app.listen(PORT, ()=>{
    console.log(`app se esta escuchando en el puerto ${PORT}`);
})