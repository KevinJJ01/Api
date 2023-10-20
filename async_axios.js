//definimos dependencia axios
const axios = require('axios');

//const url = 'https://dinosaur-facts-api.shultzlab.com/dinosaurs';
const url = 'https://ssd-api.jpl.nasa.gov/sb_sat.api';

axios.get(url)
    .then((respuesta) => {
        let satelites = respuesta.data.results
        satelites.forEach((satelite) => {
            console.log(satelite.name) 
            console.log("-----------------")
    })
})
    .catch(function(error){
        console.log(error)

    })