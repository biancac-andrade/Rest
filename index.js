const express = require('express');
const server= express();
const filmes = require('./src/data/filmes.json');

/*server.get('/', (req, res) =>{
   return res.json({mensagem:'Nossa API está funcionando'})
}); 
server.get('/usuario', (req, res) =>{
    return res.json({usuario: 'Bianca Cristina'})
 });*/
 server.get('/filmes', (req, res) =>{
    return res.json({filmes})
 });


server.listen(2000, () => {
    console.log('Servidor está funcionando...')
});
