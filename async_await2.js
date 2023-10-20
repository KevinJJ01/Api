//definimos dependencia axios
const axios = require('axios');

const url = 'https://ssd-api.jpl.nasa.gov/sb_sat.api/sat/prov_year';
//const url = 'https://pokeapi.co/api/v2/pokemon';

async function  obtenerSatelites(){
    try {
        const respuesta = await axios.get(url);
        console.log(respuesta.data)
        
        
    } catch (error) {
        console.log(error)
    }
    
}

obtenerSatelites()
