//commonjs 
//module


//definimos dependencia commonjs  
const request = require('request');

const url = 'https://ssd-api.jpl.nasa.gov/sb_sat.api';
//const url = 'https://pokeapi.co/api/v2/pokemon';

let r = request(url,
    {json:true},
    (error, respuesta, body) => {
        let satelites = body 

        satelites.forEach((satelite) => {
        console.log(satelite.data.data) 
        console.log("-----------------")
    })
})