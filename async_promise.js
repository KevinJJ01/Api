//definimos dependencia needle
const axios = require('axios');

const url = 'https://dog.ceo/api/breeds/list/all';
//const url = 'https://pokeapi.co/api/v2/pokemon';

axios.get(url)
    .then((respuesta) => {
        let perros = respuesta.data.message
        perros.forEach((perro) => {
            console.log(perro) 
            console.log("-----------------")
    })
})
    .catch(function(error){
        console.log(error)

    })
