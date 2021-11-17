//Aqui traemos los datos de la API
const fetch = require('node-fetch')
const getfilms = async (movie) => {
    const API_KEY = '85e1c0eb';
    const data = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${movie}`)
    const films = await data.json()
    return films
}
const films = {
    getfilms  
}
module.exports = films;