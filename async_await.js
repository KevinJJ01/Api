//definimos dependencia axios
const axios = require('axios');

const url = 'https://dog.ceo/api/breeds/list/all';
//const url = 'https://pokeapi.co/api/v2/pokemon';

async function  obtenerPerros(){
    try {
        const respuesta = await axios.get(url);
        console.log(respuesta.data.message.terrier)
        
    } catch (error) {
        console.log(error)
    }
    
}

obtenerPerros()
